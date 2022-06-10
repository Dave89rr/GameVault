const logoutButton = document.getElementById('logoutButton');

if (logoutButton) {
  logoutButton.addEventListener('click', async (e) => {
    const res = await fetch('/users/logout', {
      method: 'post',
      header: {
        'Content-Type': 'application/json',
      },
      body: {
        message: 'please log me out',
      },
    });
    window.location.href = '/';
  });
}
