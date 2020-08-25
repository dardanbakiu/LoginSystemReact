const app = require('express')
const router = app.Router()

const signUpController = require('../controller/signUpController')
const signInController = require('../controller/signInController')

exports.SignUpRouter = router.post('/api/signup', signUpController.controller)
exports.SignInRouter = router.post('/api/signin', signInController.controller)