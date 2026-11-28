import React,{useRef} from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

function BigImageAndText(props) {
  const image= useRef();

  return (
    <>
      <div className="container">
        <Animate><div ref={image} className="marginBottom55 image"><Image height={539} width={1086} alt="Image" className="img width-100" originalSrc={props.singleImage} /> </div></Animate>
        <Animate>
          <div className="textArea alignCenter">
            <div className="shortHeading mainShortHeading mbHeading">{props.heading}</div>
            <div className="description desc">{props.desc}</div>
          </div>
        </Animate>
      </div>
      <style jsx>{`
          .container {
            padding-right: 12.29%;
            padding-left: 12.29%;
          }
          .desc{
            padding: 0 10%;
          }
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
            .container {
              padding:0 9%;
           }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .container {
              padding: 0 4.5%;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .container {
              width: 100%;
              padding: 0;
            }
          }
        `}
      </style>
    </>
  );
}

export default BigImageAndText;
