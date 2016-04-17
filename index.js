const express = require('express')
const app = express()

app.use(express.static('./dist'))
app.listen(3000)

app.get('/hello', (req, res) => res.json('hello'))
