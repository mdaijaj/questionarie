import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

const Step6 = ({ data, data2, page_data }) => {
    const [selectedOptions, setSelectedOptions] = useState();
    const navigate = useNavigate()

    function handleSelect(data) {
        setSelectedOptions(data);
    }
    console.log("selectedOptions", selectedOptions)

    const Goto = (item) => {
        if (item.length>0) {
            page_data(selectedOptions)
        } else {
            alert("please field all fields")
        }
    }

    let obj = {
        margin: "20px"
    }

    let newObj={}
    newObj["data"]=data
    console.log("final data...", data)

    const SaveAnswer = async (e) => {
        e.preventDefault();

        const res = await axios.post('/api/create_question_answer', newObj)
        console.log("res", res)
        if (res.status === 400 || !res) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else {
            window.alert("question add successfully!")
            navigate('/final')
        }
    }

    const optionList = [
        { value: "travelling", label: "travelling" },
        { value: "dancing", label: "dancing" },
        { value: "music", label: "music" },
        { value: "tourist", label: "tourist" },
        { value: "sports", label: "sports" }
    ];


    return (
        <>
            <h1>Step6</h1>
            <h2>Question 6: Your interests? (Multi select dropdown)</h2>

            <div className="container">
                <form onSubmit={SaveAnswer}>
                    <span> Answer:- </span>
                    <div className="dropdown-container">
                        <Select
                            options={optionList}
                            placeholder="Select interested"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti
                        />
                    </div>
                    <button style={obj} type="submit" className="btn btn-success">Submit</button>
                </form>
                <button className="btn btn-info" onClick={()=>Goto(selectedOptions)}>Save Answer</button>
            </div>

            <div className="pagination">
                <h5>{` Current Page :- ${data2.counter}/${data2.total}`}</h5>
            </div>

        </>
    )
}

export default Step6;