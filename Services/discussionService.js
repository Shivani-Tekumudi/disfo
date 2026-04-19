 const userModel = require('../Model/user.model');
const discussionModel = require('../Model/discussion.model');



class Discussion{

static async  createNewDisService({title,author,content}) {
 console.log({title,author,content});

 const isUserFound = await this.fetchUserInCollection(author);
     if (!isUserFound){
        return { success: false, message: "User not found" }
     }
     const discussion = await discussionModel.create({ title, author, content });
     return {
    success: true,
    message: "Discussion created",
    data: discussion
  };

}

static async getAllDiscussions(){
    const response = await discussionModel.find();
    if(response.length === 0){
    return { success: false, message: "No Discussions found" }
    }
    return{
        success: true,
        data: response
    }
}


static async fetchUserInCollection(author){

 const user = await userModel.findOne({username:author});
 return !!user; // cleaner boolean
}

static async getAuthorDiscussionByuserName(userName){

     const isUserFound = await this.fetchUserInCollection(userName);

     if (!isUserFound){
        return { success: false, message: "No discussions found for this user" }
     }

    const getDiscussionByAuthor = await discussionModel.find({author: userName})

    if( getDiscussionByAuthor.length == 0){
        return { success: false, message: "No Discussions found" }
    }
    return{
        success: true,
        data: getDiscussionByAuthor
    }

}
static async getDiscussionByID(id){

    const result = await discussionModel.findById(id);
     
     if (!result){
        return { success: false, message: "No discussions found for this user" }
     }
     return{
        success: true,
        data: result
    }

}
//  ------------ delete discussion fro the id and author as user from the user db------------------

static async deleteDiscussionByID(id,author){
    // 1. Fetch discussion
  const discussion = await discussionModel.findById(id);

  if (!discussion) {
    return { success: false, status: 404, message: "Discussion not found" };
  }
  // 2. Check ownership
  if (discussion.author !== author) {
    return { success: false, status: 403, message: "Unauthorized Access" };
  }

  // 3. Delete
  const result = await discussionModel.findByIdAndDelete(id);

  if (result.deletedCount === 0) {
    return { success: false, status: 404, message: "Discussion not found" };
  }
console.log()
 return {
    success: true,
    status: 200,
    message: "Discussion deleted successfully",
    response: result
  };
}

}

module.exports = Discussion