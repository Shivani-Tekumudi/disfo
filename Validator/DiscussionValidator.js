const joi = require('joi');

const discussioninputSchema = joi.object(
    {
    title: joi.string().max(150).required(),
    author: joi.string().max(25).required(),
    content: joi.string()

    }
);

function validatorDiscussionInput(data){
   
    return discussioninputSchema.validate(data)
}
module.exports = {validatorDiscussionInput};