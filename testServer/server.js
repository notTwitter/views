import express from 'express'
import session from 'express-session';
import cors from 'cors'
import {BACKEND_DOMAIN, BACKEND_PORT, FRONTEND_DOMAIN, FRONTEND_PORT} from './backend.config.js'

const app = express();

app.listen(BACKEND_PORT, () => {
  console.log(`Test Server runninng on port ${BACKEND_PORT}`);
});

app.use(
  cors({
    origin: `http://${FRONTEND_DOMAIN}:${FRONTEND_PORT}`,
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

app.post("/test/login", async (req, res) => {
  console.log("Requested login");
  req.session.loggedIn = true;
  console.log("Logged In");
  const isLoggedIn = req.session.loggedIn || false;
  res.send({ isLoggedIn: isLoggedIn });
});

app.get("/test/checkAuth", async (req, res) => {
  console.log("Requested checkAuth");
  const isLoggedIn = req.session.loggedIn || false;
  console.log(isLoggedIn);
  res.send({ isLoggedIn: isLoggedIn });
});
