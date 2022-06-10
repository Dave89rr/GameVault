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
  // console.log('hello from edit button')
  const reviewId = e.target.id.split('-')[2];
  const editReview = document.getElementById(`edit-form-review-${reviewId}`);

  // console.log(editReview)
  if (editReview.classList.contains('hidden')) {
    editReview.classList.remove('hidden');
  } else {
    editReview.classList.add('hidden');
  }

  const submitBtn = document.getElementById(`edit-submit-${reviewId}`);
  submitBtn.addEventListener('click', async (submitEvent) => {
    submitEvent.preventDefault();
    const content = document.getElementById(`${reviewId}-edit-content`).value;
    const url = window.location.pathname;
    const gameId = url.split('/')[2];
    const fetchUrl = `/games/${gameId}/reviews/${reviewId}`;
    // console.log(content);

    const res = await fetch(fetchUrl, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: content }),
    });

    const data = await res.json();
    // console.log(data);
    if (data.message === 'edit successful') {
      const reviewContainer = document.getElementById(
        `reviewContent-${data.review.id}`
      );
      //   console.log(reviewContainer);
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
document.getElementById('postReview').addEventListener('click', async (e) => {
  e.preventDefault();
  const url = window.location.pathname;
  const gameId = url.split('/')[2];
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
    indReview.innerHTML = `
        <p>${data.user.username} rated <span>${data.review.stars}<span></p>
        <p id='reviewContent-${data.review.id}'>${data.review.content}</p>
        <button class='delete-btn' id='delete-review-${data.review.id}'>Delete</button>
        <button class='edit-btn' id='edit-review-${data.review.id}'>Edit</button>
        <form class='hidden' id='edit-form-review-${data.review.id}'><label>Content</label>
        <input type='text' name='content' value='${data.review.content}' id='${data.review.id}-edit-content'/>
        <button type='submit' name='review-submit' id='edit-submit-${data.review.id}'>Submit</button>
        </form>
        `;

    /* form(class='hidden' id=`edit-form-review-${review.id}`)
              label Content
              input(type='text' name='content' value=review.content id=`${review.id}-edit-content`)
              button(type='submit' name='review-submit' id=`edit-submit-${review.id}`) Submit */
    const ul = document.querySelector('ul');
    ul.appendChild(indReview);
    textarea.value = '';
    document
      .getElementById(`delete-review-${data.review.id}`)
      .addEventListener('click', deleteReview);
    document
      .getElementById(`edit-review-${data.review.id}`)
      .addEventListener('click', editReview);
  } else {
    alert('Sorry, one review per user');
  }
});
