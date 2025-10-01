const db = require("../config/db");

exports.create = async ({ userId, token, expiresAt }) => {
  await db.query(
    "INSERT INTO tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
    [userId, token, expiresAt]
  );
  return { token, expiresAt };
};

exports.findValid = async (token) => {
  const [rows] = await db.query(
    "SELECT * FROM tokens WHERE token = ? AND expires_at > NOW() LIMIT 1",
    [token]
  );
  return rows[0];
};
