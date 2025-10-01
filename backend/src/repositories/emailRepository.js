const db = require("../config/db");

exports.create = async ({ subject, content, sender, destination }) => {
  const [result] = await db.query(
    "INSERT INTO emails (subject, content, sender, destination, status) VALUES (?, ?, ?, ?,?)", [subject, content, sender, destination, "pending"]
  );
  return result.insertId;
};

