 const userModel = require('../Model/user.model');
const dicussionModel = require('../Model/discussion.model');



class Discussion{

static async  createNewDisService({title,author,content}) {
 console.log({title,author,content});

 const isUserFound = await this.fetchUserInCollection(author);
     if (!isUserFound){
        return { success: false, message: "User not found" }
     }
     const discussion = await dicussionModel.create({ title, author, content });
     return {
    success: true,
    message: "Discussion created",
    data: discussion
  };

}


static async fetchUserInCollection(author){

 const user = await userModel.findOne({firstName:author});
 return !!user; // cleaner boolean
}
 

}

module.exports = Discussion