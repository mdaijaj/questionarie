import { useState } from "react";
import axios from 'axios'
import Step6 from "./step6";

const Step5 = ({ data, page_data, data2 }) => {
    const [question_ans, setQuestion_ans] = useState()
    const [pagedata, setPagedata] = useState(false)


    const handleChange = (e) => {
        console.log(e.target.value)
        setQuestion_ans({ ...question_ans, [e.target.name]: e.target.value })
    }

    const SaveAnswer = async (e) => {
        e.preventDefault();

        const { question, answer } = question_ans;
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

    const Goto = (item) => {
        if (item) {
            setPagedata(true)
            page_data(question_ans)
        } else {
            alert("please field all fields")
            setPagedata(false)
        }
    }

    return (
        <div>
            {pagedata ?
                (<Step6 data={data} data2={data2} page_data={page_data} />)
                :
                <>
                    <h1>step5</h1>
                    {/* <h2>Question 5: In which country do you live? (as per state field)</h2> */}
                    <div className="container">
                        <form onSubmit={SaveAnswer}>
                            <div className="container">
                                <span> Question 5:- </span>
                                <input type="text" name="question" onChange={handleChange} /><br /><br />
                            </div>
                            <span> Answer:- </span>
                            <select className="form-select" id="answer" onChange={handleChange} name="answer" aria-label="select example">
                                <option selected>India</option>
                                <option value="USA">USA</option>
                                <option value="Austrilia">Austrilia</option>
                                <option value="Germany">Germany</option>
                                <option value="UK">UK</option>
                                <option value="Canada">Canada</option>
                            </select>
                            <button style={obj} type="submit" className="btn btn-success">Save Answer</button>
                            <button className="btn btn-info" onClick={() => Goto(question_ans)}>go to step 6</button>
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

export default Step5;