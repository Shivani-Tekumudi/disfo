const express = require('express');
const mongoose =require('mongoose');
const UserRouter = require('./Router/user.routes')
const PORT = 8082;

const server = express();
server.use(express.json());
 server.use('/user/', UserRouter)

const uri ="mongodb://127.0.0.1:27017/";
const db = "Mongo_learning";
mongoose.connect(uri + db).then(() =>{
    console.log(" DB successfully connects")
})

server.listen(PORT,() =>{
    console.log(`Server Running at Port ${PORT}`)
});
