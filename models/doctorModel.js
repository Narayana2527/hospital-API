const mongoose = require("mongoose");
const express = require('express');

const Doctormodel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    }
},{timestamps:true});
const DoctorsModel = mongoose.model('doctor',Doctormodel);
module.exports = DoctorsModel;