const editBttn = document.getElementById('editCollection');
const blocker = document.getElementById('editBlocker');
const container = document.getElementById('editDetails');

const submitBttn = document.getElementById('submit-edit');
const cancelBttn = document.getElementById('cancel-edit');

const editName = document.getElementById('edit-name');
const editDesc = document.getElementById('edit-desc');

// ---------- Edit Button ---------- //
document.getElementById('editCollection').addEventListener('click', () => {
  container.style.display = 'block';
  blocker.style.display = 'block';
  document.body.style.overflow = 'clip';
});

editBttn.addEventListener('click', (e) => {
  e.preventDefault();
  if (container.classList.contains('hidden')) {
    console.log(container);
    container.classList.remove('hidden');
    console.log(container);
    // editBttn.classList.add('hidden');
  } else {
    container.classList.add('hidden');
    // editBttn.classList.add('hidden');
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

    if (data.message === 'edit successful') {
      container.style.display = 'none';
      blocker.style.display = 'none';
      document.body.style.overflow = 'auto';
      document.querySelector('h1').innerText = editName.value;
      document.querySelector('h2').innerText = editDesc.value;
    }
  });

  cancelBttn.addEventListener('click', (e) => {
    container.style.display = 'none';
    blocker.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});
