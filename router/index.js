const express=require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err){
        console.error(err);
    }
});

module.exports = router;