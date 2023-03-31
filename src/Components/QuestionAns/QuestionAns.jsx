import React from "react";

const QuestionAns = () => {
  return (
    <div className=" shadow-xl my-10 p-10 lg:w-[60%] mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 "
      >
        <div className="collapse-title text-xl font-medium">
          Difference are the between Props vs state?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-semibold">Props</span>: Props are arguments
            that is passed to another components by using HTML attributes. Props
            are read only it can not be changed.
          </p>
          <p>
            <span className="font-semibold">State</span>: State is an object
            that represents the current state of a component and can be changed
            or manipulated by time.
          </p>
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
          <p>
            <span className="font-semibold">useState</span> is a function that
            take a augments as a initial value of a state. It returns an array
            with two elements state variable and setState function. When
            setState function parameter change it stored the value to state
            variable.
          </p>
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
          <p>
            The purpose of useEffect other than fetching data is to handle side
            effects in functional components.By using this function we re-render
            a components
          </p>
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
          <p>
            First of all React create a virtual DOM. If the DOM elements change
            then react compare to the previous DOM and find the changes and
            update it to the ui thats how react work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAns;
