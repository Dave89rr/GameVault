const editBttn = document.getElementById('editCollection');
const form = document.getElementById('edit-coll');
const container = document.querySelector('.collection-container');

const submitBttn = document.getElementById('submit-edit');
const cancelBttn = document.getElementById('cancel-edit');

const editName = document.getElementById('edit-name');
const editDesc = document.getElementById('edit-desc');

editBttn.addEventListener('click', (e) => {
  e.preventDefault();
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    editBttn.classList.add('hidden');
  } else {
    form.classList.add('hidden');
    editBttn.classList.add('hidden');
  }

  submitBttn.addEventListener('click', async (e) => {
    e.preventDefault();
    const newName = editName.value;
    const newDesc = editDesc.value;

    const url = window.location.pathname;
    const collectionId = url.split('/')[2];

    const fetchUrl = `/collections/${collectionId}`;
    const res = await fetch(fetchUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newName,
        description: newDesc,
      }),
    });

    const data = await res.json();

    if ((data.message = 'edit successful')) {
      container.children[0].children[0].innerText = data.name;
      container.children[0].children[1].innerText = data.description;
      form.classList.add('hidden');
      editBttn.classList.remove('hidden');
    }
  });

  cancelBttn.addEventListener('click', (e) => {
    form.classList.add('hidden');
    editBttn.classList.remove('hidden');
  });
});
