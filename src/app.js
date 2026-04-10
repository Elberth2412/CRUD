const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/routes.users");
const authRoutes = require("./routes/routes.auth");
const notasRoutes = require("./routes/routes.notas");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/notas", notasRoutes);

module.exports = app;
