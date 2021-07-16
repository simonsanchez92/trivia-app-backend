const express = require("express");
const { addUser, getUsers } = require("../controllers/users");

const router = express.Router();

router.route("/").post(addUser);
router.route("/").get(getUsers);

module.exports = router;
