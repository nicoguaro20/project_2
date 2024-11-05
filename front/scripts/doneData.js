const { jsToHtml, cardsContainer } = require("./cardsContainer");

const doneData = (movies) => {
    cardsContainer.innerHTML = "";
    movies.forEach((movie) => {
        const movieElement = jsToHtml(movie);
        cardsContainer.appendChild(movieElement);
    });
};


module.exports = {
    doneData
};