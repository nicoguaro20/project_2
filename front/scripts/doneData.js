const { jsToHtml } = require("./cardsContainer");

const doneData = (respuesta) => {
    console.log(respuesta);
    const arrayHtmlCards = respuesta.data.map(jsToHtml);
    arrayHtmlCards.forEach((htmlMovie) => cardsContainer.appendChild(htmlMovie));
};

module.exports = {
    doneData
};