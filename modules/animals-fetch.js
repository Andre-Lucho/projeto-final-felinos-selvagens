import NumberAnimation from "./numbers-animt.js";

export default function animalsFetch(url, target) {
  const gridNumbers = document.querySelector(target);

  // cria a div com os elems as informações da api json
  function createAnimalsDiv(animal) {
    // console.log(animal);
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-number>${animal.total}</span>`;
    // Template String
    // console.log(div);
    return div;
  }

  // cria a div e append cada animal no Dom
  function appendAnimals(animal) {
    const divAnimal = createAnimalsDiv(animal);
    gridNumbers.appendChild(divAnimal);
  }

  // animação tag <span> com os totais da api-json
  function animalsAnimation() {
    const numberAnimation = new NumberAnimation(
      "[data-number]",
      ".numbers",
      "actived"
    );
    numberAnimation.init();
  }

  // puxa as informações da api json e cria novos animais com seus respectivos totais animados no site
  async function createAnimals() {
    try {
      const animaisR = await fetch(url);
      const animaisJson = await animaisR.json();
      // console.log(animaisJson);
      animaisJson.forEach((animal) => appendAnimals(animal));
      animalsAnimation();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
