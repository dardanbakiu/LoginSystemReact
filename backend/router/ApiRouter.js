const app = require('express')
const router = app.Router()

exports.SignUpRouter = router.post('/api/signup', (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    res.json({'msg': 'data came to backend', 'user':user})
})
