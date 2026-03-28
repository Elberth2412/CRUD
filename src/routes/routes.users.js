const express = require("express");
const router = express.Router();

const {
    getUsers
} = require("../controllers/controller.users");

router.get("/", getUsers);

module.exports = router;