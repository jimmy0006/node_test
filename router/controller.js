const User = require('../schemas/user')


exports.findAll = async (req,res)=>{
    try{
        console.log('userRouter');
        const users = await User.find({});
        res.json(users);
    }catch(err){
        console.error(err);
    }
}

exports.postOne = async (req,res)=>{
    try{
        const user=await User.create({
            name:req.body.name,
            age:req.body.age,
            married:req.body.married,
        });
        console.log(user);
        res.status(201).json(user);
    }catch(err){
        console.error(err);
    }
}
