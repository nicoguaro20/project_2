const axios = require("axios");

const formJs = () => {

    const form = document.querySelector("form");
    const clearForm = document.querySelector("#ClearForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const genresChecked = document.querySelectorAll('input[type="checkbox"]:checked');
        const genresList = Array.from(genresChecked).map(checkbox => checkbox.value);
        const objetoMovie = {
            title: form.title.value.trim(),
            year: form.year.value.trim(),
            director: form.director.value.trim(),
            duration: `${form.durationH.value.trim()} h ${form.durationM.value.trim()} m`,
            genre: genresList,
            rate: form.rate.value.trim(),
            poster: form.poster.value.trim()
        };
        for (const key in objetoMovie) {
            if(!objetoMovie[key]) {
                alert(`El campo ${ key } es requerido`);
                return;
            }
        }
        if (genresList.length === 0) {
            alert("Al menos un género debe ser seleccionado");
                return;
            }
        axios.post("http://localhost:3000/movies", objetoMovie)
        .then((respuesta) => {
            alert("Pelicula creada exitosamente");
            form.reset();
        })
        .catch((error) => {
            alert("Error al crear la pelicula");
            form.reset();
        })

})


clearForm.addEventListener("click",() => {
    form.reset()
})

}

module.exports = { formJs }