import React from "react";

const QuestionAns = () => {
  return (
    <div className=" shadow-xl my-10 p-10 w-[60%] mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 "
      >
        <div className="collapse-title text-xl font-medium">
          Difference are the between Props vs state?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 "
      >
        <div className="collapse-title text-xl font-medium">
          How does useState work?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 "
      >
        <div className="collapse-title text-xl font-medium">
          What is Purpose of useEffect other than fetching data?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 "
      >
        <div className="collapse-title text-xl font-medium">
          How Does React work?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAns;
