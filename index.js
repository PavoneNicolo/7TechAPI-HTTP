const express = require('express');
const sensorRoute = require("./api/sensor");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

let app = express();

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/sensor", sensorRoute);

app.listen(5000,()=>{
    console.log("App in ascolto sulla porta 5000");
});


