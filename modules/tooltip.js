/* 
Tooltip é um informação extra que o usuário pode obter ao passar o mouse por cima de algo.
**Para browsers Desktop --> em função dos eventos de mouse e não de touch  */
export default class Tooltip {
  constructor(tooltip) {
    this.tooltip = document.querySelectorAll(tooltip);

    // bind do objeto da classe aos callbacks
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // cria a tooltip e add eventos 'mousemove' e 'mouseleave' ao target(mouse passa por cima do mapa)
  onMouseOver(e) {
    this.tooltipBoxCreate(e.currentTarget);
    this.tooltipBox.style.top = e.pageY + "px";
    this.tooltipBox.style.left = e.pageX + "px";

    e.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    e.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  // add os eventos de mouseover a cada tooltip
  addTooltipEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  // criação da div tooltipBox na Body
  tooltipBoxCreate(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox; // div com o tooltip criada
  }

  // remove a tooltip e os eventos de 'mousemove' e 'mouseleave'
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 290 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 210}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
