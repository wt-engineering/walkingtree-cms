import React,{useRef} from "react";
import LongArrow from "./longArrow";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Animate from "./animate";

export default function ThreeImagesWithText(props) {
  const rightImgMobile = useRef();
  const captionMobile = useRef();
  const leftImg = useRef();
  const arrow1 = useRef();
  const arrow2 = useRef();
  const imgDown = useRef();
  const imgDownText = useRef();
  const rightImg = useRef();
  const rightImgTab = useRef();
  const rightImgcaption = useRef();
  const rightImgCaptionTab = useRef();

  return (
    <>
      <div className="container">
        <div className="items flexItems">
          <div className="leftContent">
            <Animate>
              <div ref={rightImgMobile} className="showForMob rightImage">
                <div className="imgRightMobile"><img alt="Image" className="width-100" src={props.imgRight} /></div>
                <div ref={captionMobile} className="desc bigDescriptionLight">{props.captionRight}</div>
              </div>
            </Animate>
            <div className="leftImage">
              <Animate>
                <div ref={leftImg}><img alt="Image" className="width-100" src={props.imgLeft}/></div>
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
                      marginTop="0px"
                    />
                  </div>
                  {props.cmsRichContent == true && <div className="textOne" dangerouslySetInnerHTML={{__html:props.caption1Left}}></div>}
                  {!props.cmsRichContent && <div className="textOne" >{props.caption1Left}</div>}
                </div>
                <div ref={arrow2} className="forTab textAndArrow flexItems">
                  <div className="arrow ">
                    <LongArrow
                      arrowLength="5px"
                      lineLength="10px"
                      transformX="3.3px"
                      transformY="1px"
                      arrowWidth="1px"
                      color="black"
                      direction="down"
                      marginTop="10px"
                    />
                  </div>
                  {props.cmsRichContent == true &&<div className="textTwo thinCaption greyCaption" dangerouslySetInnerHTML={{__html: props.caption2Left}}></div>}
                  {!props.cmsRichContent &&<div className="textTwo thinCaption greyCaption">{props.caption2Left}</div>}
                </div>
              </Animate>
            </div>
            <div className="downImage">
              <Animate><div ref={imgDown}><img alt="Image" className="width-100" src={props.imgDown}/></div></Animate>
              {props.cmsRichContent== true && <Animate><div ref={imgDownText} className="onlyOnTablet textTwo centerImageTablet thinCaption" dangerouslySetInnerHTML={{__html:props.caption2Left}}></div></Animate>}
              {!props.cmsRichContent && <Animate><div ref={imgDownText} className="onlyOnTablet textTwo centerImageTablet thinCaption">{props.caption2Left}</div></Animate>}
            </div>
          </div>
          <div className="hideForMobile rightImage ">
            <Animate>
              <div className="imgRight" ref={rightImg}><img alt="Image" className="width-100" src={props.imgRight}/></div>
              <div ref={rightImgcaption} className="desc bigDescriptionLight">{props.captionRight}</div>
            </Animate>
          </div>
        </div>
        <div className="onlyOnTablet hideForMobile centerImageTablet">
          <Animate>
            <div ref={rightImgTab}><img alt="Image" className="tabSection width-100" src={props.imgRight}/></div>
            <div ref={rightImgCaptionTab} className="desc2 bigDescriptionLight alignCenter">{props.captionRight}</div>
          </Animate>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding-left: 12.29%;
          padding-right: 12.29%;
        }
        .onlyOnTablet {
          display: none;
        }
        .showForMob {
          display: none;
        }
        .desc2 {
         margin-top: 4.8rem;
        }
        .leftContent {
          width: 55%;
          flex-wrap: nowrap;
          padding-right:17%;
        }
        .rightImage {
          width: 43%;
        }
        .downImage {
          margin-top: 9rem;
        }
        .arrow {
          padding-right: 1.3rem;
        }
        .textAndArrow {
          margin-top: 1.4rem;
        }
        .imgRight {
          margin-bottom: 5.5rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .forTab {
            display: none;
          }
          .showForMob {
            display: none;
          }
          .container {
            padding: 0 0;
          }
          .centerImageTablet {
            margin-top: 1.5rem;
          }
          .tabSection {
            padding: 0 26rem;
          }
          .notShowOnTablet {
            display: none;
          }
          .onlyOnTablet {
            display: block;
            flex-direction: column;
          }
          .leftContent {
            display: flex;
            padding: 0 14.1% 6.1rem 15.3%;
            width: 100%;
          }
          .leftImage {
            padding-right: 2rem;
          }
          .downImage {
            margin-top: 0rem;
          }
          .rightImage {
            display: none;
          }
          .desc2 {
            padding: 0 25.3%;
          }
          .imgRight {
            margin-bottom: 4.5rem;
          }
        }

        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .items,
          .showForMob {
            display: block;
          }
          .forTab {
            display: flex;
          }
          .leftContent {
            display: block;
            padding: 0;
          }
          .onlyOnTablet {
            display: none;
          }
          .container {
            padding: 0 4.8%;
          }
          .rightImage {
            width: 100%;
          }
          .leftImage {
            width: 100%;
            padding-right: 0;
          }
          .downImage {
            width: 100%;
          }
          .desc {
            text-align: center;
            margin-bottom: 3.8rem;
            padding: 0 2%;
          }
          .textOne,.textTwo,.thinCaption {
            font-size: 1rem;
            line-height: 1.2rem;
            letter-spacing: -0.16px;
          }
          .textTwo {
            padding-bottom: 3.8rem;
          }
          .downImage {
            margin-top: 0rem;
          }
          .imgRightMobile {
            margin-bottom: 3.5rem;
          }
        }
      `}</style>
    </>
  );
}
