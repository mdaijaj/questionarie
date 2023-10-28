import { useState } from "react";
import axios from 'axios'
import Step2 from './step2'


const Step1 = () => {
    const [question_ans, setQuestion_ans] = useState()
    const [page, setPage] = useState(false)
    const [mainArr, setMainArr] = useState([])

    const [pagecount, setPagecount]= useState({
        counter: 1,
        total: 6
    })
    console.log("aijaj")
    const countdataItem=(data)=>{
        let obj={}
        obj["counter"]=pagecount.counter+1
        obj["total"]=pagecount.total
        setPagecount(obj)
        setMainArr([...mainArr, data])
    }

    const Goto = (item) => {
        if (item) {
            setPage(true)
            countdataItem(question_ans)
        } else {
            alert("please field all fields")
            setPage(false)
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setQuestion_ans({ ...question_ans, [e.target.name]: e.target.value })
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
            {page ?
                <Step2 data={mainArr} page_data={countdataItem} data2={pagecount}/>
                :
                (
                    <><h1>Step1</h1>
                        <div className="container">
                            <form onSubmit={SaveAnswer}>
                                {/* <h2>Question 1:- What is your name?</h2> */}
                                <span> Question 1:- </span>
                                <input type="text" name="question" onChange={handleChange} required /><br /><br />
                                <span> Answer:- </span>
                                <input type="text" name="answer" onChange={handleChange} required /><br />
                                <button style={obj} type="submit" className="btn btn-success">Save Answer</button>
                                <button className="btn btn-info" onClick={() => Goto(question_ans)}>go to step2</button>
                            </form>
                        </div>
                        <div className="pagination">
                            <h5>{` Current Page :- ${pagecount.counter}/${pagecount.total}`}</h5>
                        </div>
                    </>)
            }
        </div>
    )
}

export default Step1;