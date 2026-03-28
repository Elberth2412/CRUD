const { Pool } = require(“pg”);
const pool = new Pool({
    user: “postgres”,
    host: “localhost”,
    database: “nombre de la bd”,
    password: “password”,
    port: “5432”,
});
module.exports = pool;