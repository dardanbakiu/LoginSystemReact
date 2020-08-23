const express = require('express')
const app = express()

app.use('/' ,(req,res)=>{
    let users = [
        {id:1 , username:'dardanbakiu', password:'pw'},
        {id:1 , username:'dardanbakiu', password:'pw'}
    ]
})

const port = 3000
app.listen(port)