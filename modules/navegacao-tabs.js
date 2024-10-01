/*
09 - Navegação por TABS
----------------------------------- 
Relaciona uma lista de ítens 01(ítens navegáveis == imagens) com outra lista de ítens 02 (geralmente, conteúdo)
Essa relação se dá 1/1 --> cada imagem está relacionada ao seu conteúdo, em uma sequência correlacionada de arrays
*/
export default class TabNavegation {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.actived = "actived";
  }

  // ativa cada tab e relaciona sua animação (dir ou baixo) de acordo com o index da mesma(tab); ver arq CSS correspondente

  activeTab(index) {
    this.tabContent.forEach((section) =>
      section.classList.remove(this.actived)
    );
    const position = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.actived, position);
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

      this.tabContent[0].classList.add(this.actived);
      this.addTabNavEvent();
    }
  }
}
