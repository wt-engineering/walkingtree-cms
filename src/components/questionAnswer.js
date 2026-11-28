import React, {useRef} from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Animate from "./animate";

function QuestionAnswer(props) {
  const questions = useRef();
  const shortAnswer = useRef();
  const lastQuestion = useRef();
  const smallBoldText = useRef();

  return (
    <>
      <div className="container">
          <Animate><div ref={questions} className="marginBottom16 bold boldDescription">{props.questions}</div></Animate>
          <Animate><div ref={shortAnswer} className="textBold boldDescription">{props.shortAnswer}<span  className="desc description">{props.answer}</span></div></Animate>
          <Animate><div ref={lastQuestion} className="marginBottom16 lastQuestion boldDescription ">{props.lastQuestion}</div></Animate>
          <Animate><div ref={smallBoldText} className="lastAnswer boldDescription">{props.smallBoldText}<span className="desc description">{props.answers}</span></div></Animate>
      </div>
      <style jsx>{`
        .container {
          padding:0 23.8%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .container { 
            padding: 0 23%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .container { 
            padding: 0 20%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding: 0 11%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            padding: 0 8%;
          }
        }
      `}</style>
    </>
  );
}

export default QuestionAnswer;
