const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

const matchRouter = require("./routes/match.router");
const userRouter = require("./routes/user.router");
const vetRouter = require("./routes/vet.router");
const resourceRouter = require("./routes/resource.router");
const emailRouter = require("./routes/email.router");
const categoryRouter = require('./routes/category.router');
const dropdownRouter = require('./routes/dropdown.router');
const updateProfileRouter = require('./routes/updateProfile.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRouter);
app.use("/api/match", matchRouter);
app.use("/api/vet", vetRouter);
app.use("/api/user", userRouter);
app.use("/api/resource", resourceRouter);
app.use("/api/email", emailRouter);
app.use("/api/category", categoryRouter);
app.use("/api/dropdown", dropdownRouter);
app.use("/api/update", updateProfileRouter);

app.use(express.static("build"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
