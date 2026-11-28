import React from 'react'
import {MOBILE_BREAKPOINT,} from '../config'
import Animate from './animate'

export default function JobHeadingAndPoints(props) {
    return (
        <>
            <div className="jobHeadingAndPointsWrapper paddedContent">
                <div className="jobHeadingAndPoints">
                    <div className="flexItems flexbox">
                        <div className="left alignCenter ">
                             <h2 className="mainShortHeading heading">{props.heading}</h2>
                        </div>
                        <div className="right">
                           {!props.cmsRichContent && <div  className="rightDescription description">{props.points}</div>}
                           {props.cmsRichContent==true && <div  className="rightDescription description" dangerouslySetInnerHTML={{ __html: props.points }}></div>}
                        </div>
                    </div>
                    {!!props.signatureOf && 
                        <div  className="mainShortHeading signature hideForMobile">{props.signatureOf}</div>
                    }
                </div>
            </div>   
            <style jsx>{`
                .jobHeadingAndPoints{
                    padding-top:${!!props.paddingTop ? props.paddingTop : "6rem"};
                    padding-bottom:${!!props.paddingBottom ? props.paddingBottom : "4rem"};
                    border-bottom:1px solid #707070;
                    border-top:${props.borderTop?"1px solid #707070":"none"}
                }
                .heading,.signature{
                    color:#414042;
                }
                .signature{
                    margin-top:5.1rem;
                    padding-left:17%;
                }
                .left{
                    width:44%;
                }
                .right{
                    width:56%;
                    padding-right: 4%;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .flexbox{
                        display:block;
                    }
                    .left{
                        text-align:left;
                        margin-bottom:1rem;
                    }
                    .left,.right{
                        width:100%;
                    }
                    .jobHeadingAndPoints{
                        padding-top:${!!props.paddingTopMobile ? props.paddingTopMobile : "2.7rem"};
                        padding-bottom:${!!props.paddingBottomMobile ? props.paddingBottomMobile : "3rem"};
                    }
                }
            `}</style>
        </>
    )
}