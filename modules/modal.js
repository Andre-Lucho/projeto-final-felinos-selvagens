export default class Modal {
  constructor(openButton, closeButton, containerModal, classType = "actived") {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);
    this.classType = classType;

    // seta 'this' ao callback dos eventos p fazer apontar para a class Modal
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalClickOff = this.modalClickOff.bind(this);
    this.init();
  }

  // abre ou fecha o modal
  modalToggle() {
    this.containerModal.classList.toggle(this.classType);
  }

  // evento do modal
  eventToggleModal(e) {
    // console.log(this); //referenciando this.openButton e não a Class
    e.preventDefault();
    this.modalToggle();
  }

  //fecha o modal ao clicar fora da sua janela
  modalClickOff(e) {
    // console.log(this);
    // console.log(e.target);
    // o target deve ser apenas a Section === THIS; não as demais tags do modal */

    if (e.target === this.containerModal) {
      this.modalToggle();
    }
    // this aponta para a tag 'section' --> a página inteira (o modal foi definido p ocupar a tela inteira qd ativo)
    // então, se eu estiver clicando fora da tag 'Div', que corresponde ao modal propriamente dito, a func 'modalToggle()' será ativada
  }

  // add os eventos ao modal
  addModalEvent() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.modalClickOff);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
