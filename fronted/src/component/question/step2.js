import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Step3 from './step3';

const Step2 = ({ data, page_data, data2 }) => {
    const [question_ans, setQuestion_ans] = useState()
    const [pagedata, setPagedata] = useState(false)
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setQuestion_ans({ ...question_ans, [e.target.name]: e.target.value })
    }

    const Goto = (item) => {
        if (item) {
            setPagedata(true)
            page_data(question_ans)
        } else {
            alert("please field all fields")
            setPagedata(false)
        }
    }

    const SaveAnswer = async (e) => {
        e.preventDefault();

        const { question, answer, counter } = question_ans;
        const res = await axios.post('/api/create_single_question_answer', { question, answer })
        console.log("res", res)
        if (res.status === 400 || !res) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else {
            window.alert("question add successfully!")
        }
    }

    let obj = {
        margin: "20px"
    }

    return (
        <div>
            {pagedata ?
                (<Step3 data={data} page_data={page_data} data2={data2}/>) :
                <>
                    <h1>Step2</h1>
                    <div className="container">
                        <form onSubmit={SaveAnswer}>
                            {/* <h2>Question 2: Upload your photo? (user can select which part of image)</h2> */}
                            <span> Question 2:- </span>
                            <input type="text" name="question" onChange={handleChange} /><br /><br />
                            <span> Answer:- </span>
                            <input type="file" name="answer" onChange={handleChange} /><br />
                            <button style={obj} type="submit" className="btn btn-success">Save Answer</button>
                            <button className="btn btn-info" onClick={() => Goto(question_ans)}>go to step3</button>
                        </form>
                    </div>
                    <div className="pagination">
                        <h5>{` Current Page :- ${data2.counter}/${data2.total}`}</h5>
                    </div>
                </>
            }
        </div>
    )
}

export default Step2;