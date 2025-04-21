const express= require('express');
const router = express.Router();
const User =require('../models/user');

router.post('/users',async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

router.get('/users',async(req,res)=>{
   const users = await User.find();
   res.json(users);
})

router.delete('/users/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message:"User deleted"})
})

router.put('/users/:id', async(req,res)=>{
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json(updateUser);
})

module.exports = router;