const db = require("../config/db");

exports.findByEmail = async (email) => {
  const [rows] = await db.query(
    "SELECT id, email, password FROM users WHERE email = ? LIMIT 1", [email]
  );
  return rows[0];
};

exports.create = async ({ email, password }) => {
  const [result] = await db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)", [email, password]
  );
  return result.insertId;
};

exports.findById = async (id) => {
  const [rows] = await db.query(
    "SELECT id, email, created_at FROM users WHERE id = ?", [id]
  );
  return rows[0];
};
