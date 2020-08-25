const router = require('express').Router()
const bcrypt = require('bcrypt');
const { User } = require('../model/UserSchema');
const DBuser = require('../model/UserSchema').User

exports.controller = (req, res) => {

    //kodi me krahasu passwordin a eshte i sakt prej databaze
    //hash eshte pw prej databaze 

    const username = req.body.username
    const password = req.body.password

    const Users = new User()


    DBuser.findOne({ username: 'dardanbakiu' }, (err,document)=>{
        if(err=> res.json(err))//status(500).send(err))
        return res.json(document)//status(200).send(document)
    })

    // if (bcrypt.compareSync('somePassword', hash)) {
    //     // Passwords match
    // } else {
    //     // Passwords don't match
    // }
}