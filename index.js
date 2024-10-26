const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const doctorRoutes = require('./routes/doctorRoutes')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

//api router
app.use('/api',doctorRoutes);

//connection to MongoDB
const url ='mongodb://localhost:27017/hospital';
mongoose.connect(url);
const mongo = mongoose.connection;
mongo.on('connected',()=>{
    console.log('Connected to MongoDB');
});
mongo.on('err',(err)=>{
    console.log("Error in connecting to MongoDB");
})

// server connecting
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});