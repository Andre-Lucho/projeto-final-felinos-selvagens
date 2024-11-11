export default class TooltipAnimals {
  constructor(tooltipAnimals) {
    this.tooltipAnimals = document.querySelectorAll(tooltipAnimals);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.init();
  }

  onMouseOver(e) {
    this.tooltipBoxCreate(e.currentTarget);
    this.tooltipBox.style.top = e.pageY + "px";
    this.tooltipBox.style.left = e.pageX + "px";

    e.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    e.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  addTooltipEvent() {
    this.tooltipAnimals.forEach((img) => {
      img.addEventListener("mouseover", this.onMouseOver);
    });
  }

  tooltipBoxCreate(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tootipAnimals");
    const text = element.getAttribute("aria-label");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    this.tooltipBox.style.left = `${e.pageX + 18}px`;
  }

  init() {
    if (this.tooltipAnimals.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
