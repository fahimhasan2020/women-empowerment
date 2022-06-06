
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var details = {
    roll:'C181265',
    fullname:'Sidratul Muntaha',
    subject:'CSE'
  }
  res.send(details)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})