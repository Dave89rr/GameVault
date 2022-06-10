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
                <p>${data.review.content}</p>
                <button id='delete-review-${data.review.id}'>Delete</button>
                `;
    // button(class="delete-btn" id=`delete-review-${review.id}`) Delete
    // button(class="edit-btn" id=`edit-review-${review.id}`) Edit
    const ul = document.querySelector('ul');
    ul.appendChild(indReview);
    textarea.value = '';
    document
      .getElementById(`delete-review-${data.review.id}`)
      .addEventListener('click', async (e) => {
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
          indReview.remove();
        }
      });
  }
});
