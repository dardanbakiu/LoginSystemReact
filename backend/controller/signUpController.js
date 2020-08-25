const router = require('express').Router()
const { hash } = require('bcrypt')
const bcrypt = require('bcrypt');

const mongoose = require('mongoose')
const DBuser = require('../model/UserSchema').User

exports.controller = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const hashPassword = bcrypt.hashSync(password, 5); // kodi per me enkriptu passwordin

    const newUser = new DBuser({
        username: username,
        email: email,
        password: hashPassword
    })

    newUser
        .save()
        .then(document => console.log(document))
        .catch(error => console.log(error))

    res.json({ 'msg': 'data came to backend', 'pass': password, 'hashedPw': hashPassword })
}