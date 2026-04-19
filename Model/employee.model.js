const mongoose = require('mongoose');
const validator = require('validator');
const employeeSchema = new mongoose.Schema({
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

     name: {
        require: true,
    type: String,
    trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
            }
        },

   position: {
     require: true,
    type: String,
    trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlphanumeric(data, 'en-US', {ignore : ' '})
            }
        },
         salary: {
     require: true,
    type: String,
    trim: true,
    maxLength:10,
    minlength: 3,
    validate : (data) =>{
                return validator.isNumeric(data, 'en-US', {ignore : ' '})
            }
        },
         deparment: {
     require: true,
    type: String,
    trim: true,
    maxLength:50,
    minlength: 3,
    validate : (data) =>{
                return validator.isAlpha(data, 'en-US', {ignore : ' '})
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
const Employee = mongoose.model('DisfoEmployee', employeeSchema);

module.exports = Employee;
