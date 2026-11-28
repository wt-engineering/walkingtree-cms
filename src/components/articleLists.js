import React from "react";
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,lineAnimationTiming} from "../config";
import Animate from "./animate";
import Link from "next/link";
import Image from "./Image";
import {useRouter} from "next/router"
export default function ArticleLists(props) {
  let router = useRouter()
  return (
    <>
     <Link legacyBehavior href={`${props.article.link}`}>
      <a className="articleListItem ">
        <div className="marginBottom55 imageWithText">
          <Animate>
            <div  className="image">
                <Image height={527} width={420}  alt="Image" className="width-100" originalSrc={props.article.image}/>
            </div>
          </Animate>
        </div>
        <Animate><h2  className="mbBelowShortHeading heading smallHeading black">{props.article.excerpt}</h2></Animate>
        <Animate><div className="mbBelowShortHeading description  grey">{props.article.description}</div></Animate>
         <div className="shortHeadingReadOn readMoreButton moderatRegular font15 grey cursorPointer">{props.article.label}</div>
      </a>
      </Link>
      <style jsx>{`
        .shortHeadingReadOn,.shortHeadingReadOnInside {
          text-decoration: none; 
        }
        .contentInsideImage{
          display:flex;
          align-items:center;
          justify-content: center;
        }
        a{
          color:#808285;
          text-decoration: none;
        }
        .exerptInsideImage {
          margin-bottom: 0.4rem;
        }
        .centerText {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          justify-content: center;
          align-items:center;
        }
        .exerptInsideImage {
          margin-bottom: 0.4rem;
        }
        .labelInsideImage{
          padding-left: 1.7rem;
        }
        @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
          
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .exerptInsideImage {
            margin-bottom: 0.8rem;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .heading {
            margin-right: 0rem;
            margin-bottom: 3.5rem;
          }
          .desc {
            margin-right: 0rem;
            font-size: 1.7rem;
            margin-bottom: 2.1rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .heading {
            margin-right: 0rem;
            margin-bottom: 1.2rem;
          }
          .heading, .desc, .shortHeadingReadOn {
            display: block;
          }
          .labelInsideImage{
            padding-left: 0;
          }
          .exerptInsideImage {
            margin-bottom: 0.7rem;
          }
        }
      `}</style>
    </>
  );
}

