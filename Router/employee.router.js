
const express=  require('express');
const { createNewEmployee, getEmployeeById, updateEmployeeById,deleteEmployeeById } = require('../Controller/employee.controller');
const router = express.Router();

router.post('/newEmployee', createNewEmployee);
router.get('/getEmployeeById/:_id', getEmployeeById);
router.put('/updateEmployeeById/:_id', updateEmployeeById);
router.delete('/deleteEmployeeById/:_id',deleteEmployeeById)

module.exports = router;
