const Testimonial=require("../models/Testimoniales");

exports.infoTestimoniales=async (req, res)=>{
    const testimoniales=await Testimonial.findAll()
        res.render("testimoniales",{
           pagina: "Testimoniales",
           testimoniales: testimoniales
        })
}

exports.formTestimoniales=async (req, res)=>{
        let {nombre, correo, mensaje}=req.body;
        let errores=[];
        if(!nombre){
            errores.push({"mensaje":"Agrega tu nombre"})
        }
        if(!correo){
            errores.push({"mensaje":"Agrega tu correo"})
        }
        if(!mensaje){
            errores.push({"mensaje":"Agrega tu mensaje"})
        }
        //Revisar por errores
        if(errores.length>0){
            //Muestra la vista con errores
            //Esto hará que lo que el usuario llene se pase a la vista para que cuando de enviar y no pase la validación no se borre
            res.render("testimoniales", {
               errores,
               nombre,
               correo, 
               mensaje
            })
        }else{
            //Almacenar en el DB
            //Esto retorna un promise, cuando se cree u  testimonial debe regresar a testimoniales pero con el testimonial agregado en la vista
            //Como se hizo un require al Testimonial ya tenemos la conexión a la DB incluida, un create genera el registro y solo hay que enviarle los campos.
            const testimonial= await Testimonial.create({nombre, correo, mensaje})
                res.redirect("/testimoniales")
        }
    }