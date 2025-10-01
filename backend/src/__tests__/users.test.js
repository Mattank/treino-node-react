const request = require("supertest");
const app = require("../app");
const db = require("../config/db");

beforeAll(async () => {
  await db.query("DELETE FROM users");
});

afterAll(async () => {
  await db.end();
});

describe("User registration", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/users").send({
      email: "teste@example.com",
      password: "Abc12345",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.email).toBe("teste@example.com");
  });

  it("should not allow duplicate email", async () => {
    const res = await request(app).post("/users").send({
      email: "teste@example.com",
      password: "Abc12345",
    });
    expect(res.statusCode).toBe(409);
  });
});
