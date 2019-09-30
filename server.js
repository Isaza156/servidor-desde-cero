const express = require('express');
const app = express();

const { config } = require('./config/index')
// importar las rutas de las plantas
const plantsApi = require('./routes/plantsRoutes')

// enviar la app de express a las rutas de las plantas
plantsApi(app);

// body-parser
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hola");
});

app.listen(config.port, () => {
    console.log(`Escuchando por http://localhost:3000`);
});

module.exports = plantsApi;