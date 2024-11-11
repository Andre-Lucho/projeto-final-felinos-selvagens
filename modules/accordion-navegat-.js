export default class AccordionList {
  constructor(list, classType = "actived") {
    this.classType = classType;
    this.accordionList = document.querySelectorAll(list);
    this.init();
  }

  // adiona eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((dt) =>
      dt.addEventListener("click", () => this.togleAccordion(dt))
    );
  }

  togleAccordion(dt) {
    // console.log(dt);
    dt.classList.toggle(this.classType);
    dt.nextElementSibling.classList.toggle(this.classType);
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      this.togleAccordion(this.accordionList[0]);
    }
    this.addAccordionEvent();
    return this;
  }
}
