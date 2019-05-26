const hideContents = [
  {
    id: 'first-hide-content',
    show: false
  },
  {
    id: 'second-hide-content',
    show: false
  },
  {
    id: 'third-hide-content',
    show: false
  }
];

showHideContent = id => {
  hideContents.forEach(item => {
    if (id === item.id) {
      item.show = !item.show;
      document.getElementById(item.id).style.display = item.show
        ? 'flex'
        : 'none';
    }
  });
};

const buttonClose = document.getElementById('button-close');

buttonClose.addEventListener('click', () => {
  document.getElementById('message').style.display = 'none';
});
