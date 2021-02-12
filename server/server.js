const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

// Route includes
const matchRouter = require("./routes/match.router");
const userRouter = require("./routes/user.router");
const demographicRouter = require("./routes/demographic.router");
const serviceRouter = require("./routes/service.router");
const maladyRouter = require("./routes/malady.router");
const compensationRouter = require("./routes/compensation.router");
const vetSearchRouter = require('./routes/vetSearch.router');
const vetRouter = require("./routes/vet.router");
const resourceRouter = require("./routes/resource.router");
const emailRouter = require("./routes/email.router");
const resourceSearchRouter = require("./routes/resourceSearch.router");
const deleteResourceRouter = require('./routes/deleteResource.router');
const categoryRouter = require('./routes/category.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/match", matchRouter);
app.use("/api/vet", vetRouter);
app.use("/api/user", userRouter);
app.use("/api/demographic", demographicRouter);
app.use("/api/service", serviceRouter);
app.use("/api/malady", maladyRouter);
app.use("/api/compensation", compensationRouter);
app.use("/api/resource", resourceRouter);
app.use("/api/vetsearch", vetSearchRouter);
app.use("/api/email", emailRouter);
app.use("/api/resourceSearch", resourceSearchRouter);
app.use("/api/deleteResource", deleteResourceRouter);
app.use("/api/category", categoryRouter)
// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
