const express = require("express");
const morgan = require('morgan')
const path = require('path');
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const reviews = require("./routes/api/reviews");
const spaces = require("./routes/api/spaces");
const uploadRoutes = require('./routes/api/uploadRoutes')

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB sucessfully"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/reviews", reviews);
app.use("/api/spaces", spaces);
app.use("/api/upload", uploadRoutes);
// app.use("/api/uploadRoutes", uploadRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));