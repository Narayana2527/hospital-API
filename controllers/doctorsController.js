const DoctorsModel = require('../models/doctorModel')

module.exports ={
    addDoctordData:async (req,res)=>{
        try{
            let doctorData = new DoctorsModel({
                name:req.body.name,
                location:req.body.location,
                speciality:req.body.speciality,
                experience:req.body.experience,
                qualification:req.body.qualification,
                image:req.file.filename
            });
            let doctorsList = await doctorData.save();
            res.status(200).json({success:true, message:"Doctors Data added successfully",data:doctorsList});
            
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    },
    getDoctorsList:async (req,res)=>{
        try{
            let doctorsDataList = await DoctorsModel.find();
            res.status(200).json({
                success: true,
                message: "Doctors data retrieved successfully",
                doctorLists : doctorsDataList
            });
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    },
    getDoctorsData: async (req, res) => {
        const location = req.query.location; // Assuming location is passed as a query parameter
        try {
            let doctorsData;
            if (location) {
                doctorsData = await DoctorsModel.find({ location: location });
            } else {
                doctorsData = await DoctorsModel.find();
            }
            res.status(200).json({
                success: true,
                message: "Doctors data retrieved successfully",
                doctorDataLists: doctorsData
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}