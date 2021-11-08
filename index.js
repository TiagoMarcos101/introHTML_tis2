const express = require('express')
const app = express()
const path = require('path')
const { dirname } = require('path/posix')
app.use(express.static('./public'))
 
app.get('/', function (req, res) {
  res.sendFile(path.join(dirname, '/public/index.html'))
})
app.get('/nome', function (req, res) {
  res.send(`nome = ${req.params.nome}`)
})

const port = 3000;
app.listen(port,function(){
  console.log("Listening on port: " + port)
})