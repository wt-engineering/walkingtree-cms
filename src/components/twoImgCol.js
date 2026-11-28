import React, { useRef } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function TwoImgCol(props) {
  const twoImagesRef = useRef(null);
  const textSectionRef = useRef(null);
  
  return (
    <>
      <div className="twoImgCol">
        <Animate>
          <div className="twoImages flexItems marginBottom90" ref={twoImagesRef}>
            <div>
              <Image
                alt={"Image"} 
                originalSrc={props.img1} 
                width={418} 
                height={524} 
              />
            </div>
            <div>
              <Image
                alt={"Image"} 
                originalSrc={props.img2} 
                width={418} 
                height={524}
              />
            </div>
          </div>
        </Animate>
        <Animate>
          <div className="textSection alignCenter" ref={textSectionRef}>
            <div className="shortText mainShortHeading marginBottom26">{props.shortHeading}</div>
            <div className="desc bigDescription black">{props.desc}</div>
          </div>
        </Animate>
      </div>
      <style jsx>{`
        .twoImgCol {
          padding-left: 20%;
          padding-right: 20%;
        }
        .twoImages {
          margin-right: -2.6rem;
        }
        .twoImages div {
          padding-right: 2.6rem;
          width: 50%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .twoImgCol {
            padding:0 12.29%;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .twoImgCol {
            padding:0 9.7%;
          }
          .twoImages {
            margin-right: -2rem;
          }
          .twoImages div {
            padding-right: 2rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .twoImages {
            display: block;
            margin-right: 0rem;
          }
          .twoImgCol {
            padding-left: 5rem;
            padding-right: 5rem;
          }
          .twoImages div {
            width: 100%;
            padding-right: 0rem;
          }
          .twoImages div:nth-child(1) {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
