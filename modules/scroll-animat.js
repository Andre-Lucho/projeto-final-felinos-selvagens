import debounce from "./debounce.js";
export default class AnimatToScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.5;
    this.checkDistance = debounce(this.checkDistance.bind(this), 60);
  }

  // Pega a distância de cada section em relação ao topo do site
  getDistance() {
    // quero o retorno da iteração para guardar no objeto !
    // observar que this.sections = nodeList --> tenho q tranf em array para fazer .map(permite o retorno)
    this.distance = [...this.sections].map((section) => {
      // ou  Array.from(this.sections)
      // agora, pega a distância fixa das sections até o topo do site 1 única vez ao entrar no site
      const sectionTop = section.offsetTop;
      return {
        sectionTag: section,
        offsetTop: Math.floor(sectionTop - this.halfWindow),
      };
    });
  }

  // Fazer verificação do scroll em relaçao ao retorno(objeto) de getDistance()
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offsetTop) {
        item.sectionTag.classList.add("actived");
      } else if (item.sectionTag.classList.contains("actived")) {
        item.sectionTag.classList.remove("actived");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Remove o event de animação do scroll (caso necessário)
  stopAnimScroll() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
