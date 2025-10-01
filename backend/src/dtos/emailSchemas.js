const { z } = require("zod");

exports.createEmailSchema = z.object({
  subject: z.string().min(1, "O assunto é obrigatório"),
  content: z.string().min(1, "O conteúdo não pode ser vazio"),
  sender: z.string().email("Remetente inválido"),
  destination: z.string().email("Destinatário inválido"),
});
