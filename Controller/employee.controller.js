const employeeModel = require('../Model/employee.model');

async function createNewEmployee(req,res){
const {id,name, position,department,email} = req.body;
const employeeObj = employeeModel({id,name, position,department,email});
    try{
        const response = await employeeObj.save();
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


async function getEmployeeById(req,res) {
    const { _id } = req.params;
    try{

        const response = await employeeModel.findOne({id:_id})
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
async function updateEmployeeById(req,res){
    const { _id } = req.params;
     const updateData = req.body;
    try{

        const updateEmployee = await employeeModel.findOneAndUpdate({
            id:_id
        },updateData,{new:true,runValidators:true}
    
  
    )
      if(updateEmployee){
        res.status(201).json({msg: "Updated successfully",
      data: updateEmployee})
    }
    else{
        res.status(201).json({msg: "couldnt uodate"})
    }

    }
    catch(err){
        res.status(400).json({msg: err.msg})
    }
}
async function deleteEmployeeById(req,res) {
    const { _id } = req.params;
    try{

        const response = await employeeModel.deleteOne({id:_id})
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

module.exports ={createNewEmployee,getEmployeeById,updateEmployeeById,deleteEmployeeById}