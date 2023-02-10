const bagCounter = document.getElementById('count');
const modalOverlay = document.querySelector('.modal_window');
const chase = document.querySelector('.chase');
const chaseOverlay = document.querySelector('.chase_window');
const errorOverlay = document.querySelectorAll('.modal_window')[1];
let clicker = 0;
function addToBag() {
  clicker += 1;
  bagCounter.innerText = clicker;
}
function showModal() {
  modalOverlay.classList.add('modal_window--visible');
}
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('modal_window--visible');
  }
});
function showError() {
  errorOverlay.classList.add('modal_window--visible');
  setTimeout(() => errorOverlay.classList.remove('modal_window--visible'), 3000);
}
chaseOverlay.addEventListener('pointermove', e => {
  const yPos = -(e.offsetY - 230) / 5;
  const xPos = (e.offsetX - 230) / 5;
  chase.style.transform = `rotateX(${yPos}deg) rotateY(${xPos}deg)`;
});
chaseOverlay.addEventListener('mouseout', e => {
  chase.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
});