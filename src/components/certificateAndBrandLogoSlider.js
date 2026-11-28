import React from 'react'
import BrandLogoSlider from './brandLogoSlider'
import {MOBILE_BREAKPOINT} from "../config"
import Animate from './animate';
export default function CertificateAndBrandLogoSlider(props) {
  return (
    <>
        <div className="container lesserAdditionalPadding ">
            <div className="topContainer  ">
              <Animate><div className="shortHeading mainShortHeading mbBelowShortHeading">{props.shortHeading}</div></Animate>
              <Animate><div className="bigHeading heading  black mbHeading richText">{props.heading}</div></Animate>
              <Animate> <div className="desc marginBottom90">{props.description}</div></Animate>
            </div>
            <Animate><div className="logoSlider  ">
              {Array.isArray(props.brandLogoSlider) && props.brandLogoSlider.length > 0 && (
                <BrandLogoSlider brandLogoSlider={props.brandLogoSlider}/>
              )}
              {/* <div className="flexItems flexImage">
                <div className="image1"><img className="width-100"alt="img" src={props.image1}/></div>
                <div className="image2"><img className="width-100"alt="img" src={props.image2}/></div>
              </div> */}
              </div></Animate> 
        </div>
        <style jsx>{`
            .image1{
              padding-right: 10%;
            }
            @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
              .topContainer{
                text-align: center;
              }
              .image1{
                padding-right: 5%;
              }  
            }
        `}</style>
    </>
  )
}