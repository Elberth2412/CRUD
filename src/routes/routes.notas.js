const express = require("express");
const router =  express.Router();

const {
    postNotas
} = require("../controllers/controller.notas");

router.post("/", postNotas);

module.exports = router;