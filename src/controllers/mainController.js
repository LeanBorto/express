// Acá nos falta nuestra fuente de datos
const path = require('path');

let platos =  [
    {
        titulo: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos U$S 65.50"   
    },
    {
        titulo: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra U$S 47.00"
    },
    {
        titulo: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar U$S 27.50"
    },
    {
        titulo: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50"
    },
];

// Acá nos falta un objeto literal con las acciones para cada ruta
const mainController = {
    index: (req, res) => {res.render(path.join(__dirname, '../views/index'), {platos: platos})},
    detalleMenu: (req, res) => {res.render(path.join(__dirname, '../views/detalleMenu'))},
    };

// Acá exportamos el resultado

module.exports = mainController;
