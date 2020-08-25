const express = require('express')
const app = express()
const ApiRouter = require('./router/ApiRouter')
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
app.use(cors())

const DB = process.env.DATABASE
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology:true
})
    .then(console.log('DB connected'))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ApiRouter.SignUpRouter)


const port = 3001
app.listen(port, () => {
    console.log(`BackEnd listening on port ${port}`)
})