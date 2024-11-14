import AccordionList from "./modules/accordion-navegat-.js";
import animalsFetch from "./modules/animals-fetch.js";
import BitcoinFetch from "./modules/bitcoin-fetch.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import MobileMenu from "./modules/mobile-menu.js";
import Modal from "./modules/modal.js";
import OperationTime from "./modules/operation-time.js";
import AnimatToScroll from "./modules/scroll-animat.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import TabNavegation from "./modules/tabs-navegation.js";
import Tooltip from "./modules/tooltip.js";
import TooltipAnimals from "./modules/tooltip-animals.js";

const accordionList = new AccordionList(
  "[data-anime='accordion'] dt",
  "actived"
);
animalsFetch("../animaisAPI.json", ".grid-numbers");
BitcoinFetch("https://blockchain.info/ticker", "[data-bitcoin]");

const dropDownMenu = new DropDownMenu("[data-dropdown]", "actived");
const mobileMenu = new MobileMenu(
  '[data-menu="button"]',
  '[data-menu="list"]',
  "actived"
);
const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']",
  "actived"
);
const operationTime = new OperationTime(
  "[data-week]",
  "actived",
  "deactivated"
);
const animatToScroll = new AnimatToScroll("[data-anime='scroll']", "actived");
const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']", {
  behavior: "smooth",
});
const tabNavegation = new TabNavegation(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
  "actived"
);
const tooltipAnimals = new TooltipAnimals("[data-tooltip-animals] li img");
const tooltip = new Tooltip("[data-tooltip]");
