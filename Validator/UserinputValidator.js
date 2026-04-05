const joi = require('joi');

const userinputSchema = joi.object(
    {
    firstName: joi.string().max(50).alphanum(),
    username:joi.string().max(25).alphanum().required(),
    // email:joi.string().email().required(),
        email: joi.string().pattern(new RegExp('/^\S+@\S+\.\S+$/')).required(),

    }
);

function validatorUserInput(data){
    return userinputSchema.validate(data)
}
module.exports = {validatorUserInput};