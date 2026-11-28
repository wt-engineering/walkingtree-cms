import React, { useRef, useEffect } from "react";
import Button from "./button";
import {TABLET_BREAKPOINT, MOBILE_BREAKPOINT,scrollTriggerStartValue} from "../config";
import { gsap } from "gsap/dist/gsap";
import Image from "./Image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function DisplayCatalog(props){
  let index = 0
  let numberOfItemsToSlice = 3
  let rows = []
  let numberOfTimesToRunLoop = Math.ceil(props?.catalog?.length / 3)
  
  for(let i=0;i<numberOfTimesToRunLoop;i++){
    // rowRefs[i] = useRef(null);
    let items = props?.catalog.slice(index,index+numberOfItemsToSlice)
    index = index + items.length
    let centerSecondAndThird = false
    if(items[0] && items[1] && items[2]){
      if(items[0].imageType=="portrait" && items[1].imageType=="landscape" && items[2].imageType=="landscape"){
        centerSecondAndThird = true
      }
    }
    let landscapeItemToBeBottomAligned = false
    // if 2 out of 3 items as of type smallportrait or portrait, then landscape column should be bottom aligned
    if(items[0] && items[1] && items[2]){
    if(items[0].imageType=="landscape" && items[1].imageType=="smallPortrait" && items[2].imageType=="portrait"){
      landscapeItemToBeBottomAligned = true
      }
    }

    rows.push(
        <>
        <div className="row">  
          <div className="col col1">
            <div className={`colContent ${items[0].imageType=="smallPortrait"?"colAdditionalPadding":""} ${centerSecondAndThird?"verticalCenterContent":""}`}>
                <Image height={items[0].height} width={items[0].width}alt="img" originalSrc={items[0].img} className="width-100"/>
                {!items[0].cmsRichContent && <div className="richText caption1 greyCaption">{items[0].caption1}</div>}
               {items[0].cmsRichContent==true && <div className="caption1 greyCaption" dangerouslySetInnerHTML={{__html:items[0].caption1}}></div>}
            </div>
          </div>
          <div className="col col2">
              {!!items[1] &&
                <div className={`colContent ${items[1].imageType=="smallPortrait"?"colAdditionalPadding":""} ${centerSecondAndThird?"verticalCenterContent":""}`}>
                    <Image height={items[1].height} width={items[1].width} alt="img" originalSrc={items[1].img} className="width-100"/>
                    {!items[1].cmsRichContent && <div className="richText caption1 greyCaption" >{items[1].caption1}</div>}
                    {items[1].cmsRichContent==true && <div className="caption1 greyCaption" dangerouslySetInnerHTML={{__html:items[1].caption1}}></div>}
                </div>
              }
          </div>
          <div className="col col3">
              {!!items[2] &&
                <div className={`colContent ${items[2].imageType=="smallPortrait"?"colAdditionalPadding":""} ${centerSecondAndThird?"verticalCenterContent ":""}`}>
                  <Image height={items[2].height} width={items[2].width} alt="img" originalSrc={items[2].img} className="width-100"/>
                  {!items[2].cmsRichContent && <div className="richText caption1 greyCaption">{items[2].caption1}</div>}
                  {items[2].cmsRichContent==true && <div className="caption1 greyCaption" dangerouslySetInnerHTML={{__html:items[1].caption1}}></div>}
                </div>
              }
          </div>
        </div>
        <style jsx>{`
          .row{
            display:flex;
          }
          .col{
            width:25%;
            flex:1 1 100%;
          }
          .col1{
            margin-right:15%;
          }
          .col2{
            margin-right:10%;
          }
          .col.additionalPaddingTop{
            padding-top:3rem;
          }
          .colAdditionalPadding{
            padding-right:16.72%;
          }
          .verticalCenterContent{
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
          }
          .bottomContent{
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
          }
          .greyCaption div p{
            margin-bottom:0rem;
          }
          
         @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .col{
            width:27%;
            flex:1 1 100%;
          }
          .col1{
            margin-right:3.3rem;
          }
          .col2{
            margin-right:3.2rem;
          }
          .colAdditionalPadding{
            padding-right:0;
          }
         }
         @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
           .row {
             display: block;
           }
           .col{
            width:100%;
            flex:1 1 100%;
           }
         }
        `}</style>
        </>
    )
  }

  
  return (
    <>
      <div className="wrapper">
        {rows.map((row,i)=>{
          return (
            <div className="row" key={`products_row_${i}`}>
              {row}
            </div>
          )
        })}  
      </div>
      <style jsx>{`
        .wrapper .row:not(:first-child){
          margin-top:8.5rem;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .wrapper .row:not(:first-child){
            margin-top:9.4rem;
          }
        }
      `}</style>
    </>
  )
}

function ProductCatalog(props) {
  const buttonRef = useRef();
  const imageMobile1Refs = useRef();
  const imageMobile2Refs = useRef();
  const imageMobile3Refs = useRef();
  const imageMobile4Refs = useRef();
  const imageMobile5Refs = useRef();
  
  useEffect(()=>{
      const animationT17 = gsap.timeline();
      ScrollTrigger.create({
        trigger: buttonRef.current,
        animation: animationT17,
        start:`top ${scrollTriggerStartValue}`,
      });
      animationT17.from(buttonRef.current, {
        opacity:0,
        y:30,
      });
      animationT17.to(buttonRef.current, {
        opacity:1,
        y:0,
      });

      const animationT18 = gsap.timeline();
      ScrollTrigger.create({
        trigger: imageMobile1Refs.current,
        animation: animationT18,
        start:`top ${scrollTriggerStartValue}`,
      });
      animationT18.from(imageMobile1Refs.current, {
        opacity:0,
        y:30,
      });
      animationT18.to(imageMobile1Refs.current, {
        opacity:1,
        y:0,
      });

      const animationT19 = gsap.timeline();
      ScrollTrigger.create({
        trigger: imageMobile2Refs.current,
        animation: animationT19,
        start:`top ${scrollTriggerStartValue}`,
      });
      animationT19.from(imageMobile2Refs.current, {
        opacity:0,
        y:30,
      });
      animationT19.to(imageMobile2Refs.current, {
        opacity:1,
        y:0,
      });

      const animationT1 = gsap.timeline();
      ScrollTrigger.create({
        trigger: imageMobile3Refs.current,
        animation: animationT1,
        start:`top ${scrollTriggerStartValue}`,
      });
      animationT1.from(imageMobile3Refs.current, {
        opacity:0,
        y:30,
      });
      animationT1.to(imageMobile3Refs.current, {
        opacity:1,
        y:0,
      });

      const animationT2 = gsap.timeline();
      ScrollTrigger.create({
        trigger: imageMobile4Refs.current,
        animation: animationT2,
        start:`top ${scrollTriggerStartValue}`,
      });
      animationT2.from(imageMobile4Refs.current, {
        opacity:0,
        y:30,
      });
      animationT2.to(imageMobile4Refs.current, {
        opacity:1,
        y:0,
      });

      const animationT3 = gsap.timeline();
      ScrollTrigger.create({
        trigger: imageMobile5Refs.current,
        animation: animationT3,
        start:`top ${scrollTriggerStartValue}`,
      });
      animationT3.from(imageMobile5Refs.current, {
        opacity:0,
        y:30,
      });
      animationT3.to(imageMobile5Refs.current, {
        opacity:1,
        y:0,
      });
  },[])
  return (
    <>
      <div className="container">
        <div className="hideForMobile" ref={imageMobile2Refs}>{DisplayCatalog(props)}</div>
        <div className="showForMobile">
          {props.mobileImages.map((mobileImages,index)=>{
              return (
                <div key={index} className="imagesForMobile">
                  <div ref={imageMobile1Refs} className="image">
                      <div className="marginBottom7"><Image width={mobileImages.width} height={mobileImages.height} alt="Image" className="mobileImage width-100" originalSrc={mobileImages.img}/></div>
                      {props.cmsRichContent == true &&<div ref={imageMobile5Refs} className="imgCaptionblack greyCaption" dangerouslySetInnerHTML={{__html:mobileImages.caption1}}></div>}
                      {!props.cmsRichContent && <div className="imgCaptionblack greyCaption" >{mobileImages.caption1}</div>}
                  </div>
                </div>
              )
            })}
        </div>
        <div ref={buttonRef} className="button1 alignCenter">
          <Button
            buttonText={props.buttonText}
            textOnHover={props.buttonTextOnHover}
            buttonType="rectangle"
          />
        </div>
      </div>
      <style jsx>{`
        .button1 {
          margin-top:9rem;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .button1 {
            margin-top:4rem;
          }
          .imagesForMobile {
            padding: 0;
          }
          .image{
            margin-bottom: 5rem;
          }
          .image div:last-child {
            margin-bottom:0;
          }
        }
      `}</style>
    </>
  );
}

export default ProductCatalog;
