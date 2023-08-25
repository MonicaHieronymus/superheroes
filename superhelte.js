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
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = superhero.alias;
  copy.querySelector("p.realname").textContent = superhero.realname;
  copy.querySelector("p.alias").textContent = superhero.alias;
  copy.querySelector("p.origin").textContent = superhero.origin;
  copy.querySelector("p.weakness").textContent = superhero.weakness;
  copy.querySelector("p.active").textContent = superhero.active;
  copy.querySelector("p.evil").textContent = superhero.evil;
  copy.querySelector("p.height").textContent = superhero.height;
  copy.querySelector("p.powers").textContent = superhero.powers;

  copy.querySelector("img").src = superhero.image;

  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
