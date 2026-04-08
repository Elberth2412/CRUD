const express = require("express");
const router =  express.Router();

const {
    getNotas
} = require("../controllers/controller.notas");

router.get("nota", getNotas);

module.exports = router;