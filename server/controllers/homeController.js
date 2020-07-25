//Conectar el modelo de Viajes
//Los modelos retornan un promise
const Viaje=require("../models/Viajes");
//Conectar el modelo de Testimoniales
//Los modelos retornan un promise
const Testimonial=require("../models/Testimoniales");
exports.infoHome=async (req, res)=>{
    const promises=[];
    //Este es una consulta
    const viajes=await Viaje.findAll({ limit: 3 });
    //Este es otra consulta
    const testimoniales=await Testimonial.findAll({ limit: 3 });
    
    //Cuando no hay vistas se usa “send” que enviá mensaje a consola. Si hay se usa “render” para cargar la vista y enviarle parámetros
    res.render("index",{
            pagina: "Inicio",
            clase: "home",
            viajes: viajes,
            testimoniales: testimoniales
        }
    )
}