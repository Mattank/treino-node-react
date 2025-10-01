const db = require("../config/db");
const { cleanExpiredTokens } = require("../workers/tokenCleaner");

beforeAll(async () => {
  await db.query("DELETE FROM tokens");

  const [users] = await db.query("SELECT id FROM users LIMIT 1");
  let userId;

  if (users.length === 0) {
    const [result] = await db.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      ["teste@example.com", "hashed"]
    );
    userId = result.insertId;
  } else {
    userId = users[0].id;
  }

  await db.query(
    "INSERT INTO tokens (user_id, token, expires_at) VALUES (?, 'valid', NOW() + INTERVAL 5 MINUTE)",
    [userId]
  );

  await db.query(
    "INSERT INTO tokens (user_id, token, expires_at) VALUES (?, 'expired', NOW() - INTERVAL 5 MINUTE)",
    [userId]
  );
});

afterAll(async () => {
  await db.end();
});

test("should delete expired tokens", async () => {
  const [before] = await db.query("SELECT COUNT(*) as count FROM tokens");
  await cleanExpiredTokens();
  const [after] = await db.query("SELECT COUNT(*) as count FROM tokens");

  expect(after[0].count).toBeLessThan(before[0].count);
});
