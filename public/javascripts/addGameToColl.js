document
  .getElementById('addGameToColl')
  .addEventListener('click', async (e) => {
    e.preventDefault();
    const url = window.location.pathname;
    const collectionID = url.split('/')[2];
    const selectValue = document.getElementById('selectValue').value;
    const bodyObj = {
      game_id: selectValue,
      collection_id: collectionID,
    };
    const jsonBody = JSON.stringify(bodyObj);
    const catchResponse = await fetch(`/entries/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonBody,
    });

    const data = await catchResponse.json();

    if (data.message === 'db updated') {
      const card = document.createElement('div');
      const cardTitle = document.createElement('div');
      card.setAttribute('class', 'card');
      card.innerHTML = `<div class='game-title'>
      <p>${data.game.name}</p>
      </div>
      <a href='/games/${data.game.id}'>
      <div class='home-img' style='background-image: url(${data.game.img_url});'></div>
      </a>
  <select class="status-update" id="${data.game.id}" data-collection="${collectionID}">
    <option value="1">
      Want to Play
    </option>
    <option value="2">Currently Playing</option>
    <option value="3">Want to buy</option>
    <option value="4">Played through</option>
    <option value="5">100% Achievements</option>
  </select>
      `;
      const imageBox = document.querySelector('.img-box');

      imageBox.appendChild(card);
      // unable to figure out how to import this callback from playedStatus.js
      // without turning playedStatus into a module. Unfortunately had to copy
      // it here thus making our code a little more wet 😢
      document
        .getElementById(`${data.game.id}`)
        .addEventListener('change', async (e) => {
          const newStatus = e.target.value;
          const colId = e.target.dataset.collection;
          const gameId = e.target.id;
          await fetch('/entries', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              game_id: gameId,
              played_status_id: newStatus,
              collection_id: colId,
            }),
          });
        });
    } else {
      alert('Game is already in your collection');
    }
  });
