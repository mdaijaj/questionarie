require('dotenv').config();
const express= require('express')
const router=express()
const user= require('../controller/user.controller') 


//users routes
router.post('/api/create_question_answer', user.createQuestionAnswer);
router.get('/api/questionAnswerDetails/:id', user.questionAnswerDetails)
router.put('/api/updateQuestionAnswer/:id', user.updateQuestionAnswer)  
router.get('/api/questionAnswerDetails', user.getAllQuestionAnswer)

module.exports = router;