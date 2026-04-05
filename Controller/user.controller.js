const UserModel = require('../Model/user.model')
async function CreateNewUser(req,res){
const {firstName, username, email} = req.body;
        
        const userObject = UserModel({firstName,username,email})
        
    try{
      const response = await userObject.save();
         res.status(200).json(response);
        // res.status(200).send("success")
    }
    catch(err){
        console.log(err);
         res.status(500).send("Internal Server Error",{message: err.message});
    }
}

async function getAllUsers(req,res){
   
    try{
        const users = await UserModel.find();
        const payload = {
        users,
        size: users.length
        }
        if (users.length === 0) {
            return res.status(404).json({ message: "No Users found" });
        }

        return res.status(200).json(payload);    
    }
    catch(err){
        res.status(500).send({message:err.message})
    }

}

async function getUserbyUserName(req,res){
    const _username = req.params.username
    try{
        const user = await UserModel.findOne({username:_username});

        if(!user){
            return res.status(404).json({message : "No Users found"})
        }

         return res.status(200).json({user});
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}

module.exports= {CreateNewUser,getAllUsers,getUserbyUserName}