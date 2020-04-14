const express = require("express");
const path = require('path');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const reviews = require("./routes/api/reviews");
const spaces = require("./routes/api/spaces");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB sucessfully"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/reviews", reviews);
app.use("/api/spaces", spaces);
require("./routes/api/uploadRoutes")(app);
// app.use("/api/uploadRoutes", uploadRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));