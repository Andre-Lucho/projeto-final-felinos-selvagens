export default class AnimaNumeros {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o 'this' do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elem do Dom com um número na tag <span>
  // incrementa a partir de 0 até número contido em <span>
  static increaseNumbers(number) {
    // função tipo static -> não tenho nehuma referência a nenhuma propriedade do meu constructor e não faz parte do Objeto AnimaNumeros. Devo fazer referência ao constructor --> é um método do construtor de AnimaNumeros e não do protótipo
    const innerNumber = +number.innerText;
    const increase = Math.floor(innerNumber / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += increase;
      number.innerText = start;
      if (start >= innerNumber) {
        number.innerText = innerNumber;
        clearInterval(timer);
      }
    }, 15);
  }

  // ativa increaseNumbers() para cada números <span> do Dom
  numbersAnimation() {
    this.numbers.forEach((number) => this.constructor.increaseNumbers(number));
  }

  // Callback function de MutationObserver -> ocorre qd a mutação acontecer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.numbersAnimation();
      this.observer.disconnect();
    }
  }

  // ativo  addMutationObserve para verificar qd a class actived é add ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) this.addMutationObserver();
    return this;
  }
}
