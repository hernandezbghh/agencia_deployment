const Viaje=require("../models/Viajes");

/*
//Cambiamos los promises por async await
exports.infoViajes=(req, res)=>{
    Viaje.findAll()
        .then((viajes) => res.render("viajes",{
           pagina: "Próximos Viajes",
           viajes: viajes
        }))
        .catch(error => console.log(error));
}*/


exports.infoViajes=async (req, res)=>{
    const viajes= await Viaje.findAll()
    res.render("viajes",{
        pagina: "Próximos Viajes",
        viajes: viajes
     });
}

exports.infoViaje=async (req, res)=>{
    const viaje= await Viaje.findByPk(req.params.id)
        res.render("viaje",{
            viaje: viaje
        });
}
