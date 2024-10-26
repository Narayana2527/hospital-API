const OtpModel = require('../models/otpModel');

module.exports={
    requestOtp:async(req,res)=>{
        try{
            const mobile = req.body;
            const otp = Math.floor(100000 + Math.random() * 900000); //generate OTP            
            const newOtp =  new OtpModel({mobile,otp});
            const Otp = await newOtp.save();
            console.log(Otp);return;
            res.status(200).json({
                success:true,
                message:"Otp sent successfully",
                otpData:Otp
            })
        }catch(error){
            res.status(400).json({
                success: false,
                message: "Error generating OTP"
            });
        }
    },
    verifyOtp: async (req,res)=>{
        try{
            const {mobile,otp } = req.body;
            //Check if otp exists in mongodb databse
            const otpData = await OtpModel.findOne({mobile,otp});
            if(otpData){
                res.status(200).json({
                    success:true,
                    message:"Otp verified successfully"
                })
            }else{
                res.status(400).json({
                    success:false,
                    message:"Invalid OTP"
                })
            }
        }catch(error){
            res.status(500).json({
                success: false,
                message: "Error Verifying OTP"
            });
        }
    }
}