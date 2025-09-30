const bcrypt = require("bcrypt");
const userRepo = require("../repositories/userRepository");

const SALT_ROUNDS = 4;

exports.register = async ({ email, password }) => {
  const exists = await userRepo.findByEmail(email);
  if (exists) {
    const err = new Error("E-mail já cadastrado");
    err.statusCode = 409;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const userId = await userRepo.create({ email, password: hashedPassword });
  return await userRepo.findById(userId);
};
