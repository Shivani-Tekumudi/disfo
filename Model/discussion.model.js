const mongoose = require('mongoose');
const validator = require('validator');
const discussionSchema = new mongoose.Schema({
    title:{
    require: true,
    type: String,
     trim: true,
    maxLength:150,
   
    
    },

     author: {
        require: true,
    type: String,
    immutable: true,
    trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
            }
        },

   content: {
     
    type: String,
    trim: true,
    default: " ",
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
            }
        },
    
  
}, {
  // Automatically adds createdAt and updatedAt fields
  timestamps: true 
});

// Compile the schema into a model
const Discussion = mongoose.model('DisfoDiscussion', discussionSchema);

module.exports = Discussion;