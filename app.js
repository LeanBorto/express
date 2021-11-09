// Módulos
const express = require('express');
const app = express();
// Acá falta uno... 😇
const path = require('path');
const publicPath = path.join(__dirname, './public');

const mainRouter = require ('./src/routes/mainRouter');

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS

app.use('/', mainRouter);
app.use('/detalleMenu', mainRouter);

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})