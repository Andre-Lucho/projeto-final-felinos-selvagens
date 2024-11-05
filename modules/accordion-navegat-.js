/*
-----------------------------------
10 - Tipo de Navegação Accordion
----------------------------------- 
Nos Faqs ==> some/ aparecem as respostas

*/

export default class AccordionList {
  constructor(list) {
    this.activeClass = "actived";
    this.accordionList = document.querySelectorAll(list);
  }

  // adiona eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((dt) =>
      dt.addEventListener("click", () => this.togleAccordion(dt))
    );
  }

  togleAccordion(dt) {
    // console.log(dt);
    dt.classList.toggle(this.activeClass);
    dt.nextElementSibling.classList.toggle(this.activeClass);
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
