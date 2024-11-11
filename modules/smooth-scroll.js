export default class SmoothScroll {
  constructor(links, options = { behavior: "smooth" }) {
    this.internalLinks = document.querySelectorAll(links);
    this.options = options;
    this.scrollToSection = this.scrollToSection.bind(this);
    // console.log(this.scrollToSection.bind(this));
    // bind - indicando para o método scrollToSection() que o THIS é esse que está no constructor = Classe
    // Padrão p/ Classes qd tenho 1 Callback
    this.init();
  }

  scrollToSection(e) {
    /* antes bind():
    console.log(this); // ref ao link do menu == cada link do forEach de 'addLinkEvent()'
    this. options --> undefined
    após bind() --> this == Classe!! */
    e.preventDefault();
    const linkHref = e.currentTarget.getAttribute("href");
    const section = document.querySelector(linkHref);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }
  /* 
  CUIDAR:
  a função callback de do evento de 'addLinkEvent()', está ativando scrollToSection(e) -- OK
  porém, todo 'THIS' agora fará referência a esse método 'scrollToSection(e)' e NÃO MAIS ao 'this' do CONSTRUCTOR, pois 'this' agora é o evento DOM e está apontando para o link do click (link do forEach)!!

  FORMAS DE AJUSTE:
  1) Arrow function -- forma errada!
  this --> está no mesmo nível de this.internalLinks == this = CLASSE!
  onde está o erro? == perco a referência a this.scrollToSection(e), pois uma arrow function tb é uma func anônima == só é ativada e manipulável naquele momento do código!!


  addLinkEvent() {
    this.internalLinks.forEach((link) =>
      link.addEventListener("click", (e) => this.scrollToSection(e));
  )};
}

  */

  init() {
    if (this.internalLinks.length) {
      // verificação
      this.addLinkEvent();
      // p podermos linkarmos outros métodos e propriedades
    }
    return this;
  }
}
