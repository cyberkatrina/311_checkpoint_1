const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser")
const usersRoute = require('./routes/users.js')

app.use(bodyParser.json())
app.get('/', (req, res) => res.send('default route'))

app.use(usersRoute)

app.listen(port, () => {
  console.log('app is listening on:', port)
})