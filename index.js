const express = require('express')

const app = express()

app.use(express.static('public'))

app.listen(8080, () => {
  console.log('App listening on port 8080! Look at http://localhost:8080!')
})