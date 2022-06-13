const reviewBlocker = document.getElementById('edit-review-blocker')
const editReviewDiv = document.getElementById('edit-review-form-container')
// ------------------- Delete a Review ------------------- //

const deleteBtns = document.querySelectorAll('.delete-btn');

const deleteReview = async (e) => {
  e.preventDefault();
  const url = window.location.pathname;
  const gameId = url.split('/')[2];
  const reviewId = e.target.id.split('-')[2];
  const fetchUrl = `/games/${gameId}/reviews/${reviewId}`;
  const res = await fetch(fetchUrl, {
    method: 'DELETE',
  });

  const data = await res.json();
  if ((data.message = 'deleted')) {
    const container = document.getElementById(`review-container-${reviewId}`);
    container.remove();
  }
};

for (let i = 0; i < deleteBtns.length; i++) {
  const btn = deleteBtns[i];

  btn.addEventListener('click', deleteReview);
}

// ------------------- Edit a Review ------------------- //
const editBtns = document.querySelectorAll('.edit-btn');

const editReview = (e) => {
  e.stopPropagation();
  const reviewId = e.target.id.split('-')[2];
  const editReview = document.getElementById(`edit-form-review-${reviewId}`);

  if (editReview.classList.contains('hidden')) {
    editReview.classList.remove('hidden');
  } else {
    editReview.classList.add('hidden');
  }

  reviewBlocker.style.display = 'block'
  editReviewDiv.style.display = 'block'

  const submitBtn = document.getElementById(`edit-submit-${reviewId}`);
  submitBtn.addEventListener('click', async (submitEvent) => {
    submitEvent.preventDefault();
    reviewBlocker.style.display = 'none'
    const content = document.getElementById(`${reviewId}-edit-content`).value;
    const url = window.location.pathname;
    const gameId = url.split('/')[2];
    const fetchUrl = `/games/${gameId}/reviews/${reviewId}`;

    const res = await fetch(fetchUrl, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: content }),
    });

    const data = await res.json();
    if (data.message === 'edit successful') {
      const reviewContainer = document.getElementById(
        `reviewContent-${data.review.id}`
      );
      reviewContainer.innerText = `${data.review.content}`;
      editReview.classList.add('hidden');
    }
  });
};
for (let i = 0; i < editBtns.length; i++) {
  const btn = editBtns[i];
  btn.addEventListener('click', editReview);
}

// ------------------- Post a Review ------------------- //
try {
  document.getElementById('postReview').addEventListener('click', async (e) => {
    e.preventDefault();
    const url = window.location.pathname;
    const content = document.getElementById('content').value;
    const textarea = document.getElementById('content');
    const ratings = document.getElementById('ratings').value;
    const jsonBody = JSON.stringify({ content, ratings });
    const catchResponse = await fetch(`${url}/reviews`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody,
    });

    const data = await catchResponse.json();
    if (data.message === 'review ok') {
      const indReview = document.createElement('div');
      indReview.setAttribute('class', 'ind-review');
      indReview.setAttribute('id', `review-container-${data.review.id}`);
      indReview.innerHTML = `<div class='user-rated-stars'>
<p>${data.user.username}<span>rated ${data.review.stars}<span></p></div>
<div class='review-and-button'><p id='reviewContent-${data.review.id}'>${data.review.content}</p>
<div class='delete-and-edit'>
<div class='edit-btn' id='edit-review-${data.review.id}'>
<object data="../media/editIcon.svg" id="svgEditIcon"></object>
</div>
<div class='delete-btn' id='delete-review-${data.review.id}'>
<object data="../media/deleteIcon.svg" id="svgDeleteIcon"></object>
</div>
<div id='edit-review-blocker'></div>
<div id='edit-review-form-container'>
<form class='hidden' id='edit-form-review-${data.review.id}'>
<div id='label-container'><label>Content</label></div>
<div id='review-content-container'>
<textarea type='text' name='content' id='${data.review.id}-edit-content'/>${data.review.content}</textarea>
</div>
<div id='edit-review-button-container'>
<button type='submit' name='review-submit' id='edit-submit-${data.review.id}'>Submit</button>
</div>
</form>
</div>
</div>
</div>
      `;
      const ul = document.querySelector('.big-review-container');
      ul.appendChild(indReview);
      textarea.value = '';
      document
        .getElementById(`delete-review-${data.review.id}`)
        .addEventListener('click', deleteReview);
      document
        .getElementById(`edit-review-${data.review.id}`)
        .addEventListener('click', editReview);
    } else {
      alert('Sorry, one review allowed per game');
    }
  });
} catch (e) {
  // do nothing
}
