//fetche
fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showSuperheroes);

function showSuperheroes(superheroes) {
  //loope
  superheroes.forEach(showSuperhero);
}

function showSuperhero(superhero) {
  //clone, ændre, appende
  const template = document.querySelector("template").content;
  const parent = document.querySelector(".grid");

  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = superhero.alias;
  copy.querySelector("p.realname").textContent = superhero.realName;
  copy.querySelector("p.alias").textContent = superhero.alias;
  copy.querySelector("p.origin").textContent = superhero.origin;
  copy.querySelector("p.weakness").textContent = superhero.weakness;
  copy.querySelector("p.active").textContent = superhero.active;
  copy.querySelector("p.isEvil").textContent = superhero.isEvil;

  copy.querySelector("p.height").textContent = superhero.height;
  copy.querySelector("p.powers").textContent = superhero.powers;

  copy.querySelector(".birthday").textContent =
    superhero.birthday.day +
    "/" +
    superhero.birthday.month +
    "/" +
    superhero.birthday.year;

  copy.querySelector("img").src = superhero.image;

  parent.appendChild(copy);
}
