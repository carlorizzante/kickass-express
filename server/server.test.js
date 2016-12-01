const expect = require("expect");
const request = require("supertest");

const { app } = require("./server");

describe("server.js", () => {

  describe("GET /", () => {
    it("should serve root /", done => {
      request(app)
        .get("/")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("GET /404", () => {
    it("should return 404 for invalid route", done => {
      request(app)
        .get("/unreasonablelongroutewith404")
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});
