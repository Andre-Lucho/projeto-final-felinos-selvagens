import TabNavegation from "./modules/tabs-navegation.js";
import AccordionList from "./modules/accordion-navegat-.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import TooltipAnimals from "./modules/tooltip-animals.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MobileMenu from "./modules/mobile-menu.js";
import animalsFetch from "./modules/animals-fetch.js";
import BitcoinFetch from "./modules/bitcoin-fetch.js";
import AnimatToScroll from "./modules/scroll-animat.js";

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

const animatToScroll = new AnimatToScroll("[data-anime='scroll']");
animatToScroll.init();

animalsFetch("../animaisAPI.json", ".grid-numbers");
BitcoinFetch("https://blockchain.info/ticker", "[data-bitcoin]");

const dropDownMenu = new DropDownMenu("[data-dropdown]", "actived");
dropDownMenu.init();

const mobileMenu = new MobileMenu(
  '[data-menu="button"]',
  '[data-menu="list"]',
  "actived"
);
mobileMenu.init();
