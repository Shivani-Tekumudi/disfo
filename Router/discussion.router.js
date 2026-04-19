const express=  require('express');
const {createNewDiscussion,getAllDiscussion,getDiscussionsByUsername} = require('../Controller/discussion.controller');
const {discussionValidator} = require('../Middleware/DiscussionValidator');
const { PasswordValidator } = require('../Middleware/PasswordValidator');



const router = express.Router();

router.post('/new',discussionValidator, createNewDiscussion);
router.get('/all1',PasswordValidator,getAllDiscussion);
router.get('/user/:username',getDiscussionsByUsername);
module.exports = router