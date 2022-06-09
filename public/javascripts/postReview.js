document.getElementById('postReview').addEventListener('click', async (e) => {
  e.preventDefault();
  const url = window.location.pathname;
  const gameId = url.split('/')[2];
  const content = document.getElementById('content').value;
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
                `;
    const ul = document.querySelector('ul');
    ul.appendChild(indReview);
  }
});
