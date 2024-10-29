import TabNavegation from "./modules/navegacao-tabs.js";
import AccordionList from "./modules/navegacao-accordion.js";
import SmoothScroll from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import TooltipAnimals from "./modules/tooltip-animals.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import aula from "./modules/aula-setTimeout-setInterval.js";
import initDataObject from "./modules/aula_dataObject.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initScrollAnimt from "./modules/animacao-scroll.js";

const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']");
smoothScroll.init();

const accordionList = new AccordionList("[data-anime='accordion'] dt");
accordionList.init();

const tabNavegation = new TabNavegation(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNavegation.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const tooltipAnimals = new TooltipAnimals("[data-tooltip-animals] li img");
tooltipAnimals.init();

initDropDownMenu();
initMenuMobile();
aula();
initDataObject();
initFetchAnimais();
initFetchBitcoin();
initScrollAnimt();
