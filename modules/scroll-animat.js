export default class AnimatToScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.5;
    this.scrollAnimt = this.scrollAnimt.bind(this);
  }
  scrollAnimt() {
    this.sections.forEach((section) => {
      // pega a distância que a tag com a classe "[data-anime='scroll]"está do topo do site
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.halfWindow < 0; //true or false

      // Fazer verificação ao scrollar:
      // scrolar p baixo, passando o elemento com a class "[data-anime='scroll]"
      if (isSectionVisible) {
        section.classList.add("actived");
      } else if (section.classList.contains("actived")) {
        section.classList.remove("actived");
      }
    });
  }

  init() {
    this.scrollAnimt();
    window.addEventListener("scroll", this.scrollAnimt);
  }
}
