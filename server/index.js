const express = require("express")
const app = express()
const path = require("path")
const mongo_connect = require("./database")
const cookie = require("cookie-parser")
mongo_connect()
const cors=require("cors");
app.use(cors()) 
const port = 5000
app.use(express.json())
app.use(cookie())
app.use('/api/auth',require('./routes/Auth'))
app.use('/account/add',require('./routes/Books'))
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})