import { useState } from "react";
import axios from 'axios';
import Step4 from "./step4";

const Step2 = ({ data, page_data, data2 }) => {
    const [question_ans, setQuestion_ans] = useState({});
    const [pagedata, setPagedata] = useState(false);

    const handleChange = (e) => {
        setQuestion_ans({ ...question_ans, [e.target.name]: e.target.value });
    };

    const Goto = (item) => {
        if (item) {
            setPagedata(true);
            page_data(question_ans);
        } else {
            alert("Please fill in all fields");
            setPagedata(false);
        }
    };

    const SaveAnswer = async (e) => {
        e.preventDefault();

        const { question, answer } = question_ans;
        try {
            const res = await axios.post('/api/create_single_question_answer', { question, answer });
            if (res.status === 200) {
                window.alert("Question added successfully!");
            } else {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("Error while saving answer");
        }
    };

    const styles = { margin: "20px" };

    return (
        <div>
            {pagedata ? (
                <Step4 data={data} page_data={page_data} data2={data2} />
            ) : (
                <>
                    <h2>Question 2:-</h2>
                    <div className="container">
                        <form onSubmit={SaveAnswer}>
                            <h2>Number of Wheels? </h2>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="wheels"
                                    id="inlineRadio1"
                                    value="2 Wheelers"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="inlineRadio1">2 Wheelers</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="wheels"
                                    id="inlineRadio2"
                                    value="4 Wheelers"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">4 Wheelers</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="wheels"
                                    id="inlineRadio3"
                                    value="6 Wheelers"
                                    disabled
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="inlineRadio3">6 Wheelers (disabled)</label>
                            </div><br/>
                            <button style={styles} type="submit" className="btn btn-success">Save Answer</button>
                            <button type="button" className="btn btn-info" onClick={() => Goto(question_ans)}>Go to Step 3</button>
                        </form>
                    </div>
                    <div className="pagination">
                        <h5>{`Current Page: ${data2.counter}/${data2.total}`}</h5>
                    </div>
                </>
            )}
        </div>
    );
};

export default Step2;
