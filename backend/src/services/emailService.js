const emailRepo = require("../repositories/emailRepository");

exports.register = async ({ subject, content, sender, destination }) => {
  const id = await emailRepo.create({ subject, content, sender, destination });

  return {
    id,
    subject,
    content,
    sender,
    destination,
    status: "pending",
    createdAt: new Date()
  };
};
