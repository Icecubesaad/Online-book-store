const mongoose = require("mongoose")
const {Schema} = mongoose
const BookSchema = new Schema({
    Id:{
        type:String
    },
    Name:{
            type:String
    },
    Url:{
            type:String
    },
    Price:{
        type:String
    },
    Author:{
        type:String
    },
    Description:{
        type:String
    },
    Pages:{
        type:String
    },
    User:{
        type:String
    }
})
const user = mongoose.model("Book",BookSchema)
user.createIndexes()
module.exports = user