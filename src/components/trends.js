import React from "react";
import LongArrow from "./longArrow";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT } from "../config";
import Image from "./Image"
import Animate from "./animate";

export default function Trends(props) {
  return (
    <>
        <div className="trendsSection lesserAdditionalPaddingLeft">
          <div className="firstTextSection">
              <Animate><div className="shortHeading mainShortHeading marginBottom18 richText">{props.shortHeading}</div></Animate>
              <Animate>
                {props.cmsRichContent ?
                  <div className="topText smallHeading marginBottom40 black richText" dangerouslySetInnerHTML={{__html: props.topText1}}></div>
                  :
                  <div className="topText smallHeading marginBottom40 black richText">{props.topText1}</div>
                }
                </Animate>
              <Animate>
                {props.cmsRichContent ?
                  <div className="topText smallHeading space90 black richText" dangerouslySetInnerHTML={{__html: props.topText2}}></div>
                  :
                  <div className="topText smallHeading space90 black richText">{props.topText2}</div>
                }  
              </Animate>
          </div>
          <Animate>
            <div className="imageContainer flexItems marginBottom50">
              <div className="image1 hideForMobile"><Image height={359} width={269} alt="image" originalSrc={props.img1}/></div>
              <div className="image2"><Image height={359} width={269} alt="image" originalSrc={props.img2}/></div>
              <div className="image3"><Image height={359} width={269} alt="image" originalSrc={props.img3}/></div>
              <div className="image1 showForMobile"><Image height={359} width={269} alt="image" originalSrc={props.img1}/></div>
              <div className="image4 hideForMobile"><Image height={359} width={399} alt="image" originalSrc={props.img4}/></div>
              <div className="image4 showForMobile"><Image height={359} width={269} alt="image" originalSrc={props.img4}/></div>

            </div>
          </Animate>
          <Animate>
            <div className="bottomText first flexItems marginBottom55 ">
              <div  className="leftText ">
                <div className="textAndArrow flexItems">
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
                      marginTopMobile="5px"
                    />
                  </div>
                {props.cmsRichContent == true && <div className="text leftCaption greyCaptionrichText" dangerouslySetInnerHTML ={{__html: props.caption1}}></div>}
                {!props.cmsRichContent && <div className="text greyCaption richText">{props.caption1}</div>}
                </div>
              </div>
              <div className="rightText">
                <div className="rightTextContainer">
                  <div className="quoteOne mbHeading">
                  <div className="rightTextOne bigDescription black  mbBelowShortHeading">{props.bottomRightText1}</div>
                  {props.cmsRichContent == true && <div className="greyCaption captionSpace richText" dangerouslySetInnerHTML={{__html: props.caption2}}></div>}
                  {!props.cmsRichContent && <div className="greyCaption  captionSpace richText">{props.caption2}</div>}
                  </div>
                  {props.cmsRichContent == true && <div className="text grey bigDescription black rightText mbBelowShortHeading" dangerouslySetInnerHTML={{__html: props.caption3}}></div>}
                  {!props.cmsRichContent && <div className= "text grey bigDescription black richText mbBelowShortHeading">{props.caption3}</div>}

                  {props.cmsRichContent == true && <div className="greyCaption richText" dangerouslySetInnerHTML={{__html: props.caption4}}></div>}
                  {!props.cmsRichContent && <div className="greyCaption richText">{props.caption4}</div>}
                  </div>
              </div>
            </div>
          </Animate>
          <Animate>

          </Animate>
        </div>
      <style jsx>{`
        .image1,.image2,.image3{
          width:23%;
          padding-right: 2rem;
        }
        .image4{
          width:32%;
        } 
        .text {
          padding-right: 12px;
        }
        .topText {
          padding-right: 47%;
        }
        .topText.two {
          padding-right: 53%;
        }
        .sliderImage img {
          height: 100%;
        }
       
        .textAndArrow .arrow {
          margin-right: 1rem;
        }
        .rightTextContainer {
          padding:0 15%;
        }
        .textAndArrow {
          padding-right: 20%;
        }
        .image1,.image2,.image3{
          width:24%;
          padding-right: 2rem;
        }
        .image4{
          width:33%;
        }
        
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .rightTextContainer {
            padding:0 10%;
          }
          .textAndArrow {
            padding-right: 8%;
          }
          .topText {
            padding-right: 30%;
          }
          .image1,.image2,.image3{
            width:24%;
            padding-right: 1.5rem;
          }
          .image4{
            width:33.33%;
          }
         
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .topText.two {
            padding-right: 30%;
          }
          .topText {
            padding-right: 18%;
          }
          .image1,.image2,.image3{
            width:23.8%;
            padding-right: 1.5rem;
          }
          .image4{
            width:33%;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .trendsSection {
            padding-left: 0%;
            overflow: hidden;
            width: auto;
          }
          .imageContainer{
            flex-wrap: wrap;
            padding:0 2.1rem;
            margin-right: -1rem;
            margin-bottom:1.5rem;
          }
          .image1,.image2,.image3,.image4{
            width:50%;
            padding-right: 1rem;
          }
          .quoteOne{
            margin:2.6rem 0;
          }
          .image1,.image2{
            margin-bottom: 1rem;
          }
          .captionSpace{
            margin-bottom:1.5rem
          }
          .circleWithRightArrowContainer {
            right: 1.8rem;
          }
          .circleWithLeftArrowContainer {
            left: 1.8rem;
          }
          .bottomText {
            display: block;
            padding: 0 2.1rem;
          }
          .leftText,
          .rightText {
            width: auto;
          }
          .leftText{
            margin-bottom:2.6rem;
          }
          .textAndArrow {
            padding-right: 0%;
          }
          .shortHeading {
            padding: 0 2.1rem;
          }
          .rightTextContainer {
            padding-right: 0%;
          }
          .topText {
            padding-right: 2.1rem;
            padding-left: 2.1rem;
          }
          .topText.two {
            padding-right: 2.1rem;
            padding-left: 2.1rem;
          }
          .textAndArrow .arrow {
            margin-right: 0.7rem;
          }
          .arrow{
            margin-bottom: -0.1rem;
          }
          .leftText{
            margin-bottom: 1.5rem;
          }
          .bottomText{
            margin-bottom: 0rem;
          }
          .rightTextContainer{
            padding-left:0%;
          }
        }
      `}</style>
    </>
  );
}
