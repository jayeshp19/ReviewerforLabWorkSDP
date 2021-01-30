const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config();

//db connect
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('db connected...')
)

//Middleware
app.use(express.json());

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


app.listen(5000,() => console.log('server running on port 5000...'));