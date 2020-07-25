//Importamos express
const expres= require("express");
const router=expres.Router();
//Conectar los controladores
const nosotrosController=require("../controllers/nosotrosController");
const homeController=require("../controllers/homeController");
const viajesController=require("../controllers/viajesController");
const testimonialesController=require("../controllers/testimonialesController");
//Para exporta se usa "module.exports"
//Ya no se coloca app.get si no router.get
module.exports=function(){
    //Sección de inicio "/" indica que se ira por default al index.js
    router.get("/", homeController.infoHome);
    //Sección de Nosotros
    router.get("/nosotros", nosotrosController.infoNosotros); 
    //Sección de Viajes
    router.get("/viajes", viajesController.infoViajes);
    //Info de cada viaje
    router.get("/viajes/:id", viajesController.infoViaje);
    //Sección de Testimoniales
    router.get("/testimoniales", testimonialesController.infoTestimoniales);
    //Acciones cuando se llena el formulario de testimoniales
    router.post("/testimoniales", testimonialesController.formTestimoniales);
      return router; 
};
