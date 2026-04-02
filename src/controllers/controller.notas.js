const cn = require("../db/db");

const getNotas = async (req, res) => {

    

    try {

        const resul = await cn.query("select * from notas where id = $1", [id])
        
    } catch (error) {
        console.log("Error en el servidor: ", error);
        res.status(400).json({
            error: "Error en el servidor",
        })
    }
    
}