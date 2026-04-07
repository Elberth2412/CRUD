const cn = require("../db/db");

const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const result = await cn.query("select * from usuarios where email = $1", [email])

        if (result.rows.length === 0) {
            return res.status(400).json({
                mensaje: "Credenciales Invalidas"
            })
        }

        const usuario = result.rows[0];

        console.log(typeof usuario.password);


        if (password !== usuario.password) {
            return res.status(400).json({
                mensaje: "Credenciales Invalidas"
            })
        }

        res.status(200).json({
            mensaje: "login exitoso",
            usuario: result.rows[0],
        })


    } catch (error) {
        console.error("Error en el servidor: ", error);
        res.status(400).json({
            error: "Error en el servidor",
        })
    }

}

module.exports = {
    login
}