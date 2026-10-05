const express = require('express');
const router = express.Router();

const generateReplyController = require('../controllers/replyController');


router.post('/generate-reply', generateReplyController.generateReply)
router.post('/save-reply', generateReplyController.saveReply);
router.get('/replies', generateReplyController.getReplies);


module.exports = router;