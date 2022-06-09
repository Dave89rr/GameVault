const editProfileDiv = document.getElementById('editDetails');
const editIconDiv = document.getElementById('editIcon');
const url = window.location.pathname;

// ---------- Edit Button ---------- //
document.getElementById('editProfile').addEventListener('click', () => {
  editProfileDiv.style.display = 'block';
});

//  ---------- Edit Icon  ---------- //
document.getElementById('editIconImg').addEventListener('click', (event) => {
  editProfileDiv.style.display = 'none';
  editIconDiv.style.display = 'block';
});

//  ---------- Cancel Buttons  ---------- //
document.getElementById('cancelChanges').addEventListener('click', (event) => {
  editProfileDiv.style.display = 'none';
});
document
  .getElementById('cancelIconChange')
  .addEventListener('click', (event) => {
    editIconDiv.style.display = 'none';
    editProfileDiv.style.display = 'block';
  });

//  ---------- Save Changes Buttons  ---------- //
document
  .getElementById('saveChanges')
  .addEventListener('click', async (event) => {
    const bio = document.getElementById('editBio').value;
    const liveBio = document.getElementById('liveBio');
    const res = await fetch(`${url}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bio: bio }),
    });
    liveBio.innerText = `Bio: ${bio}`;
    editProfileDiv.style.display = 'none';
  });

document
  .getElementById('saveIconChange')
  .addEventListener('click', async (event) => {
    const liveIcon = document.getElementById('liveIcon');
    const editIcon = document.getElementById('editIconImg');
    const iconCheckboxes = document.getElementById('iconSelection').children;
    let icon;

    for (i = 0; i < iconCheckboxes.length; i++) {
      let ele = iconCheckboxes[i];
      if (ele.type === 'checkbox' && ele.checked) {
        icon = ele.value;
      }
    }
    // const iconName = icon.split('/')[3];
    const res = await fetch(`${url}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ icon: icon }),
    });

    liveIcon.src = `${icon}`;
    editIcon.src = `${icon}`;
    editIconDiv.style.display = 'none';
    editProfileDiv.style.display = 'block';
  });
