import React, { useRef } from "react";
import LongArrow from "./longArrow";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";
 
function TwoImagetxt(props) {
  const leftImageRef = useRef();
  const rightImageRef = useRef();
  const rightDescRef = useRef();  

  return (
    <>
      <div className="container">
        <div className="twoImage flexItems">
          <Animate>
            <div ref={leftImageRef} className="leftImage">
              <Image height={588} width={422} alt="Image" className="width-100" originalSrc={props.img1} />
            </div>
          </Animate>
          <div className="rightContent">
            <Animate>
              <div ref={rightImageRef}>
                <div className="marginBottom16 rightImage"><Image height={385} width={531} alt="Image" className="marginBottom16  width-100" originalSrc={props.img2}/></div>
                <div className="textAndArrow flexItems">
                  <div className="arrow">
                    <LongArrow
                      arrowLength="6px"
                      lineLength="10px"
                      transformX="3.3px"
                      transformY="1px"
                      arrowWidth="1px"
                      color="black"
                      direction="up"
                      marginTop="5px"
                    />
                  </div>
                {props.cmsRichContent == true && <div className="marginBottom16 text greyCaption" dangerouslySetInnerHTML={{__html:props.caption}}></div>}
                {!props.cmsRichContent  && <div className="marginBottom16 text greyCaption">{props.caption}</div>}
                </div>
              </div>
            </Animate>
            <Animate><div ref={rightDescRef} className="desc description black">{props.desc}</div></Animate>
          </div>
        </div>
      </div>
      <style jsx>{`
          .arrow {
            padding-bottom: 6px;
            padding-right: 8px;
          }
          .leftImage {
            width: 51.1%;
            padding-right: 9.23%;
            object-fit: contain;
          }
          .rightContent {
            width: 48.9%;
          }
          .twoImage {
            padding-left: 12.29%;
            padding-right: 12.29%;
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .leftImage {
              width: 50%;
              flex:1 1 60%;
              padding-right: 2.29%;
              object-fit: contain;
            }
            .rightContent {
              width: 50%;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .twoImage {
              display: block;
              padding-left: 5.6%;
              padding-right: 5.6%;
            }
            .leftImage {
              width: 100%;
              padding-right: 0;
              margin-bottom: 6.5rem;
            }
            .rightContent {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}

export default TwoImagetxt;
