const mongoose = require("mongoose");

const addVechile = new mongoose.Schema({

    name:   {
        type:String,
        required:false,
        default:" "
    },
    source:    {
         type:String,
         required:true
     },
    des:   {
        type:String,
        required:true
    },
    charge:    {
        type:Number,
        required:true
    },
    gender:    {
        type:String,
        required:false,
        default:"male"
    },
    disp:    {
        type:String,
        required:false,
        default:"If you are looking for an ride then book now and help our environment."
    },
    dist_S_to_D:   {
        type: String,
        required:true
    },

    time:    {
        type:String,
        required:true
    },
    vechileName:    {
        type:String,
        required:true
    },
    id:    {
        type:String,
        required:true
    },

    seatLeft:    {
        type:Number,
        required:true
    },
    totalSeat:   {
        type:Number,
        required:true
    },
    phone:   {
        type:String,
        required:false,
        default:""
    },
    add:   {
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model("Vechile",addVechile);