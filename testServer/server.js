const express = require('express')
const session = require('express-session')
const cors = require('cors')
const PORT = 80

const app = express()
app.use(cors())
app.use(session({
    secret: 'Super secret secret',
    resave: false,      
    saveUninitialized: false,     
    cookie:{
        maxAge: null
    }
}))

app.listen(80, ()=> {console.log(`Test Server runninng on port ${PORT}`)})

app.get('/test/login', async(req, res)=>{
    console.log("Requested login")
    req.session.loggedIn = true
    console.log("Logged In")
    res.send("Logged In")
})

app.get('/test/checkAuth', async(req, res)=>{
    console.log("Requested checkAuth")
    const isLoggedIn = req.session.loggedIn || false
    res.send({"isLoggedIn": isLoggedIn})
})