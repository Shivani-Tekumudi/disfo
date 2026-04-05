const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({

     firstName: {
    type: String,
    trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
            }
        },

  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: 3,
    maxLength :25,
     validate : (data) =>{
        return validator.isAlphanumeric(data, )
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
     validate : (data) =>{
        return validator.isEmail(data)
    }
  },
  
}, {
  // Automatically adds createdAt and updatedAt fields
  timestamps: true 
});

// Compile the schema into a model
const User = mongoose.model('DisfoUser', userSchema);

module.exports = User;
