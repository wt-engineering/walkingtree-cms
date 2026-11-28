import React from 'react'
import Button from './button'
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from './Image';
import Animate from './animate';

export default function GloriousThought(props) {

    return (
        <>
            <div className="gloriousThought">
                <div className="lesserAdditionalPadding alignCenter gtWrapper">
                   <Animate><h2  className="marginBottom26 shortHeading mainShortHeading grey">{props.shortHeading}</h2></Animate>
                    {/* <h1 ref={headingRef} className="marginBottom90 heading smallHeading" dangerouslySetInnerHTML={{ __html: props.heading}}></h1> */}
                    <Animate><h1 className="marginBottom90 heading smallHeading black">{props.heading}</h1></Animate>
                    <div className="imageContainer positionRelative">
                    <Animate>
                        <Image height={539} width={1086}  originalSrc={props.bgImg} alt="Images" className="width-100"/>
                        <div className="contentOnImage positionAbsolute">
                            <h2 className="marginBottom26 shortHeadingIpad mainShortHeading grey">{props.shortHeading}</h2>
                            {/* <h1 ref={headingIpadRef} className="marginBottom26 headingIpad smallHeading" dangerouslySetInnerHTML={{ __html: props.heading}}></h1> */}
                            <h1 className="marginBottom26 headingIpad smallHeading">{props.heading}</h1>
                            <p className="marginBottom26 textOnImage bannerDescription">{props.textOnImg}</p>
                            <div className="cta">
                                <Button buttonText={props.buttonText} buttonType="rectangle" textOnHover="LEARN MORE" />
                            </div>
                        </div>
                        </Animate>
                    </div>
                </div>
                <Animate><div className="borderBottom"></div></Animate>
            </div>   
            <style jsx>{`
                
                .shortHeadingIpad,.headingIpad{
                    display:none;
                }
                .borderBottom{
                    width: auto;
                    height: 1px;
                    border-bottom: 1px solid #707070;;
                    margin-left: 6.6rem;
                    margin-right: 6.6rem;
                }
                .gtWrapper{
                    padding-bottom:9rem;
                }
                .contentOnImage{
                    width:100%;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                }
                .textOnImage{
                    color:#FCFAFA;
                    padding: 0 40%;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .textOnImage{
                        padding: 0 35%;
                    }
                    .shortHeading {
                      margin-bottom:2.2rem;
                  }
                  .gtWrapper{
                    padding-bottom:6rem;
                  }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .imageContainer{
                        height:100vh;
                    }
                    .imageContainer img{
                        height:100%;
                        object-fit:cover;
                        object-position:center;
                    }
                    .gtWrapper{
                        padding-left:0;
                        padding-right:0;
                    }
                    .shortHeading,.heading{
                        display:none;
                    }
                    .shortHeadingIpad,.headingIpad{
                        display:block;
                    }
                    .gtWrapper{
                        padding-bottom:0rem;
                    }
                    .borderBottom{
                        display:none;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .textOnImage{
                        padding: 0 19%;
                    }
                }
            `}</style>
        </>
    )
}
