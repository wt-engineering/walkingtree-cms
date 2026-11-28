import React, {useRef} from "react";
import SingleText from "./singleText";
import QuestionAnswer from "./questionAnswer";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

function TwoTextAndOneImg(props) {
  const image = useRef();

  return (
    <>
      <div className="container">
        <div className="marginBottom125 firstText">
          <SingleText
            bigText={props.bigText}
            desc={props.desc}
          />
        </div>
        <Animate>
          <div ref={image} className="marginBottom125 singleImage">
            <Image height={539} width={1086}  alt="Image" className="img width-100" originalSrc={props.singleImage} />
          </div>
        </Animate>
        <div className="questionAnswer">
          <QuestionAnswer
            questions={props.questions}
            shortAnswer={props.shortAnswer}
            answer={props.answer}
          />
        </div>
      </div>
      <style jsx>{`
        .singleImage {
          padding-left: 12.29%;
          padding-right: 12.29%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .singleImage {
            padding-left: 12%;
            padding-right: 12%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT} px) {
          .singleImage {
            padding-left: 11%;
            padding-right: 11%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .firstText {
            text-align: left;
          }
          .singleImage {
            padding:0 9.7%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .singleImage {
            padding: 0 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default TwoTextAndOneImg;
