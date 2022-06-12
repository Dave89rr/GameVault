const bcrypt = require('bcryptjs/dist/bcrypt');
var express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth');

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a username.')
    .isLength({ max: 50 })
    .withMessage('Username must not exceed 50 characters.')
    .custom((value) => {
      return db.User.findOne({ where: { username: value } }).then((user) => {
        if (user) {
          return Promise.reject('The provided username is not available.');
        }
      });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email.')
    .isEmail()
    .withMessage('Email Address must be a valid email.')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            'The provided Email Address is already in use by another account.'
          );
        }
      });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage(
      'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
    ),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.get('/sign-up', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post(
  '/sign-up',
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { username, email, password, bio, icon } = req.body;

    const user = await db.User.build({
      username,
      email,
      bio,
      icon,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 12);
      user.password = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/collections/new');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Sign Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post(
  '/login',
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { username } });

      if (user) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.password.toString()
        );

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect('/');
        }
      }

      errors.push('Login failed for the provided username and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('login', {
      title: 'Login',
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});

router.get(
  '/:id(\\d+)', requireAuth,
  asyncHandler(async (req, res) => {
    const userId = res.locals.user.id;
    const collections = await db.Collection.findAll({
      include: 'Games',
      where: {
        user_id: userId,
      },
      order: [['name', 'ASC']],
    });
    res.render('vault-view', { collections });
  })
);

router.get(
  '/demo-user',
  asyncHandler(async (req, res) => {
    const user = await db.User.findByPk(1);
    loginUser(req, res, user);
    res.redirect('/');
  })
);

router.put(
  '/:id(\\d+)',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { bio, icon } = req.body;
    const userId = req.params.id;
    const user = await db.User.findByPk(userId);
    if (bio) await user.update({ bio });
    else await user.update({ icon });
    res.send({ message: 'Success' });
  })
);

module.exports = router;
