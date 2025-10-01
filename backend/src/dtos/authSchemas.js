const { z } = require("zod");
const { passwordPolicy } = require("./passwordPolicy");

exports.loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
