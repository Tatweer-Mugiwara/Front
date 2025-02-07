import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function FAQElement(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen
          ? "px-[4vw] w-[80vw] border-2 py-[4vh] border-mainColor rounded-[8px] flex flex-col gap-[2vh] bg-mainColor text-white shadow-[0_35px_60px_15px_rgba(43, 45, 66, 1)] transition duration-700"
          : "px-[4vw] w-[80vw] border-2 py-[3vh] border-mainColor rounded-[8px] flex flex-col gap-[2vh] transition duration-700 text-Typo"
      }`}
    >
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between text-[1.3rem] md:text-[1.6rem]"
      >
        {props.question} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="md:text-[1.2rem]">{props.answer}</div>}
    </div>
  );
}

const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      id: 1,
      question: "Lorem ipsum dolor amet ?",
      answer:
        "Lorem ipsum dolor amet, consectetur adipiscing elit Lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor amet ?",
      answer:
        "Lorem ipsum dolor amet, consectetur adipiscing elit Lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor amet ?",
      answer:
        "Lorem ipsum dolor amet, consectetur adipiscing elit Lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor amet ?",
      answer:
        "Lorem ipsum dolor amet, consectetur adipiscing elit Lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="w-screen  text-center mb-20">
      <h2 className="text-[2rem] font-unbounded font-bold text-mainColor mb-14">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="flex flex-col gap-[4vh] items-center">
        <div className="flex flex-col gap-[4vh]">
          {faqs.map((faq) => (
            <FAQElement
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
