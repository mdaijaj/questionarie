import { useState } from "react";
import axios from 'axios'
import Step5 from "./step5";


const Step4 = ({ data, data2, page_data }) => {
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
                (<Step5 data={data} data2={data2} page_data={page_data}/>)
                :
                <>
                    <h1>Step4</h1>
                    {console.log("data2", data2)}

                    {/* <h2>Question 4: In which State do you live? (dropdown)</h2> */}
                    <div className="container">
                        <form onSubmit={SaveAnswer}>
                            <span> Question 4:- </span>
                            <input type="text" name="question" onChange={handleChange} /><br /><br />
                            <span> Answer:- </span>
                            <select className="form-select" id="working_physical_location" onChange={handleChange} name="answer" aria-label="select example">
                                <option selected>State*</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hariyana">Hariyana</option>
                                <option value="UP">Punjab</option>
                                <option value="Maharastra">Maharastra</option>
                            </select>
                            <button style={obj} type="submit" className="btn btn-success">Save Answer</button>
                        <button className="btn btn-info" onClick={() => Goto(question_ans)}>go to step 5</button>
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

export default Step4;