const express=  require('express');
const {createNewDiscussion,getAllDiscussion,getDiscussionsByUsername,getDiscussionByID,deleteDisByIDfromAuthor} = require('../Controller/discussion.controller');
const {discussionValidator} = require('../Middleware/DiscussionValidator');
const { PasswordValidator } = require('../Middleware/PasswordValidator');



const router = express.Router();

router.post('/new',discussionValidator, createNewDiscussion);
router.get('/all1',PasswordValidator,getAllDiscussion);
router.get('/user/:username',getDiscussionsByUsername);
router.get('/id/:id',getDiscussionByID);
router.delete('/id/:id',deleteDisByIDfromAuthor);


module.exports = router