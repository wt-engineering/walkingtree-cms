import React,{ useRef } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Animate from "./animate";

function SingleText(props) {
 const text =useRef();
  return (
    <>
      <div className="container">
        <Animate><div ref={text} className="bigText moderatRegular font35">{props.bigText}<span className="desc description">{props.desc}</span></div></Animate>
      </div>
      <style jsx>{`
          .bigText {
            letter-spacing: 0.22px;
            line-height: 2.2rem;
          }
          .container {
            padding:0 23.8%;
          }
          @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
            .container {
              padding:0 22.8%;
            }
          }
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
            .container {
              padding:0 19%;
            }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .container {
              padding:0 8.5%;
            }
            .bigText {
              text-align: center;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .container {
              padding: 0 8%;
              text-align: left;
            }
            .bigText {
              font-size: 3.1rem;
              text-align: left;
            }
            .description {
              font-size: 2.1rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default SingleText;
