import outsideClick from "./outsideClick.js";

export default class DropDownMenu {
  constructor(links, classType, events = ["touchstart", "click"]) {
    this.dropdownMenus = document.querySelectorAll(links);
    this.classType = classType;
    this.events = events;

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.init();
  }

  // Ativa o dropDownMenu e add a função que 'observa' o 'click' fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const dropLink = event.currentTarget;
    dropLink.classList.add(this.classType);

    outsideClick(dropLink, this.events, () => {
      dropLink.classList.remove(this.classType);
    });
  }

  // Add os eventos ao menus tipo DropDown
  addDropDownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach(
        (userEvent) => menu.addEventListener(userEvent, this.activeDropDownMenu)
        // userEvent --> relacionado aos eventos de touch e click
      );
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropDownMenuEvent();
    return this;
  }
}
