const mongoose = require('../database/db');
const Schema = mongoose.Schema;

var question_answer_schema = new Schema({
    question: {
        type: String,
    },
    answer: {
        type: String,
    },
}, 
{
    timestamps: true
});

const QuestionAnswer = mongoose.model('qustion_answer', question_answer_schema);
module.exports = QuestionAnswer;