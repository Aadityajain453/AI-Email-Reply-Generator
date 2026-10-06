const openAI = require('openai');
const ReplyData = require('../models/reply');

const openai = new openAI({
    apiKey: process.env.OPENAI_API_KEY
});

exports.generateReply = async (req, res) => {
    try {

        const { email, tone } = req.body;


        //validation 

        if (!email || !tone) {
            return res.status(400).json(
                {
                    message: "Email and tone are required."
                }
            )
        }

        //prompt

        const prompt = `Write a ${tone} email reply to the following email. Email : ${email}
        
        Return only the email reply. Do not include explanations.`;

        //openAI 

        const response = await openai.responses.create({
            model: "gpt-5-mini",
            input: prompt
        });

        const generatedReply = response.output_text;
        console.log(generatedReply);

        res.status(200).json({
            reply: generatedReply
        })

    } catch (error) {

        console.log("OpenAI Error:", error);

        res.status(500).json({
            message: "Failed to generate reply."
        })
    }
};

exports.saveReply = async (req, res) => {
    try {

        const { originalEmail, generatedReply, tone, user } = req.body;

        // validation

        if (!originalEmail || !generatedReply || !tone) {
            return res.status(404).json({
                message: "Original email, generated reply and tone are required."
            })
        }



        // save reply

        const newReply = new ReplyData({
            originalEmail,
            generatedReply,
            tone,
            userId: req.user.userId
        });

        await newReply.save();


        console.log(newReply);
        res.status(201).json({
            message: "Reply saved successfully.",
            reply: newReply
        });

    } catch (error) {
        console.log("Save Reply Error:", error);

        res.status(500).json({
            message: "Failed to save reply."
        });
    }
};

exports.getReplies = async (req, res) => {
    try {

        const replies = await ReplyData.find({ userId: req.user.userId }).sort({ createdAt: -1 });

        console.log(replies);

        res.status(200).json({
            replies: replies
        })

    } catch (error) {

        console.log("Get Replies Error:", error);

        res.status(500).json({
            message: "Failed to fetch replies."
        });
    }
}