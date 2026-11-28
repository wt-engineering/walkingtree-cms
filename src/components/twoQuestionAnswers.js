import React from "react";
import QuestionAnswer from "./questionAnswer";

export default function TwoQuestionAnswers(props) {
  return (
    <>
      <div className="marginBottom90 firstText">
        <QuestionAnswer
          questions={props.questions}
          shortAnswer={props.shortAnswer}
          answer={props.answer}
        />
      </div>
      <div className="secondText">
        <QuestionAnswer
          lastQuestion={props.lastQuestion}
          smallBoldText={props.smallBoldText}
          answers={props.answers}      
        />
      </div>
    </>
  );
}
