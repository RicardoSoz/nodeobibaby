const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const BodyParser = require("body-parser");
require('./models/Data');
//require('./services/save');


mongoose
  .connect(keys.mongoURI, {useUnifiedTopology: true, useNewUrlParser: true },)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT)