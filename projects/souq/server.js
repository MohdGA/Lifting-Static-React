require('dotenv').config();
const express = require('express');
const app  = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const souqController = require('./controllers/souqController');
const session = require('express-session');
const mongoStore = require('connect-mongo');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connection', () => {
    console.log('CONNECTED');
});

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(session({
    secret: process.env.MONGODB_URI,
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
}));

app.get('/', (req,res) => {
    res.render('index.ejs');
});

app.use('/souq', souqController);


const port = process.env.port ? process.env.port : 3000;

app.listen(port, () => {
    console.log("CONNECTED TO THE SERVER");
})