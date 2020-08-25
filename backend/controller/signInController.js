const router = require('express').Router()
const bcrypt = require('bcrypt');
const { User } = require('../model/UserSchema');
const DBuser = require('../model/UserSchema').User

exports.controller = (req, res) => {

    //kodi me krahasu passwordin a eshte i sakt prej databaze
    //hash eshte pw prej databaze 

    const Users = new User()
    Users.findOne({ username: 'dardanbakiu' }).then(doc => console.log(doc))

    if (bcrypt.compareSync('somePassword', hash)) {
        // Passwords match
    } else {
        // Passwords don't match
    }
}