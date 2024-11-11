export default class TabNavegation {
  constructor(menu, content, classType = "actived") {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.classType = classType;
    this.init();
  }

  // ativa cada tab e relaciona sua animação (dir ou baixo) de acordo com o index da mesma(tab); ver arq CSS correspondente

  activeTab(index) {
    this.tabContent.forEach((section) =>
      section.classList.remove(this.classType)
    );
    const position = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.classType, position);
  }

  // add os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((img, index) => {
      img.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length === this.tabContent.length) {
      const sections = Array.from(
        document.querySelectorAll(".animalsDescription section")
      );

      sections.forEach((item, i) => {
        const place = sections.length - i;
        place % 2 == 0
          ? (item.dataset.anime = "show-right")
          : (item.dataset.anime = "show-down");
      });

      this.tabContent[0].classList.add(this.classType);
      this.addTabNavEvent();
    }
    return this;
  }
}
