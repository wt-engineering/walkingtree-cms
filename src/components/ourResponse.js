import React, { useRef } from "react";
import { TABLET_BREAKPOINT, MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Animate from "./animate";
import Image from "./Image";

function OurResponse(props) {
  const headingRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();

  return (
    <>
      <div className="container flexItems lesserAdditionalPadding">
        <div className="textArea">
          <Animate><div ref={headingRef} className="smallHeading marginBottom16 black">{props.smallHeading}</div></Animate>
          <Animate><div ref={descRef} className="desc bigDescription black">{props.description}</div></Animate>
        </div>
        <div ref={imageRef} className="image">
          <Animate><Image height={486} width={365} alt="Image" className="img width-100" originalSrc={props.image} /></Animate>
        </div>
      </div>
      <style jsx>{`
        .container {
          align-items: center;
        }
        .textArea {
          width:67.5%;
          padding-right: 26%;
        }
        .image {
          width:32.5%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .textArea {
            padding-right: 18%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .container {
            padding-left:9.7%;
            padding-right:9.7%;
          }
          .smallHeading {
            margin-bottom: 2.4rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .container {
            flex-direction: column-reverse;
            padding:0 2.1rem;
          }
          .image {
            width:100%;
            margin-bottom:2.9rem;
          }
          .textArea {
            width:100%;
            padding: 0 5%;
          }
          .smallHeading {
            margin-bottom: 2.1rem;
          }
          .desc {
            font-size: 1.6rem;
            line-height:2.2rem;
          }
        }
      `}</style>
    </>
  );
}

export default OurResponse;
