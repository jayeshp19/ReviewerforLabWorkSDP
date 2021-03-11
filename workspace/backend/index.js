const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const passport = require("passport");
const users = require("./routes/users");
dotenv.config();

const port = process.env.PORT || 5000;






//db connect
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true })
    .then(() => console.log('db connected...'))
    .catch(err => console.log(`db error: ${err}`));



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/users", users);


app.use(logger('dev'));



// const usersRoute = require('./routes/users');
// const assignmentsRoute = require('./routes/assignments');
// //routes
// app.use('/', require('./routes/home'));
// app.use('/user', usersRoute);
// app.use('/assignment', assignmentsRoute);

app.listen(port,() => console.log(`server running on port ${port}...`));