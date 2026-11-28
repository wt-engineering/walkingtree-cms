import React from 'react'
import Image from './Image'
import {MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT,MEDIUM_BREAKPOINT} from "../config"
import Animate from './animate'


function TextAndGridImages(props) {
  return (
    <>
        <div className="container flexItems lesserAdditionalPadding">
            <div className="textContent">
                <Animate><div className="smallHeading heading marginBottom12 black">{props.heading}</div></Animate>
                <Animate><div className="mainShortHeading shortHeading mbHeading">{props.shortHeading}</div></Animate>
                <Animate><div className="description desc ">{props.description}</div></Animate>
            </div>
            <div className="imageContainer flexItems">
                <div className="images">
                    <div className="image1"><Animate> <Image height={206} width={259} originalSrc={props.imageTop}  alt="image"/></Animate></div>
                    <div className="image2"> <Animate><Image height={345} width={259} alt="image" originalSrc={props.imageBottom} src={props.imageBottom} /></Animate></div>
                </div>
                <div className="imageRight">
                    {/* <div className="width-100"><img className="width-100" alt="Image" src={props.imageRight} /></div> */}
                    <div className=""><Animate><Image alt="Image" originalSrc={props.imageRight} height={563} width={321} /></Animate></div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .container{
               align-items:flex-end; 
            }
            .imageRight{
                width:100%;
                object-fit:cover;
            }
            .textContent,.imageContainer.imageContainer {
                width:50%;
            }
            .shortHeading{
                padding-right: 35%;
            }
            .textContent{
                padding-right: 10%;
            }
            .images{
                padding-right:1rem;
                width:83%;  
            }
            .image1{
                padding-bottom:1rem;
            }
            @media screen and (max-width: ${TABLET_BREAKPOINT}px){
               .container{
                   display: block;
               } 
               .textContent,.imageContainer.imageContainer {
                    width:100%;
                    text-align: center;
                }
                .shortHeading{
                    padding-right: 0%;
                    margin-bottom: 1.5rem;
                }   
                .desc{
                    margin-bottom: 4rem;
                }
                .textContent{
                    padding-right: 0%;
                }
            }

        `}</style>
    </>
  )
}

export default TextAndGridImages