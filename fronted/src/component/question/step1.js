import { useState } from "react";
import Step2 from './step2'


const Step1 = () => {
    const [question_ans, setQuestion_ans] = useState()
    const [page, setPage] = useState(false)
    const [mainArr, setMainArr] = useState([])

    const [pagecount, setPagecount]= useState({
        counter: 1,
        total: 5
    })
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

    let obj = {
        margin: "20px"
    }

    return (
        <div>
            {page ?
                <Step2 data={mainArr} page_data={countdataItem} data2={pagecount}/>
                :
                (
                    <><h3>Question 1:</h3>
                        <div className="container">
                            <form>
                                <h2>What is your name? </h2>
                                <label>
                                    First Name : 
                                </label> <br/>
                                <input type="text" name="question" onChange={handleChange} required /><br /><br />
                                <label>
                                    Last Name : 
                                </label> <br/>
                                <input type="text" name="answer" onChange={handleChange} required /><br /><br />
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