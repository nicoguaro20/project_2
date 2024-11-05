const cardsContainer = document.querySelector("#cardsContainer");

const jsToHtml = (objetoMovie) => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");
  const img = document.createElement("img");
  const ul = document.createElement("ul");

  img.src = objetoMovie.poster;
  img.classList.add("cardImg");
  img.alt = objetoMovie.title;

  h1.innerText = objetoMovie.title;

  const liYear = document.createElement("li");
  liYear.classList.add("liYear");
  liYear.innerText = `Año: ${objetoMovie.year}`;
  ul.appendChild(liYear);

  const liDirector = document.createElement("li");
  liDirector.classList.add("liDirector");
  liDirector.innerText = `Director: ${objetoMovie.director}`;
  ul.appendChild(liDirector);

  const liDuration = document.createElement("li");
  liDuration.classList.add("liDuration");
  liDuration.innerText = `Duración: ${objetoMovie.duration}`;
  ul.appendChild(liDuration);

  const liGenero = document.createElement("li");
  liGenero.classList.add("liGenero");
  liGenero.innerText = `Genero: ${objetoMovie.genre}`;
  ul.appendChild(liGenero);

  const liCalificacion = document.createElement("li");
  liCalificacion.classList.add("liCalificacion");
  liCalificacion.innerText = `Calificación: ${objetoMovie.rate}`;

  button.innerText = "Ver ahora";
  button.classList.add("btn", "btn-primary", "btn-sm");

  div.classList.add("card");
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(ul);
  div.appendChild(button);
  return div;
};

module.exports =  { jsToHtml, cardsContainer };