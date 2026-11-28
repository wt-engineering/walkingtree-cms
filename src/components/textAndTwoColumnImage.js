import React,{useRef} from "react";
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function TextAndTwoColumnImage(props) {  
  const shortHeading=useRef(null)
  const topText1=useRef(null)
  const topText2=useRef(null)
  const twoColImage=useRef(null)
  const bottomText=useRef(null)
 
  return (
    <>
      <div className="textAndTwoColumnImage alignCenter">
        <Animate><h2 ref={shortHeading} className="marginBottom26 shortHeading mainShortHeading">{props.shortHeading}</h2></Animate>
        {props.cmsRichContent==false && <Animate><h1 ref={topText1} className="marginBottom55 topText1 smallHeading black">{props.topText1}</h1></Animate>}
        {props.cmsRichContent==true && <Animate><h1 ref={topText1} className="marginBottom55 topText1 smallHeading black" dangerouslySetInnerHTML={{__html:props.topText1}}></h1></Animate>}
        <Animate><p ref={topText2} className="marginBottom90 topText2 bigDescription grey">{props.topText2}</p></Animate>
        {!!props.img1 && !!props.img2 &&
          <Animate>
            <div ref={twoColImage} className="marginBottom90 twoColImage">
              <div><Image height={524} width={418} alt="Image 1" className="width-100" originalSrc={props.img1}/></div>
              <div><Image height={524} width={418} alt="Image 2" className="width-100" originalSrc={props.img2}/></div>
            </div>
          </Animate>
        }
        {props.bottomText &&
          <Animate><div ref={bottomText} className="bottomText description black">{props.bottomText}</div></Animate>
        }
      </div>
      <style jsx>{`
        .lastChild{
          transform:translateY(10px);
        }
        .textAndTwoColumnImage {
          padding: 0 20.3%;
        }
        .twoColImage {
          display: flex;
          margin-right: -2.4rem;
          transform:translateY(10px);
        }
        .twoColImage div {
          width: 50%;
          padding-right: 2.4rem;
        }
        .topText2 {
          padding: 0 2%;
        }
        .bottomText {
          padding: 0 8%;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .textAndTwoColumnImage {
            padding: 0 9.7%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .textAndTwoColumnImage {
            padding: 0 2.5rem ;
          }
          .topText2 {
            padding: 0 6%;
          }
          .twoColImage {
            display: block;
            margin-right: 0rem;
          }
          .twoColImage div {
            width: 100%;
            padding-right: 0rem;
            margin-bottom: 1.6rem;
          }
          .twoColImage div:last-child {
            margin-bottom: 0rem;
          }
          .bottomText {
            padding: 0 2%;
          }
        }
      `}</style>
    </>
  )
}
