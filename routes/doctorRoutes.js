const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController')
const otpController = require('../controllers/otpController')
const path = require('path')
const multer = require('multer')

router.use(express.static(path.join(__dirname,'../public')))

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'public/upload')
    },
    filename:function(req,file,cb){
        const fileName = file.originalname.split(' ').join('');
        const ext = path.extname(fileName);
        const newFile = `${Date.now()}${ext}`
        cb(null,newFile)
    }
});
const doctorsImage = multer({storage:storage});
//doctor route
router.post('/add-doctors',doctorsImage.single('image'),doctorsController.addDoctordData);
router.get('/get-doctorsData', doctorsController.getDoctorsList);
router.get('/search-doctors', doctorsController.getDoctorsData);

//otp
router.post('/request-otp', otpController.requestOtp);
router.post('/verify-otp', otpController.verifyOtp);

module.exports = router;