const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const wrodsRouter = require("./routes/wrods");
const usersRouter = require("./routes/users");
const sentencesRouter = require("./routes/sentences");

const app = express();
app.use(bodyParser.json());
app.use(cors())


app.use("/api/words", wrodsRouter);

app.use("/api/users", usersRouter);

app.use("/api/sentences", sentencesRouter);

module.exports = app;
