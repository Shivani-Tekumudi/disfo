require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const UserRouter = require('./Router/user.routes')
const StudentRouter = require('./Router/student.routes');
const EmployeeRouter =require('./Router/employee.router')

const PORT = process.env.PORT;
const URI =  process.env.MONGO_URI;
const db =   process.env.MONGO_DATABASE
console.log(process.env.PORT)
const server = express();
server.use(express.json());
server.get('/', (req, res) => {
  res.send("Working");
});
 server.use('/user/', UserRouter);
 server.use('/student/', StudentRouter)
 server.use('/employee/', EmployeeRouter)
mongoose.connect(URI + db).then(() =>{
    console.log(" DB successfully connects")
})

server.listen(PORT,() =>{
    console.log(`Server Running at Port ${PORT}`)
});
// Student Management System--
// Create student
// Get all students
// Get student by ID
// Update student
// Delete student

// Validation (email format, age > 0)
// Unique email constraint
// Search by name (?search=john)
// 2. Product Review System
// Entities
// Products
// Reviews
// CRUD
// Create product
// Update product
// Delete product
// Add review
// Get all reviews for a product
// Structure example
// {
//   "productName": "Phone",
//   "price": 20000
// }
// {
//   "rating": 4,
//   "comment": "Good",
//   "productId": "..."
// }
// What to focus on
// One-to-many relation (product → reviews)
// Average rating calculation
// Prevent invalid ratings (1–5)
// 🔥 3. Employee Management System
// Entities
// Employees
// CRUD
// Add employee
// Get all employees
// Update employee
// Delete employee
// Fields
// {
//   "name": "Alice",
//   "position": "Developer",
//   "salary": 50000,
//   "department": "IT"
// }
// What to focus on
// Filtering (?department=IT)
// Sorting (?sort=salary)
// Partial updates (PATCH vs PUT)