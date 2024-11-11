import outsideClick from "./outsideClick.js";

export default class MobileMenu {
  constructor(button, list, classType, events = ["touchstart", "click"]) {
    this.menuBtn = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.classType = classType;
    this.events = events;

    this.activeMenuMobile = this.activeMenuMobile.bind(this);
    this.init();
  }

  activeMenuMobile() {
    this.menuBtn.classList.add(this.classType);
    this.menuList.classList.add(this.classType);
    outsideClick(this.menuList, this.events, () => {
      this.menuBtn.classList.remove(this.classType);
      this.menuList.classList.remove(this.classType);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((userEvent) =>
      this.menuBtn.addEventListener(userEvent, this.activeMenuMobile)
    );
  }

  init() {
    if (this.menuBtn && this.menuList) this.addMenuMobileEvent();
    return this;
  }
}
