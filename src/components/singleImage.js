import React,{useRef} from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

function SingleImage(props) {
  const image = useRef();
  return (
    <>
      <Animate>
        <div ref={image} className="singleImage">
          <Image height={props.height} width={props.width} alt="Image" className="img width-100" originalSrc={props.singleImage} />
        </div>
      </Animate>
      <style jsx>{`
        .singleImage {
          padding: 0 35.4%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          .singleImage {
            padding: 0 33.4%;
          }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .singleImage {
            padding: 0 30.4%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .singleImage {
            padding: 0 23.9%
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .singleImage {
            padding: 0 4.8%;
          }
        }
      `}</style>
    </>
  );
}

export default SingleImage;
