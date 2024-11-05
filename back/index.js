const { app } = require("./src/server");
const { router } = require("./src/routes/index");
const dbConection = require("./src/config/dbConfig");

dbConection()
.then(()=>{
    console.log("conexión a la db exitosa")
    app.listen(3000,() => {
        console.log("Server listen on port 3000");
    })
})

.catch((error) => {
    console.log(error)
})

app.use(router);

