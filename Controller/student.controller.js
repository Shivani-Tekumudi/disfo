const studentModel = require('../Model/student.model');

async function createNewStudent(req,res){
const {id,firstName, lastName,email} = req.body;
const studentObj = studentModel({id,firstName, lastName,email});
    try{
        const response = await studentObj.save();
        if(response){
            res.status(200).json(response)
        }
        else{
            res.status(201).json({message:"cannot save"})
        }
    }
    catch(err){
res.status(400).json({message: err.message})
    }
}


async function getStudentById(req,res) {
    const { _id } = req.params;
    try{

        const response = await studentModel.findOne({id:_id})
        if(response){
            res.status(200).json(response)
        }
        else{
            res.status(201).json({message:"no recors found"})
        }
    }
    catch(err){
        res.status(400).json({msg:err.msg})
    }
}
async function updateStudentById(req,res){
    const { _id } = req.params;
     const updateData = req.body;
    try{

        const updateStudent = await studentModel.findOneAndUpdate({
            id:_id
        },updateData,{new:true,runValidators:true}
    
  
    )
      if(updateStudent){
        res.status(201).json({msg: "Updated successfully",
      data: updateStudent})
    }
    else{
        res.status(201).json({msg: "couldnt uodate"})
    }

    }
    catch(err){
        res.status(400).json({msg: err.msg})
    }
}
async function deleteStudentById(req,res) {
    const { _id } = req.params;
    try{

        const response = await studentModel.deleteOne({id:_id})
        if(response){
            res.status(200).json(response)
        }
        else{
            res.status(201).json({message:"no recors found"})
        }
    }
    catch(err){
        res.status(400).json({msg:err.msg})
    }
}

module.exports ={createNewStudent,getStudentById,updateStudentById,deleteStudentById}