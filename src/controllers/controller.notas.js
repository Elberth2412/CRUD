const cn = require("../db/db");

const getNotas = async (req, res) => {

    const id = req.body;

    try {

        const result = await cn.query("select nota from notas where id = $1", [id]);

        if(result.rows.length === 0){
            return res.status(400).json({
                mensaje: "id no encontrado"
            })
        };

        res.status(200).json({
            mensaje: "Usuario encontrado",
            data: result.rows[0]
        });
        
    } catch (error) {
        console.log("Error en el servidor: ", error);
        res.status(400).json({
            error: "Error en el servidor",
        })
    }
    
}
module.exports = {
    getNotas,
}