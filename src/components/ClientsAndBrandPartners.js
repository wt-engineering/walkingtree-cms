import React,{useRef} from 'react'
import{TABLET_LANDSCAPE_BREAKPOINT,MOBILE_BREAKPOINT,TABLET_BREAKPOINT} from "../config"
import Animate from './animate';
import Image from './Image';
function ClientsAndBrandPartners(props) {
    const shortHeadingRef = useRef();
    const mainHeadingRef = useRef();
    const descriptionRef = useRef();
    const images = useRef();
  return (
    <>
        <div className="container lesserAdditionalPadding">
            <div className="textContainer">
                <Animate><div ref={shortHeadingRef} className="shortHeading mainShortHeading mbBelowShortHeading">{props.shortHeading}</div></Animate>
                {!!props.cmsRichContent &&<Animate> <div className="bigHeading heading  black richText mbHeading" dangerouslySetInnerHTML={{__html:props.heading}}></div></Animate>}
                {!props.cmsRichContent &&<Animate> <div className="bigHeading heading  black richText mbHeading">{props.heading}</div></Animate>}
                <div className="flexItems containerText marginBottom90">
                    <div ref={descriptionRef} className="desc  grey richText">{props.description}</div>
                    <div className="rightText bigDescription black">{props.rightText}
                        {props.cmsRichContent ? <div className="greyCaption caption richText" dangerouslySetInnerHTML={{__html:props.caption}}></div> 
                        :
                        <div className="greyCaption caption richText">{props.caption}</div> 
                        }
                    </div>
                </div>
            </div>
            <div className="topContainer">
                <div  className="brandLogo flexItems">
                    {props.brandLogo.map((logo,index)=>{  
                        return (
                            <div key={index} ref={images} className="images marginBottom55 alignCenter">
                                <Animate>
                                    <Image loading="eager" bgColor="#fff" height={175} width={239} originalSrc={logo.img} alt="img" />
                                </Animate>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <style jsx>{`
            .brandLogo{
                flex-wrap: wrap;
                margin-right: -5%;
                align-items: center;
                justify-content: center; 
            }
            .caption{
                margin-top:1rem;
            }
            .images{
                width:25%;
                padding-right:4.9%;
            }
            .heading {
              padding-right:50%;
            }

            .desc{
                padding-right: 11%;
                width: 50%;
            }
            .rightText{
                padding-right: 11%;
                width: 50%;
            }
            
            .containerText{
              margin-right: -11%;
            }
            @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
                .images{
                    width:33.33%;
                } 
                .heading {
                    padding-right:0%;
                    text-align: center;
                }
                .desc,.rightText{
                    width: 100%;
                    text-align: center;
                    padding:0;
                }
                .shortHeading{
                    text-align: center;
                }
            }
            @media screen and (max-width: ${TABLET_BREAKPOINT}px){
                .containerText{
                    display: block;
                    margin-right: 0%;
                }
                .shortHeading{
                    text-align: center;
                }
                .rightText{
                    padding-right: 0%;
                }
                .desc,.rightText{
                    width: 100%;
                    text-align: center;
                }
                .desc{
                    margin-bottom:2.6rem;
                }
            }
            @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                .images{
                    width:50%;
                }
            }
        `}</style>
    </>
  )
}

export default ClientsAndBrandPartners