require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const userController = require('./controllers/userControllers');
const MongoStore = require('connect-mongo');
const isSignedIn = require('./middleware/isSignedIn');
const passUserToView = require('./middleware/pass-user-to-view');
const productController = require('./controllers/productControllers');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB: ' + mongoose.connection.name);
});

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}));

app.use(passUserToView);

app.get('/' , async(req,res) => {
    res.render('index.ejs',{
        user: req.session.user
    });
});

app.get('/vip-lounge', isSignedIn, (req,res) => {
    res.send(`Welcome to the party ${req.session.user.username}`)
})

app.use('/auth', userController);
app.use('/products',productController);


app.listen(3000, () => {
    console.log("Connected to the server");
})
