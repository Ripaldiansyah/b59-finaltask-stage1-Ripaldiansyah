const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const session = require("express-session");
require("./src/config/ViewConfig")(app, express, path, hbs);
require("./src/config/expressConfig")(app, express);
require("dotenv").config();

app.use(
  session({
    name: "my-session",
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

const { registerHelpers } = require("./src/config/handleBarsConfig");
registerHelpers(hbs);

const auth = require("./src/routes/auth");
const heroes = require("./src/routes/heroes");
const types = require("./src/routes/types");

app.use("/", heroes);
app.use("/auth", auth);
app.use("/type", types);

// app.use((req, res) => {
//   res.redirect("/");
// });
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`yeay connect ${port}`);
});
