const userService = require("../services/userService");

exports.register = async (req, res, next) => {
  try {
    const user = await userService.register(req.validated);
    return res.status(201).json({ id: user.id, email: user.email });
  } catch (err) {
    next(err);
  }
};
