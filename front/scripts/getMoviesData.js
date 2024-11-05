const doneData = require("./doneData");
const failData = require("./failData");
const axios = require("axios");

const getMoviesData = async () => {
    try{
      const{ data } = await axios.get("http://localhost:3000/movies");
      console.log(data.data);
      doneData(data.data)
    } catch (error) {
      console.error("Error fetching movies:", error);
      failData();
    } 
  }

module.exports = {
  getMoviesData
}