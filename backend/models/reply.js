const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({

    originalEmail: {
        type: String,
        required: true,
    },

    generatedReply: {
        type: String,
        required: true
    },

    tone: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Reply",ReplySchema);