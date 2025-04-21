const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/userdb',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=>console.log('connected to MongoDB'))
.catch((err)=>console.error('MongoDB connection Error:',err));

app.listen(5173,()=>{
    console.log('server listing on port "http://localhost:5173');
})