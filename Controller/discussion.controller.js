
 const Discussion = require('../Model/discussion.model');
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


async function getAllDiscussion(req,res){
  try{
 const result = await discussionService.getAllDiscussions();
 if(!result.success){
    return res.status(404).json(result)
}
  res.status(200).json(result)
  } 
  catch(err){
res.status(500).json({ message: "Internal server error" });
  } 

}

async function getDiscussionsByUsername(req,res){
    try{
       
        const result = await discussionService.getAuthorDiscussionByuserName(req.params.username);

        if(!result.success){
            return res.status(404).json(result)
        }
         res.status(200).json(result)

    }
    catch(err){
        res.status(500).json({ message: "Internal server error" });
    }
}
async function getDiscussionByID(req,res){
   console.log("PARAMS:", req.params);
  console.log("ID:", req.params.id);
    try{
         const result = await discussionService.getDiscussionByID(req.params.id);
          if(!result.success){
            return res.status(404).json(result)
        }
        res.status(200).json(result)
    }
    catch(err){
          res.status(500).json({ message: "Internal server error",id:req });
    }
}

// ------------------------delete discussion------------------

async function deleteDisByIDfromAuthor(req, res) {
  try {
    const result = await discussionService.deleteDiscussionByID(
      req.params.id,
      req.body.author
    );
    console.log(result)
    if (!result.success) {
      return res.status(result.status).json({
        message: result.message
      });
    }

    return res.status(200).json({
      message: result
      
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports ={createNewDiscussion,getAllDiscussion,getDiscussionsByUsername,getDiscussionByID,deleteDisByIDfromAuthor}