const router = require("express").Router();
const userController = require("../controllers/userController");
const { validate } = require("../middlewares");
const { createUserSchema } = require("../dtos/userSchemas");

router.post("/", validate(createUserSchema), userController.register);

module.exports = router;
