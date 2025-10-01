const request = require("supertest");
const app = require("../app");
const db = require("../config/db");

beforeAll(async () => {
  await db.query("DELETE FROM users");
  await request(app).post("/users").send({
    email: "teste@example.com",
    password: "Abc12345",
  });
});

afterAll(async () => {
  await db.end();
});

describe("Auth login", () => {
  it("should login and return a token", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "teste@example.com",
      password: "Abc12345",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("expiresAt");
  });

  it("should reject invalid credentials", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "teste@example.com",
      password: "senhaErrada",
    });
    expect(res.statusCode).toBe(401);
  });
});
