import outsideClick from "./outsideClick.js";

export default class DropDownMenu {
  constructor(links, events) {
    this.dropdownMenus = document.querySelectorAll(links);

    // define os tipos de evento-padrão ao arg 'events'
    if (this.events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = "actived";
  }

  // Ativa o dropDownMenu e add a função que 'observa' o 'click' fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const dropLink = event.currentTarget;
    dropLink.classList.add(this.activeClass);

    outsideClick(dropLink, this.events, () => {
      dropLink.classList.remove(this.activeClass);
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
