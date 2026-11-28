 import React, { useRef } from "react";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function Products(props) {
  const shortHeadingRef = useRef();
  const imageRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();

  return (
    <>
      <div className="container">
        <div className="topSection flexItems">
          <div className="textArea">
            <Animate><div ref={shortHeadingRef} className="mainShortHeading marginBottom26">{props.shortHeading}</div></Animate>
            <Animate><div ref={headingRef} className="smallHeading marginBottom30">{props.smallHeading}</div></Animate>
            <Animate><div ref={descRef} className="description">{props.description}</div></Animate>
          </div>
          <div ref={imageRef} className="imageOne">
            <Animate><Image height={385} width={531} alt="image" className="img width-100" originalSrc={props.image} /></Animate>
          </div>
        </div>
      </div>
      <style jsx>{`
        .textArea {
          width:52.6%;
          padding-right: 10%;
        }
        .imageOne {
          width:47.4%;
        }
        .topSection {
          padding:0 12.29% 0 12.29%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .topSection {
            padding:0 9.9% 0 8%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .textArea {
            padding-right: 5%;
          }
          .topSection {
            padding:0 9.7%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .topSection {
            flex-direction: column-reverse;
            padding:0%;
          }
          .imageOne {
            width:100%;
            margin-bottom:2.9rem;
          }
          .textArea {
            width:100%;
            padding: 0% 3rem;;
          }
          .description {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
}
