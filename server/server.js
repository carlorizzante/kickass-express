const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views")); // hbs seems to spot on with views, but just in case...
hbs.registerPartials(path.join(__dirname, "./views/partials"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.status(200);
  res.render("index", {
    content: "Welcome to the Home page"
  });
});

// 404 route, keep it at the very bottom of the stack
app.use(function (req, res, next) {
  res.status(404);
  res.render("404", {
    content: "The content you're looking for isn't available at the moment or it has been swalled by a Yeti."
  });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

module.exports = { app }; // Export app for testing
