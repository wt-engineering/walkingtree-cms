import React,{useRef} from 'react'
import Button from './button'
import {MOBILE_BREAKPOINT} from '../config'
import Animate from './animate';

export default function JobDesignation(props) {
    return (
        <>
            <div className="jobDesignationWrapper paddedContent">
                <div className="jobDesignation">
                    <div className="headings">
                        <h2 className="shortHeading mainShortHeading fadeUpAnimation">{props.shortHeading}</h2>
                        <h1 style={{animationDelay:"0.2s"}} className="designationHeading bigHeading fadeUpAnimation">{props.designation}</h1>
                    </div>
                    <div className="designationDetails flexItems">
                        <div className="left">
                            <h2 style={{animationDelay:"0.4s"}} className="leftHeading bigDescriptionLight grey fadeUpAnimation">{props.leftHeading}</h2>
                            <div style={{animationDelay:"0.6s"}} className="fadeUpAnimation">
                                <Button buttonText={props.applyButtonText} buttonType="rectangleWithArrow" textOnHover={props.applyButtonText} />
                            </div>
                        </div>
                        <div className="right">
                           <Animate><div className="rightDescription bigDescriptionLight grey" dangerouslySetInnerHTML={{ __html: props.rightDesc }}></div></Animate> 
                        </div>
                    </div>
                </div>
            </div>   
            <style jsx>{`
                .jobDesignation{
                    padding-top:19.3rem;
                    padding-bottom:6rem;
                    border-bottom:1px solid #707070;
                }
                .leftHeading{
                    margin-bottom:4.2rem;
                }
                .right{
                    width:47%;
                }
                .left{
                    width:53%;
                }
                .headings,.designationDetails{
                    padding-left:9.7rem;
                }
                .designationHeading{
                    margin-bottom:7.6rem;
                }
                .shortHeading{
                    margin-bottom:2.8rem;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .jobDesignation{
                        padding:10rem 1.2rem 4.9rem;
                    }
                    .headings,.designationDetails{
                        padding-left:0rem;
                        text-align:center;
                    }
                    .shortHeading{
                        margin-bottom:1.3rem;
                    }
                    .designationHeading{
                        margin-bottom:3rem;
                    }
                    .designationDetails{
                        display: block;
                    }
                    .right,.left{
                        width:100%;
                    }
                    .leftHeading{
                        font-size:1.2rem;
                        margin-bottom:1.4rem;
                    }
                    .left{
                        margin-bottom:6.4rem;
                    }
                }
            `}</style>
        </>
    )
}
