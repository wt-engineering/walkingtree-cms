import React from "react";
import { MOBILE_BREAKPOINT } from "../config";

export default function longArrow(props) {

  let direction;
  if (props.direction === "up") {
    direction = "270deg";
  } else if (props.direction === "down") {
    direction = "90deg";
  } else if (props.direction === "right") {
    direction = "0deg";
  } else if (props.direction === "left") {
    direction = "180deg";
  } else if (props.direction === "top-right") {
    direction = "-45deg";
  } else if (props.direction === "bottom-left") {
    direction = "135deg";
  }else if(props.direction=="take-off"){
    direction = "30deg"
  }
  return (
    <>
      <span className="longArrow">
        <span className={`long-arrow-right`}
        ></span>
      </span>
      <style jsx>{`
        .long-arrow-right,
        .long-arrow-left {
          display: block;
          margin: auto auto;
          width: ${props.arrowLength};
          height: ${props.arrowLength};
          border-top: ${props.arrowWidth} solid ${props.color};
          border-left: ${props.arrowWidth} solid ${props.color};
        }
        .long-arrow-right:hover,
        .long-arrow-left:hover {
          border-top: ${props.arrowWidth} solid ${props.colorHover};
          border-left: ${props.arrowWidth} solid ${props.colorHover};
        }
        .long-arrow-right {
          transform: rotate(135deg);
          margin:${props.reqMargin};
        }
        .long-arrow-left {
          transform: rotate(-45deg);
        }
        .long-arrow-right::after,
        .long-arrow-left::after {
          content: "";
          display: block;
          width: ${props.arrowWidth};
          height: ${props.lineLength};
          background-color: ${props.color};
          transform: rotate(-45deg)
            translate(${props.transformX}, ${props.transformY});
          left: 0;
          top: 0;
        }
        .long-arrow-right::after,
        .long-arrow-left::after {
          background-color: ${props.colorHover};
        }
        .longArrow {
          display: inline-block;
          transform: rotate(${direction});
          margin-top: ${props.marginTop};
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .long-arrow-right,
          .long-arrow-left {
            border-top: ${props.arrowWidth} solid
              ${!!props.colorMobile ? props.colorMobile : props.color};
            border-left: ${props.arrowWidth} solid
              ${!!props.colorMobile ? props.colorMobile : props.color};
          }
          .long-arrow-right::after,
          .long-arrow-left::after {
            background-color: ${!!props.colorMobile
              ? props.colorMobile
              : props.color};
          }
          .longArrow {
            margin-top: ${!!props.marginTopMobile?props.marginTopMobile:props.marginTop};
          }
        }
      `}</style>
    </>
  );
}
