const cron = require("node-cron");
const db = require("../config/db");

async function cleanExpiredTokens() {
  try {
    const [result] = await db.query("DELETE FROM tokens WHERE expires_at < NOW()");
  } catch (err) {
  }
}

if (process.env.NODE_ENV !== "test") {
  const cron = require("node-cron");
  cron.schedule("0 * * * *", cleanExpiredTokens);
}

module.exports = { cleanExpiredTokens };