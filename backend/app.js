const express = require('express')
const app = express()
const ApiRouter = require('./router/ApiRouter')
const cors = require('cors')
const bodyParser = require("body-parser");
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ApiRouter.SignUpRouter)


const port = 3001
app.listen(port, () => {
    console.log(`BackEnd listening on port ${port}`)
})