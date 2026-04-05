require('dotenv').config();
const SECRET_SERVER_KEY = process.env.X_API_KEY;

 function PasswordValidator(req,res,next){
   
        const apiKey = req.headers['x-api-key'];
        // console.log("Incoming key:", apiKey);
        // console.log("Expected key:", SECRET_SERVER_KEY);
        if (!apiKey) {
            return res.status(403).json({ message: "API key missing, Unauthorised Access" });
        }

        if (apiKey !== SECRET_SERVER_KEY) {
            return res.status(403).json({ message: "Invalid API key, Unauthorised Access" });
        }

        next();

   
}

module.exports = {PasswordValidator}
