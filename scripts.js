import Api from "./data.js";
const api = new Api();
const container = document.getElementById("container-characters");
const hogwarts = document.querySelector(".container-hogwarts");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector("#btn");

class Character {
  //In the API the data was in Spanish
  constructor({ personaje, casaDeHogwarts, imagen }) {
    this.name = personaje;
    this.house = casaDeHogwarts;
    this.image = imagen;
    this.document();
  }

  fillData() {
    return (newCharacter =
      ((document.querySelector(
        ".house-logo"
      ).src = `./images/${this.house}-logo.png`),
      (document.getElementById("img").src = `${this.image}`),
      (document.getElementById("name").textContent = `${this.name}`),
      (document.getElementById("house").textContent = `${this.house}`)));
  }

  document() {
    container.innerHTML = this.fillData();
  }
}

async function conAPi(id) {
  const characterData = await api.getCharacter(id);
  new Character(characterData);
}

function Show() {
  hogwarts.classList.remove("show");
  hogwarts.classList.add("hide");
  container.classList.remove("hide");
  container.classList.add("show");
  container.classList.add("showCharacter");
}

btn.addEventListener("click", () => {
  //Match random
  const randomId = Math.floor(Math.random() * (23 - 1) + 1);
  conAPi(randomId);
  Show();
  btn.disabled = true;
  btn.style.cursor = "default";
});

btn2.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * (23 - 1) + 1);
  conAPi(randomId);
  Show();
});
