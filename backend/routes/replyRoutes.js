const express = require('express');
const router = express.Router();

const generateReplyController = require('../controllers/replyController');
const authMiddleware = require("../middleware/authMiddleware");


router.post('/generate-reply', generateReplyController.generateReply)
router.post('/save-reply', authMiddleware, generateReplyController.saveReply);
router.get(
    '/replies',
    authMiddleware,
    generateReplyController.getReplies
);


module.exports = router;