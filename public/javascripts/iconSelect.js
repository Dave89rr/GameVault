const checkboxes = document.querySelectorAll('.userIconSel');

const selectOnlyThis = (e) => {
  const numIcons = checkboxes.length;
  for (let i = 1; i <= numIcons; i++) {
    // console.log('icon' + i);
    let checkB = document.getElementById('icon' + i);
    let imgLb = document.getElementById('imgicon' + i);
    checkB.checked = false;
    imgLb.style.backgroundColor = 'transparent';
  }
  let id = e.target.id;
  e.target.checked = true;
  let imgLbl = document.getElementById('img' + id);
  imgLbl.style.backgroundColor = 'rebeccapurple';
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', selectOnlyThis);
});
