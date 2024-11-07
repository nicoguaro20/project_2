const { cardsContainer } = require("./cardsContainer");

const failData = () => {
    cardsContainer.innerHTML = "";
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = "No se pudo cargar la información de las películas. Inténtalo de nuevo más tarde.";
    cardsContainer.appendChild(errorMessage);
}



module.exports = {
    failData
};