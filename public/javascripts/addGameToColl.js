import playedStatus from './playedStatus.js';
import deleteFromCol from './deleteGameFromColl.js';

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
      card.setAttribute('id', `card-${data.game.id}`);

      card.innerHTML = `<div class='game-title'>
      <p>${data.game.name}</p>
      </div>
      <a href='/games/${data.game.id}'>
      <div class='home-img' style='background-image: url(${data.game.img_url});'></div>
      </a>
      <div id="drop-remove-flex">
      
  <select class="status-update" id="${data.game.id}" data-collection="${collectionID}">
    <option value="1">
      Want to Play
    </option>
    <option value="2">Currently Playing</option>
    <option value="3">Want to buy</option>
    <option value="4">Played through</option>
    <option value="5">100% Achievements</option>
  </select>
  <div class="delGameBtnDiv" id="delete-${data.game.id}">
  <object class="delGameBtn" data="../media/deleteIcon.svg"> </object>
  </div></div>
      `;
      const imageBox = document.querySelector('.img-box');

      imageBox.appendChild(card);

      document
        .getElementById(`${data.game.id}`)
        .addEventListener('change', playedStatus);

      const deleteButtons = document.querySelectorAll('.delGameBtnDiv');
      const pickThis = deleteButtons.length - 1;
      deleteButtons[pickThis].addEventListener('click', deleteFromCol);
    } else {
      alert('Game is already in your collection');
    }
  });
