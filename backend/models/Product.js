const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    paymentID:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    rType:{
        type:String,
        required:true
    },
    rDetails:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    quentity:{
        type:Number,
        required:false
    },
    isRefund:{
        type:Boolean,
        required:false
    },

});

module.exports = mongoose.model('Products',productSchema);