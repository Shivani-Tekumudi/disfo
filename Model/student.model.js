const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({


    id:{
    require: true,
    type: String,
     trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
            }
    },

     firstName: {
        require: true,
    type: String,
    trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
            }
        },

   lastName: {
     require: true,
    type: String,
    trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
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
const Student = mongoose.model('DisfoStudent', studentSchema);

module.exports = Student;
