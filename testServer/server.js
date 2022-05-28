const express = require("express");
const session = require("express-session");
const cors = require("cors");
const PORT = 80;

const app = express();

app.listen(80, () => {
  console.log(`Test Server runninng on port ${PORT}`);
});

app.use(
  cors({
    //Temporary fix
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "Super secret secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: null,
    },
  })
);

app.get("/test/login", async (req, res) => {
  console.log("Requested login");
  req.session.loggedIn = true;
  console.log("Logged In");
  res.send("Logged In");
});

app.get("/test/checkAuth", async (req, res) => {
  console.log("Requested checkAuth");
  const isLoggedIn = req.session.loggedIn || false;
  console.log(isLoggedIn);
  res.send({ isLoggedIn: isLoggedIn });
});
