const Sequelize= require("sequelize");
//Importar el archivo con la configuración de la base de datos
const db=require("../config/database");
//Definir el modelo "testimoniales". define("nombreModelo", {atributos/campos})
//Recordar que el modelo se pone con la primer letra en mayúscula (const Testimonial=...)
const Testimonial=db.define("testimoniales", {
    nombre:{
        type:Sequelize.STRING
    }, 
    correo:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    }
})

module.exports=Testimonial;