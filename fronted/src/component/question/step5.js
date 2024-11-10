import { useState } from "react";
import axios from 'axios';
import Step3 from "./step3";

const Step5 = ({ data, page_data, data2 }) => {
    const [question_ans, setQuestion_ans] = useState({});
    const [pagedata, setPagedata] = useState(false);

    const handleChange = (e) => {
        setQuestion_ans({ ...question_ans, [e.target.name]: e.target.value });
    };

    const SaveAnswer = async (e) => {
        e.preventDefault();
        const { question, answer } = question_ans;

        try {
            const res = await axios.post('/api/create_single_question_answer', { question, answer });
            console.log("res", res);
            if (res.status === 400 || !res) {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            } else {
                window.alert("Question added successfully!");
            }
        } catch (error) {
            console.error("Error saving answer:", error);
        }
    };

    const Goto = (item) => {
        if (item && item.answer) {
            setPagedata(true);
            page_data(question_ans);
        } else {
            alert("Please fill all fields");
            setPagedata(false);
        }
    };

    return (
        <div>
            {pagedata ? (
                <Step3 data={data} data2={data2} page_data={page_data} />
            ) : (
                <>
                    <h2>Question 4</h2>
                    <div className="container">
                        <form onSubmit={SaveAnswer}>
                            <div className="container">
                                <h2>Specific Vehicle Model</h2>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="India"
                                        onChange={handleChange}
                                    />
                                    Toyota Corolla
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="USA"
                                        onChange={handleChange}
                                    />
                                    Toyota Camry
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="Australia"
                                        onChange={handleChange}
                                    />
                                    Honda CR-V
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value="Germany"
                                        onChange={handleChange}
                                    />
                                    Toyota RAV4
                                </label>
                            </div>

                            <button type="submit" className="btn btn-success">Save Answer</button>
                            <button type="button" className="btn btn-info" onClick={() => Goto(question_ans)}>Go to Step 5 </button>
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

export default Step5;
