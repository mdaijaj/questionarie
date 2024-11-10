import { useState } from "react";
import axios from 'axios'
import Step4 from "./step4";


const Step3 = ({ data, data2, page_data }) => {
    const [question_ans, setQuestion_ans] = useState()
    const [pagedata, setPagedata]= useState(false)

    console.log("aijajkhan", data2)

    const handleChange = (e) => {
        console.log(e.target.value)
        setQuestion_ans({ ...question_ans, [e.target.name]: e.target.value })
    }
    console.log("data", data)
    let obj = {
        margin: "20px"
    }

    const Goto = (item) => {
        if (item && item.answer) {
            setPagedata(true);
            page_data(question_ans);
        } else {
            alert("Please fill all fields");
            setPagedata(false);
        }
    };

    const SaveAnswer = async (e) => {
        e.preventDefault();
        const { question, answer } = question_ans;
        const res = await axios.post('/api/create_single_question_answer', { question, answer })

        if (res.status === 400 || !res) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else {
            window.alert("question add successfully!")
        }
    }

    return (
        <div>
            {pagedata ? 
            (<Step4 data={data} data2={data2} page_data={page_data}/>): 
            
           (
            <> <h1>Question 5:-</h1>
            <div className="container">
                <form onSubmit={SaveAnswer}>
                    <h2>book the vehicle? </h2>
                    <span> Start Date:- </span>
                    <input type="Date"
                        id="date_of_birth"
                        onChange={handleChange}
                        name='answer'
                        placeholder="date_of_birth.." />
                    <br /><br />
                    <span> End Date:- </span>
                    <input type="Date"
                        id="date_of_birth"
                        onChange={handleChange}
                        name='answer'
                        placeholder="date_of_birth.." />
                    <br /><br />
                    <button type="button" className="btn btn-info" onClick={() => Goto(question_ans)}> Back </button>
                    <button style={obj} type="submit" className="btn btn-success">Save Answer</button>
                </form>
            </div>

            <div className="pagination">
                <h5>{` Current Page :- ${data2.counter}/${data2.total}`}</h5>
            </div> </>)
       
            }
        </div>
    )
}

export default Step3;