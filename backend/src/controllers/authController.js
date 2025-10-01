const authService = require("../services/authService");

exports.login = async (req, res, next) => {
  try {
    const result = await authService.login(req.validated);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
