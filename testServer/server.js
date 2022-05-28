const express = require('express')
const session = require('express-session')
const cors = require('cors')
const PORT = 80

const app = express()
app.use(cors())

app.listen(80, ()=> {console.log(`Test Server runninng on port ${PORT}`)})

app.get('/test/login', async(req, res)=>{
    res.send("Hello World")
})