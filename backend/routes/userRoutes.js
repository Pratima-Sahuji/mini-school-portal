const express = require("express");
const { signup , login, refreshToken} = require("../controllers/userController.js");
const { protect } = require("../middlewares/authMiddleware.js");
const { authorizeRoles } = require("../middlewares/authorizeRoles.js");

const router = express.Router();

// Signup route
router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh-token", refreshToken);

module.exports = router;
