const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.port || 5000

const router = require('./route/ToDoListRouter');

const app = express()

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected To MongoDB..."))
.catch((err) => console.log(err))

app.use(router);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))