const authors = require("../controllers/authors");

module.exports = (app) => {
    app.get("/api/authors", authors.getAll);
    app.get("/api/authors/:id", authors.getOne);
    app.post("/api/authors", authors.create);
    app.put("/api/authors/:id", authors.update);
    app.delete("/api/authors/:id", authors.delete);
}