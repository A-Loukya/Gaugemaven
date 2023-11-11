import "../css/Faq.css"
import { useState } from "react";
const Faq = () => {
    const [selected, setSelected] = useState(null);
    const [selected1, setSelected1] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };
    const toggle1 = (i) => {
        if (selected1 === i) {
            return setSelected1(null);
        }
        setSelected1(i);
    };
    return ( 
        <div >
            <div className="main faq">
            <h2>Frequently,<span> asked questions</span> </h2>
            <h6>If you're uncertain about whether Gaugemaven is the right fit for you, there's no need to worry. We are here to provide clarifications through answers to some of the commonly asked questions.</h6>
<div >
                    <div className="accordion">
                        {data1.map((item, i) => (
                            <div className="item">
                                <div
                                    className="title"
                                    onClick={() => toggle(i)}
                                >
                                    <h3>{item.question}</h3>
                                    <span>{selected === i ? "-" : "+"}</span>
                                </div>
                                <div
                                    className={
                                        selected === i
                                            ? "content-show"
                                            : "content"
                                    }
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    </div>
        </div>
     );
}
const data1 = [
    {
        question: "Ut enim ad minim veniam, quis nostrud exercitation?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "Ut enim ad minim veniam, quis nostrud exercitation?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
];
 
export default Faq;