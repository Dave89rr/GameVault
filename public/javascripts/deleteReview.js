const deleteBtns = document.querySelectorAll('.delete-btn');

for (let i = 0; i < deleteBtns.length; i++) {
  const btn = deleteBtns[i];

  btn.addEventListener('click', async (e) => {
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
  });
}
