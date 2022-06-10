
const deleteBtn = document.querySelector('.deleteCollBtn');

const deleteAction = async (e) => {
    e.preventDefault();
    const url = window.location.pathname
    // console.log('here I am')
    const collectionId = url.split('/')[2];
    const fetchUrl = `/collections/${collectionId}`

    const res = await fetch(fetchUrl, {
        method: 'DELETE'
    })

    const data = await res.json();

    if (data.message === 'it is deleted') {
        // const collectionsContainer = document.querySelector('.collection-container')
        // // console.log(collectionsContainer)
        // collectionsContainer.remove()
        window.location.href = `/users/${data.userId}`
    }

}

deleteBtn.addEventListener('click', deleteAction)
