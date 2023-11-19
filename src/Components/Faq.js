import "../css/Faq.css";
import { useState } from "react";
const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  
  return (
    <div>
      <div className="main faq">
        <h2>
          Frequently,<span> asked questions</span>{" "}
        </h2>
        <h6>
          If you're uncertain about whether Gaugemaven is the right fit for you,
          there's no need to worry. We are here to provide clarifications
          through answers to some of the commonly asked questions.
        </h6>
        <div>
          <div className="accordion">
            {data1.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h3>{item.question}</h3>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content-show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const data1 = [
  {
    question: "How long does it take for my review to be published on GaugeMaven?",
    answer:"Reviews on GaugeMaven are published immediately after submission. Our platform employs a real-time or automated review publishing process, allowing users to see their reviews and share their experiences with the community without delay",
  },
  {
    question: "Can I trust the ratings and reviews on GaugeMaven?",
    answer:
      "Yes, you can trust the ratings and reviews on GaugeMaven. We take measures to ensure the credibility of the information including user authentication. Our goal is to provide users with reliable and honest insights into products.",
  },
  {
    question: "How do I submit a product review on GaugeMaven?",
    answer:
      " To submit a product review on GaugeMaven, follow these steps Navigate to the product page of the item you want to review. Click on the Review it button.Provide your rating, write your review, and submit your feedback.Your review will be published immediately in reviews section.",
  },
  {
    question: "Can I respond to or comment on other users' reviews?",
    answer:
      " Yes, GaugeMaven encourages interaction among users though you can only like others reviews but can not comment on it. This feature helps in fostering a community where users can show gratitude to others for their valuble review.",
  },
  {
    question: "What should I include in my product review to make it helpful for others?",
    answer:
      " A helpful product review on GaugeMaven includes details about your actual experience with the product. Mention key features, highlight what you liked or disliked, and provide insights that potential buyers might find valuable. Be specific and consider addressing common concerns raised by other users.",
  },
];

export default Faq;
