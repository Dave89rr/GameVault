document
  .getElementById('addGameToColl')
  .addEventListener('click', async (e) => {
    e.preventDefault();
    const url = window.location.pathname;
    const collectionID = url.split('/')[2];
    const selectValue = document.getElementById('selectValue').value;
    const bodyObj = {
      game_id: selectValue,
      played_status_id: 1,
      collection_id: collectionID,
    };
    const jsonBody = JSON.stringify(bodyObj);
    const res = await fetch(`${url}/entries/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonBody,
    });
  });
