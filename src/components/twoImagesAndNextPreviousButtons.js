import React, {useRef} from "react";
import LongArrow from "./longArrow";
import NextAndPreviousButtonWithText from "../components/nextAndPreviousButtonWithText";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

function TwoImagesAndNextPreviousButtons(props) {
  const firstImg = useRef();
  const arrow1 = useRef();
  const arrow2 = useRef();
  const secondImg = useRef();
  const rightText = useRef();

  return (
    <>
      <div className="container">
        <div className="images flexItems">
          <div className="leftImage">
            <Animate>
              <div ref={firstImg}><Image height={357} width={420} alt="Image" className="firstImg width-100" originalSrc={props.firstImg}/></div>
              <div ref={arrow1} className="textAndArrow flexItems">
                <div className="arrow">
                  <LongArrow
                    arrowLength="5px"
                    lineLength="10px"
                    transformX="3.3px"
                    transformY="1px"
                    arrowWidth="1px"
                    color="black"
                    direction="up"
                    marginTop="5px"
                  />
                </div>
                {props.cmsRichContent==true &&<div className="textOne greyCaption" dangerouslySetInnerHTML={{__html:props.caption1}}></div>}
                {!props.cmsRichContent&&<div className="textOne greyCaption">{props.caption1}</div>}
              </div>
              <div ref={arrow2} className="textAndArrow flexItems">
                <div className="arrowRight">
                  <LongArrow
                    arrowLength="5px"
                    lineLength="9px"
                    transformX="3.3px"
                    transformY="1px"
                    arrowWidth="1px"
                    color="black"
                    direction="right"
                    marginTop="0px"
                  />
                </div>
                {props.cmsRichContent == true &&<div className="textTwo" dangerouslySetInnerHTML={{__html:props.caption2}}></div>}
                {!props.cmsRichContent &&<div className="textTwo">{ props.caption2}</div>}
              </div>
            </Animate>
          </div>
          <div className="rightImage">
            <Animate><div ref={secondImg} className="marginBottom55"><Image height={527} width={420} alt="Image" className="marginBottom55 secondImg width-100" originalSrc={props.secondImg}/></div></Animate>
            <Animate><div ref={rightText} className="rightText bigDescriptionLight">{props.rightText}</div></Animate>
          </div>
        </div>
         <NextAndPreviousButtonWithText/>   
      </div>
     
      <style jsx>{`
        .images {
          padding:0 12.29%;
          flex-wrap: wrap;
        }
        .rightImage {
          width: 44%;
        }
        .leftImage {
           width: 56%;
           padding-right: 15.2%;
        }
        .arrow {
          margin-right: 1.3rem;
          margin-top: 0.3rem;
        }
        .arrowRight {
          margin-right: 1.3rem;
          margin-top: 0.3rem;
        }
        .textAndArrow {
          margin-top: 1.3rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
         .images {
           padding: 0 4.5%;
           flex-wrap: wrap;
         }
         .leftImage{
            width: 50%;
            padding-right: 6.7%;
         }
         .rightImage {
            width: 50%;
         }    
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .images {
            display: block;
            pading:0 5.6%;
            margin-right:0;
          }
          .secondImg {
            margin-top: 4rem;
          }
          .rightImage {
            width: 100%;
            padding: 0 ;
          }
          .leftImage {
            width: 100%;
            padding-right:0;
          }
          .rightText {
            text-align: center;
            padding: 0 14%;
          }
        }
      `}</style>
    </>
  );
}

export default TwoImagesAndNextPreviousButtons;
