const { cardsContainer } = require("./cardsContainer");

cardsContainer.innerHTML = "";

const errorMessage = document.createElement("div");
classList.add("error-message");
errorMessage.innerText = "No se pudo cargar la información de las películas. Inténtalo de nuevo más tarde.";

cardsContainer.appendChild(errorMessage);

module.exports = {
    failData
};