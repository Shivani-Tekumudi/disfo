const { validatorUserInput } = require("../Validator/UserinputValidator");

function userInputValidation(res,req,next){
const {error} = validatorUserInput(req.body);
if(error){
    return res.status(409).json({ message: "Failed to create new user", reason: "Already Exists in DB"});
}
next();
}

module.exports = {userInputValidation}