const Sequelize= require("sequelize");
//Importar el archivo con la configuración de la base de datos
const db=require("../config/database");
//Definir el modelo "viaje". define("nombreModelo", {atributos/campos})
//Recordar que el modelo se pone con la primer letra en mayúscula (const Viaje=...)
const Viaje=db.define("viajes", {
    titulo:{
        type:Sequelize.STRING
    }, 
    precio:{
        type:Sequelize.STRING
    }, 
    fecha_ida:{
        type:Sequelize.DATE
    }, 
    fecha_vuelta:{
        type:Sequelize.DATE
    }, 
    imagen:{
        type:Sequelize.STRING
    }, 
    descripcion:{
        type:Sequelize.STRING
    }, 
    disponibles:{
        type:Sequelize.STRING
    }
});
module.exports=Viaje;