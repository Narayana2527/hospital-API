const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    mobile:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('otp',OtpSchema);