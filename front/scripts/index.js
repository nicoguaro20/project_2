const { jsToHtml, cardsContainer } = require("./cardsContainer");
const axios = require("axios");
const { getMoviesData } = require("./getMoviesData")

let lastScrollTop = 0;
const companyInfo = document.getElementById("companyInfo");
const navigaitorContainer = document.getElementById("navigaitorContainer");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    companyInfo.classList.add("hidden");
    navigaitorContainer.classList.add("moved");
  } else {
    companyInfo.classList.remove("hidden");
    navigaitorContainer.classList.remove("moved");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// Opción 1: obteniendo datos con JQuery //

$.get("https://students-api.up.railway.app/movies",(respuesta) => {
  movies = respuesta;
  console.log(movies);
  const arrayHtmlCards = respuesta.map(jsToHtml);
  arrayHtmlCards.forEach((htmlMovie) => cardsContainer.appendChild(htmlMovie));
});


//Opción 2: obteniendo datos con axios //

axios.get("https://students-api.up.railway.app/movies")
  .then((respuesta)=>{
      movies = respuesta.data;
      const arrayHtmlCards = respuesta.data.map(jsToHtml);
      arrayHtmlCards.forEach((htmlMovie) => cardsContainer.appendChild(htmlMovie));
  })
  .catch((error) => {
    console.error("Ocurrio un error:",error);
    alert("No se pudo cargar la lista de peliculas.");
  });

//Opción 3: obteniendo datos con servidor //







