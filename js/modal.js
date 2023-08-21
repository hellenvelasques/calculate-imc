export const Modal = {
  wrapper: document.querySelector('.modalWrapper'),
  message: document.querySelector('.modal h2'),
  classification: document.querySelector('.modal p'),
  buttonClose: document.querySelector('.modal i'),
  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
}

Modal.buttonClose.onclick = () => Modal.close();

window.addEventListener('keydown', handleKeydown);
function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close();
  }
}