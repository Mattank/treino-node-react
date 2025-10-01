const bcrypt = require("bcrypt");
const crypto = require("crypto");
const userRepo = require("../repositories/userRepository");
const tokenRepo = require("../repositories/tokenRepository");

exports.login = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email);
  if (!user) {
    const err = new Error("Credenciais inválidas");
    err.statusCode = 401;
    throw err;
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    const err = new Error("Credenciais inválidas");
    err.statusCode = 401;
    throw err;
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + parseInt(process.env.AUTH_EXPIRES_AT));

  await tokenRepo.create({ userId: user.id, token, expiresAt });

  return { email, token, expiresAt };
};
