const express = require('express')  // import express
const bodyParser = require('body-parser')   // import body-parser
const { default: mongoose } = require('mongoose') // import mongoose
 const shoesRoute = require('./routes/ShoesRoute')
const port = 5000  // define port

const server = express() // saving server

// middleware
server.use(bodyParser.json()) 


//routes
server.use(shoesRoute)


// to setup mongoose, in your mongoose profile in the browser, open cluster, create a cluster, connect to the cluster, and pass the connection link in mongoose.connect() as a string
// then in the browser pick the password from database access tab and edit user, update user when you done and replace the password in the connection link
mongoose.connect('mongodb+srv://deeosy2:SfwePtQyNMhWGKpd@test-1.mmhw6.mongodb.net/?retryWrites=true&w=majority&appName=test-1')
    .then(result => {
        // server going live
        server.listen(port, ()=>console.log(`server is live on http://localhost:${port}`))      
    }).catch(err =>  console.log(err))


