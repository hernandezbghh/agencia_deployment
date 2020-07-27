//Importar express
const express= require('express');
//Importar libreria para acceder a rutas en el servidor
const path=require("path");
//Importar body parser
const bodyParser= require('body-parser');
//Importar el archivo de rutas
const routes=require("./routes");
//Configurar express, crear servidor
const app=express();
//Habilitar pug
app.set("view engine", "pug");
//Donde encontrar los templates (Añadir las vistas), esto funciona por path
app.set("views", path.join(__dirname, "./views"));
//cargar una carpeta estática llamada public (estilos, etc)
app.use(express.static("public"));
//Importar el archivo de configuraciones
const configs=require("./config");
//Agregar dotenv para variables de entorno
require("dotenv").config({path: "variables.env"});
//Validar si estamos en desarrollo o producción
    //env detecta el ambiente de desarrollo
const config=configs[app.get("env")]
//Creamos la variable del sitio web
app.locals.titulo=config.nombreSitio
//Muestra el año actual
app.use((req, res, next)=>{
    //Crear una nueva fecha
    const fecha= new Date();
    //Para poder acceder a la obtención de año se usa un "local" con "res.locals.nombreVariable"
    res.locals.fechaActual=fecha.getFullYear();
    //Obtener la ruta en la que nos encontremos
    res.locals.ruta=req.path;
    return next();
});
//Ejecutar body-parser
app.use(bodyParser.urlencoded({extended: true}))
//cargar las rutas
app.use("/", routes());
//Aquí debemos hacer el puerto y host dinámico para la app
const host= process.env.HOST || "0.0.0.0";
const port= process.env.PORT || 3000;

app.listen(port, host, function(){
    console.log("El servidor se inicio en el puerto "+port+" y su host es el "+host);
});

/*
//Importar el archivo con la configuración de la base de datos
const db=require("./config/database");
db.authenticate()
    .then(() => console.log("Conexión correcta"))
    .catch(error => console.log(error));
*/
