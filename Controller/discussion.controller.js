
 const discussionService = require('../Services/discussionService')

async function createNewDiscussion(req,res){
try{
const result  = await discussionService.createNewDisService(req.body);
if(!result.success){
    return res.status(404).json(result)
}
res.status(200).json(result)
}
catch(err){
console.error(err);
    return res.status(500).json({ message: "Internal server error" });
}


}

module.exports ={createNewDiscussion}