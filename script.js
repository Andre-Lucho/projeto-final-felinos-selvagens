import TabNavegation from "./modules/tabs-navegation.js";
import AccordionList from "./modules/accordion-navegat-.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import TooltipAnimals from "./modules/tooltip-animals.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMobileMenu from "./modules/mobile-menu.js";
import aula from "./modules/aula-setTimeout-setInterval.js";
import initDataObject from "./modules/aula_dataObject.js";
import animalsFetch from "./modules/animals-fetch.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initScrollAnimt from "./modules/scroll-animat.js";

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

const numbers = new initDropDownMenu();
initMobileMenu();
aula();
initDataObject();
animalsFetch("../animaisAPI.json", ".grid-numbers");
initFetchBitcoin();
initScrollAnimt();
