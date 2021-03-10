const express = require("express");
const cors = require('cors');
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./passport-setup')
const app = express()
require('dotenv').config()
app.use(cors())
app.use(cookieSession({
    name: 'Green-Session',
    keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/static"));

app.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/')
})

app.listen(process.env.PORT || 1000, () => {
    console.log("server running")
})