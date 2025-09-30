const { z } = require("zod");

const passwordPolicy = z
  .string()
  .min(8, "Senha deve ter ao menos 8 caracteres")
  .regex(/[A-Z]/, "Inclua ao menos 1 letra maiúscula")
  .regex(/[a-z]/, "Inclua ao menos 1 letra minúscula")
  .regex(/[0-9]/, "Inclua ao menos 1 número");

exports.createUserSchema = z.object({
  email: z.string().email(),
  password: passwordPolicy,
});
