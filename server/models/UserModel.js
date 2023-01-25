const mongoose = require("mongoose")

const user = new mongoose.Schema({

    name :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    phone :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    file :{
        type:String,
        required:false,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU"
    },
    customerReview :{
        type:String,
        required:false,
        default:"false"
    },
    imgUploaded :{
        type:String,
        required:false,
        default:"false"
    }

})

module.exports = mongoose.model("User", user)