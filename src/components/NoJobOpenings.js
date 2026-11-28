import React from 'react'
import Button from './button'
import {MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from '../config'
import { connect } from "react-redux";
import { setOpenNoJobOpeningsForm } from "../redux/actions";
import Image from "./Image"
import Animate from './animate';

function NoJobOpenings(props) {
    return (
        <>
            <div className="noJobOpenings lesserAdditionalPadding flexItems standardPaddingBottom">
                <div className="left">
                    <Animate><h1 className="heading black smallHeading mbHeading">{props.heading}</h1></Animate>
                    <Animate><p className="desc richText" dangerouslySetInnerHTML={{ __html: props.desc }}></p></Animate>
                    <Animate><div className="buttonWrapper ctaAbove"><Button href={props.link} buttonText={props.applyButtonText} buttonType="rectangle" textOnHover={props.applyButtonText} /></div></Animate>
                </div>
                <div className="right">
                    <Animate><Image  height={524} width={420} originalSrc={props.image} alt="Image" className="width-100"/></Animate>
                </div>
            </div>   
            <style jsx>{`
                .left{
                    width:61.4%;
                }
                .heading{
                    padding-right: 45%;
                }
                .desc{
                    padding-right: 10%;
                }
                .right{
                    width:38.6%;
                    padding-top: 4rem;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px){
                    .heading{
                        padding-right: 30%;
                    }  
                } 
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .noJobOpenings{
                        display:block;
                        padding:0 2.1rem 0;
                    }
                    .buttonWrapper{
                        text-align:center;
                    }
                    .left{
                        margin-bottom:13.2rem;
                    }
                    .left,.right{
                        width:100%;
                    }
                    .right{
                        padding:0;
                    }
                    .desc{
                        padding: 0 3%;
                        text-align:center;
                        color:#000000;
                        font-size:1.6rem;
                        letter-spacing:0.18px;
                        line-height:2.2rem;
                    }
                    .heading{
                        padding-right: 0%;
                        text-align:center;
                    }
                }
            `}</style>
        </>
    )
}
function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps, {setOpenNoJobOpeningsForm})(NoJobOpenings);