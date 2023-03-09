const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1:27017/Library';
const mongo_connect = ()=>{
    mongoose.connect(url,()=>{
        console.log("Connected to database")
    })
}
module.exports=mongo_connect