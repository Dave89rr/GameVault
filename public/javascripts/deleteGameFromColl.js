const deleteButtons = document.querySelectorAll('.delGameBtnDiv');

for (i = 0; i < deleteButtons.length; i++) {
  const deleteButton = deleteButtons[i];

  deleteButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const gameId = e.target.id.split('-')[1];

    const res = await fetch(`/entries/${gameId}`, {
      method: 'DELETE',
    });

    const data = await res.json();
    if (data.message === 'it is deleted') {
      const card = document.getElementById(`card-${gameId}`);
      card.remove();
    }
  });
}
