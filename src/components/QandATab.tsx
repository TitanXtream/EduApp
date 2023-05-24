import React from "react";
import { BsPersonCircle, BsFillSendFill } from "react-icons/bs";

const QandATab = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-start gap-x-[0.5em] p-[0.5em] bg-gray-50">
        <IntructorCard />
        <IntructorCard />
      </div>
      <div className="p-[0.5em] bg-gray-100 h-[3em]">
        <QuestionInputBar />
      </div>
    </div>
  );
};

export default QandATab;

const IntructorCard = () => {
  return (
    <button className="w-[4em] h-[4.5em] bg-white rounded-[0.3em] shadow-md hover:shadow-blue-500/30 flex flex-col justify-evenly items-center p-[0.2em]">
      <div className="text-[1.5em] text-gray-500">
        <BsPersonCircle />
      </div>
      <p className="text-[0.7em] leading-tight text-ellipsis overflow-hidden w-full">
        Stephen Griphit
      </p>
    </button>
  );
};

const QuestionInputBar = () => {
  return (
    <form className="bg-white w-full h-full rounded-lg relative">
      <input
        type="text"
        className="w-full h-full pl-[0.5em] pr-[3em] text-[16px] focus:outline-blue-400 outline-none rounded-md"
        placeholder="Ask your question to the experts"
      />
      <button
        className="absolute right-[0.5em] top-[50%] translate-y-[-50%] text-gray-400 hover:text-blue-600"
        type="submit"
      >
        <BsFillSendFill />
      </button>
    </form>
  );
};
