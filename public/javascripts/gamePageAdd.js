document.getElementById('gamePageAdd').addEventListener('click', async (e) => {
    e.preventDefault();
    const url = window.location.pathname;
    const game_id = url.split('/')[2];
    const collection_id = document.getElementById('collection_id').value;
    const bodyObj = {
        game_id: game_id,
        collection_id: collection_id
    };
    const jsonBody = JSON.stringify(bodyObj);
    const catchResponse = await fetch(`/entries/`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonBody
    });

    const data = await catchResponse.json();

    if (data.message === 'db updated') {
        window.alert('Game added to collection');
    }
})
