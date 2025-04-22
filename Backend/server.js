const UserRoute =require('./routes/userRoutes');

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', UserRoute);

mongoose.connect('mongodb://localhost:27017/userdb',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=>console.log('connected to MongoDB'))
.catch((err)=>console.error('MongoDB connection Error:',err));

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000'); // Changed to common backend port
  });