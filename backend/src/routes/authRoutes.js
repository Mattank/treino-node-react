const router = require("express").Router();
const authController = require("../controllers/authController");
const { validate } = require("../middlewares/validate");
const { loginSchema } = require("../dtos/authSchemas");

router.post("/login", validate(loginSchema), authController.login);

module.exports = router;
