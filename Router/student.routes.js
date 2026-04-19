
const express=  require('express');
const { createNewStudent, getStudentById, updateStudentById,deleteStudentById } = require('../Controller/student.controller');
const router = express.Router();

router.post('/newStudent', createNewStudent);
router.get('/getStundentById/:_id', getStudentById);
router.put('/updateStudentById/:_id', updateStudentById);
router.delete('/deleteStudentById/:_id',deleteStudentById)

module.exports = router;
