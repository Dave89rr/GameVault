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
      `;

      /*   div(class='card')
    .game-title
      p= game.name
    a(href=`/games/${game.id}`)
      div(class='home-img' style=`background-image: url(${game.img_url});`) */

      const imageBox = document.querySelector('.img-box');

      imageBox.appendChild(card);
    } else {
      alert('Game is already in your collection');
    }
  });
