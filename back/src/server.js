// armar y configurar el servidor //

const { router } = require("./routes/index");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);



module.exports = {
    app
};