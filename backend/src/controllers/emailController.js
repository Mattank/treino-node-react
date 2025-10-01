const emailService = require("../services/emailService");

exports.register = async (req, res, next) => {
  try {
    const email = await emailService.register(req.validated);
    return res.status(202).json({ 
      success: true,
      message: "E-mail registrado na fila para envio",
      data: email
    });
  } catch (err) {
    next(err);
  }
};
