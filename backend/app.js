const express = require('express')
const app = express()

app.use('/', (req,res)=>{
    const users = [
        {id:1 , username: 'dardan', password: 'pw'},
        {id:2 , username: 'mirjeta', password: 'pw'},
    ]

    res.json(users);
})

const port = 3001
app.listen(port, () => {
    console.log(`BackEnd listening on port ${port}`)
})