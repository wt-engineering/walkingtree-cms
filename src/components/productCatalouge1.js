import React, { useRef } from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from "../config";
import Image from "./Image";
import Animate from "./animate";

export default function ProductCatalouge(props) {
  const shortHeadingRef = useRef();
  const rightImageRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();

  return (
    <>
      <div className="container">
          <div className="textSection lesserAdditionalPadding">
            <div className="content flexItems">
              <div className="textContent">
                <Animate><div ref={shortHeadingRef} className="marginBottom26 shortText mainShortHeading">{props.shortHeading}</div></Animate>
                {props.cmsRichContent== true && <Animate><h1 ref={headingRef} className="marginBottom26 topText1 smallHeading black">{props.topText1_1}<span className="lpItalic"> {props.topText1_2} </span>{props.topText1_3}<span className="lpItalic"> {props.topText1_4} </span>{props.topText1_5}</h1></Animate>}
                {!props.cmsRichContent &&  <Animate><h1 ref={headingRef} className="marginBottom26 topText1 smallHeading black">{props.topText1}</h1></Animate>}
                <Animate><p ref={descRef} className="text2 description">{props.text2}</p></Animate>
              </div>
              <div ref={rightImageRef} className="landscapeImage forMobile">
                <Animate>
                  <Image height={229} width={279} alt="Image" className="rightImage width-100" originalSrc={props.img}/>
                  {props.cmsRichContent == true &&<p className=" imgCaptionblack greyCaption" dangerouslySetInnerHTML={{ __html: props.caption }}></p>}
                  {!props.cmsRichContent &&<p className="imgCaptionblack greyCaption richText">{props.caption}</p>}
                </Animate>
                {/* {props.cmsRichContent == true &&<p className="showForMobile imgCaptionblack greyCaption" dangerouslySetInnerHTML={{ __html: props.captionMobile }}></p>}
                {!props.cmsRichContent &&<p className="showForMobile imgCaptionblack greyCaption richText">{props.captionMobile}</p>} */}
              </div>
            </div>
          </div>
      </div>
      <style jsx>{`
        .landscapeImage {
          width: 25.3%;
        }
        .textContent{
          width:74.7%;
          padding-right: 15%;
        }
        
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .content{
            align-items: center;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .landscapeImage {
            width: 0%;
            display: none;
          }
          .textContent{
            width:100%;
            padding-right: 6%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .content {
            display: block;
          }
          .captions {
            display: block;
          }
          .textContent {
            padding:0 3rem;
            margin-bottom: 3.9rem;
          }
          .text2 {
            font-size: 1.4rem;
            margin-bottom: 6rem;
            margin-right: 0rem;
          }
          .rightImage {
            padding-left: 0;
            padding-top: 0;
            width: 100%;
          }
          .firstImages,
          .secondThree,
          .Three {
            display: block;
          }
          .firstImages {
            padding-top: 0rem;
          }
          .imgCaptiongreyMobile {
            font-size: 1rem;
          }
          .imgCaptionblackMobile {
            font-size: 1rem;
            padding-right: 1rem;
            padding-bottom: 4.1rem;
          }
          .button1 {
            margin-left: 23%;
            padding-top: 0;
          }
        }
      `}</style>
    </>
  );
}
