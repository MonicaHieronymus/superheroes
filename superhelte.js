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

  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
