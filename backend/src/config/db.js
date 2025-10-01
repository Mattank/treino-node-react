require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "development"}` });
const mysql = require("mysql2/promise");

if (process.env.NODE_ENV === "production") {
  throw new Error("NUNCA rode testes em produção!");
}

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: process.env.DB_WAIT_FOR_CONNECTIONS,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    queueLimit: process.env.DB_QUEUE_LIMIT,
});

module.exports = pool;
