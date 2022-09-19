const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ceg4981:australian6@cluster0.wmkqhpm.mongodb.net/MobileSanitizationStation?retryWrites=true&w=majority'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.static('client/build'));


app.use(morgan('tiny'));

app.use('/', routes);

app.listen(PORT, console.log(`Server starting at ${PORT}`));
