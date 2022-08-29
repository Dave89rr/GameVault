const deleteBtn = document.querySelector('.deleteCollBtn');
let valid;
if (!deleteBtn) {
  valid = false;
  console.log('Unable to find buttons to delete collections');
} else {
  valid = true;
}

const deleteAction = async (e) => {
  e.preventDefault();
  const url = window.location.pathname;
  const collectionId = url.split('/')[2];
  const fetchUrl = `/collections/${collectionId}`;

  const res = await fetch(fetchUrl, {
    method: 'DELETE',
  });

  const data = await res.json();

  if (data.message === 'it is deleted') {
    window.location.href = `/users/${data.userId}`;
  }
};

if (valid) {
  deleteBtn.addEventListener('click', deleteAction);
}
