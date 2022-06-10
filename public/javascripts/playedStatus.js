
const allDropDowns = document.querySelectorAll('.status-update');


const updateStatus = async (e) => {
    const newStatus = e.target.value;
    const colId = e.target.dataset.collection;
    const gameId = e.target.id;
    await fetch('/entries', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            game_id: gameId,
            played_status_id: newStatus,
            collection_id: colId
        })
    })
}

allDropDowns.forEach((singleSelect) => {
    singleSelect.addEventListener('change', updateStatus);
})
