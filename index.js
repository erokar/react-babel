const express = require('express')
const http = require('http')

const app = express()

app.use(express.static('./dist'))
app.listen(3000)

app.get('/hello', (req, res) => res.json('Hello'))



