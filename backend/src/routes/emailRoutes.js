const router = require("express").Router();
const emailController = require("../controllers/emailController");
const { validate } = require("../middlewares");
const { createEmailSchema } = require("../dtos/emailSchemas");

router.post("/", validate(createEmailSchema), emailController.register);

module.exports = router;
