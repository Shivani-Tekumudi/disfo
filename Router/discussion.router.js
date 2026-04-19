const express=  require('express');
const {createNewDiscussion} = require('../Controller/discussion.controller');
const {discussionValidator} = require('../Middleware/DiscussionValidator');
const router = express.Router();

router.post('/new',discussionValidator, createNewDiscussion);
router.get(' /all1',createNewDiscussion);
module.exports = router