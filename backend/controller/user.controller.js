const questionAnswer= require('../models/user_schema');

//signup user
const createSingleQuestionAns= async (req,res)=>{
    try{
        const {
            question, answer
        }= req.body;
        console.log(req.body)
        if(!answer){
            return res.send({message: "please fill all fields"})
        }
        const questionExits= await questionAnswer.find({question: question}).exec()
        if(questionExits.length>0){
            return res.send({message: "data already exits.."})
        }else{
            let user= new questionAnswer({question, answer})
            await user.save();
              res.status(200).send({
                status: "success",
                message: "Registration successfully",
                statusCode: 200,
                data: user,
            });
        }
    }
    catch(err){
        console.log(err.message)
        res.status(200).send({message:"therei is someting error..", error: err.message});
    }
}


//signup user
const createQuestionAnswer= async (req,res)=>{
    try{
        const {
            question, answerz
        }= req.body;
        console.log(req.body)
        let mainarr=[];
        if(!req.body.data){
            return res.send({message: "please fill all fields"})
        }
        req.body.data.map( async(item)=>{
            const questionExits= await questionAnswer.findOne({question: item.question}).exec()
            if(questionExits){
                console.log("user already exit please go to login...")
            }else{
                if(item.question==undefined){
                    let user= new questionAnswer({question: item.question, answer: item.answer, multiple_data: item})
                    await user.save();
                }else{
                    let user= new questionAnswer({question: item.question, answer: item.answer})
                    mainarr.push(user)
                    await user.save();
                }
            }
        })
        return res.status(200).send({
            status: "success",
            message: "Registration successfully",
            statusCode: 200,
            data: mainarr,
        });
    }
    catch(err){
        console.log(err.message)
        res.status(200).send({message:"therei is someting error..", error: err.message});
    }
}


//all users information
const getAllQuestionAnswer= async (req,res)=>{
    try{
        const questiondata= await questionAnswer.find({})
        if(questiondata.length>0){
            return res.send({message: "get all data sucessfully!", data: questiondata})
        }else{
            return res.send({message: "data not found"})
        }
    }
    catch(err){
        console.log(err.message)
    }
}


//update service information
const updateQuestionAnswer= async(req,res)=>{
    try{
        const {first_name,description,email,mobile, last_name}=req.body
        console.log("req.body", req.body)
        const updateData= await questionAnswer.updateOne({_id: req.params.id}, {
            $set:{
                first_name, last_name,email,description,mobile
            }
        })
        console.log("updateData", updateData)
        res.send({status: "update data successfully! ", "result": updateData})
    }
    catch(err){
        console.log(err.message)
    }
}


//verified User from Admin
const questionAnswerDetails= async (req,res)=>{
    try{
        let questinoId=req.params.id
        const questiondata= await questionAnswer.findOne({_id: questinoId})
        if(questiondata){
            return res.send({
                message: "email verified sucessfully!", 
                code: 200,
                data: questiondata
            })
        }else{
            return res.send({message: "please input correct otp...."})
        }
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports={
    createQuestionAnswer,
    createSingleQuestionAns,
    questionAnswerDetails,
    getAllQuestionAnswer,
    updateQuestionAnswer,
}