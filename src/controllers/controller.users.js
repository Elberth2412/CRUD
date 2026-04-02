const cn = require("../db/db");


const getUsers = async (req, res) => {
    try {

        const result = await cn.query("select * from usuarios");
        res.status(200).json({
            mensaje: "usuarios",
            data: result.rows,
        });
        
    } catch (error) {
        console.error("Error en el servidor: ", error),
        res.status(400).json({
            error: "Error en el servidor 1",
        })
    }
}


module.exports = {
    getUsers
}