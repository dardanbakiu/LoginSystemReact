const router = require('express').Router()
const bcrypt = require('bcrypt');
const { User } = require('../model/UserSchema');
const DBuser = require('../model/UserSchema').User
const jwt = require('jsonwebtoken')

exports.controller = (req, res) => {

    //kodi me krahasu passwordin a eshte i sakt prej databaze
    //hash eshte pw prej databaze 

    const _username = req.body.username
    const _password = req.body.password

    // const hash = bcrypt.hashSync(_password, 10)

    DBuser.findOne({ username: _username })
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({ msg: 'Username not found' })
            }

            if (bcrypt.compareSync(_password, user.password)) {
                // Passwords match
                const token = jwt.sign({
                    username: _username
                },process.env.JWT_KEY,
                {
                    expiresIn:60
                })

                return res.status(200).json({msg:`Welcome ${user.username}`, token: token}) //nese passwordat match ja kthen objektin me te dhena
                
            } else {
                // Passwords don't match
                return res.status(400).json({ msg: 'Username or Password is Wrong' })
            }
        })
        .catch(err => {
            // res.status(400).send(err)
            return res.status(500).json({ error: err })
        })

}