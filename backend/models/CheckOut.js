const mongoose = require('mongoose');

const checkOutSchema = new mongoose.Schema({

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
    quantity:{
        type:Number,
        required:false
    },
    isPayment:{
        type:Boolean,
        required:false
    },
    paymentId:{
        type:String,
        required:false
    },
    isRefund:{
        type:Boolean,
        required:false
    },
    totalAmount:{
        type:String,
        required:false
    },

});

module.exports = mongoose.model('CheckOuts',checkOutSchema);