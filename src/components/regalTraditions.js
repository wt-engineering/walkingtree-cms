import React,{useRef} from 'react'
import Image from './Image'
import {MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT,MOBILE_BREAKPOINT} from "../config";
import Animate from './animate';

function RegalTraditions(props) {
 const leftContent = useRef();
 const shortHeading = useRef();
 const heading = useRef();
 const description = useRef();
 const rightImage = useRef();
 const leftImage = useRef();

  return (
    <>
        <div className="topContainer lesserAdditionalPadding">
            <div className="container flexItems ">
                <div ref={leftContent} className="leftContent hideForMobile"><Animate><Image height={524} width={420} alt="Image" originalSrc={props.img}/></Animate></div>
                <div className="rightContent ">
                    <div ref={heading} className="mbBelowShortHeading heading smallHeading  black richText">{props.heading}</div>
                    <div ref={shortHeading} className="shortHeading mainShortHeading mbHeading grey richText">{props.shortHeading}</div>
                    <div ref={description} className="">{props.description}</div>
                </div>
                <div className="leftContent showForMobile"><Animate><Image height={524} width={420} alt="Image" originalSrc={props.img}/></Animate></div>

            </div>
           {/* { <div className="bottomImageConatiner flexItems">
                <div ref={leftImage} className="leftImage"><Animate><Image height={357} width={420} alt="Image" originalSrc={props.bottomImg1}/></Animate></div>
                <div  ref={rightImage} className="rightImage"><Animate><Image height={524} width={420} alt="Image" originalSrc={props.bottomImg2}/></Animate></div>
            </div>} */}
       </div>
       <style jsx>{`
        .container{
            margin-right:-7.5%;
        }
        .leftContent {
            width:40%;
            padding-right:7.5%;
        }
        .rightContent{
            width:60%;
            padding-right:7.5%;
        }
        .bottomImageConatiner{
            align-items:flex-end;
            margin-right:-17%
        }
        .leftImage{
            width:50%;
            padding-right:17%;
        }
        .rightImage{
            width:50%;
            padding-right:17%;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px){
            .container{
                margin-right:-6%;
            }
            .leftContent {
                width:40%;
                padding-right:6%;
            }
            .rightContent{
                width:60%;
                padding-right:6%;
            } 
            .bottomImageConatiner{
                margin-right:-15%
            }
            .leftImage,.rightImage{
                padding-right:15%;
            }
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
            .container{
                margin-right:-6%;
            }
            .rightContent,.leftContent {
                padding-right:6%;
            } 
            .bottomImageConatiner{
                margin-right:-13%
            }
            .leftImage,.rightImage{
                padding-right:13%;
            }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px){
            .container{
                margin-right:0%;
                display: block;
                text-align:center;
            }
            .rightContent{
                padding-right:0%;
                width: 100%;
                margin-bottom:1.6rem
            }
            .leftContent {
                padding-right:0%;
                width: 100%;
                margin-bottom:1.6rem;
            }

            .bottomImageConatiner{
                margin-right:-9%
            }
            .leftImage,.rightImage{
                padding-right:9%;
            }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
            .bottomImageConatiner{
                margin-right:0%;
                display: block;
            }
            .leftImage,.rightImage{
                padding-right:0%;
                width:100%;
                margin-bottom: 2rem;
            }
            .rightContent{
                padding-right:0%;
                width: 100%;
                margin-bottom:0rem
            }
            .leftContent {
                padding-right:0%;
                width: 100%;
                margin-bottom:1.6rem;
            }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
            .rightContent{
                margin-bottom: 4rem
            }
        }
       `}</style>
    </>
  )
}

export default RegalTraditions