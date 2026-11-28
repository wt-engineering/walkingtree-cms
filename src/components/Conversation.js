import React,{ useRef } from 'react'
import Button from './button'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Image from './Image';
import Animate from './animate';

export default function Conversation(props) {
    const shortHeadingRef = useRef();
    const headingRef = useRef();
    const msgLineRef = useRef();
    const descRef = useRef();
    const buttonRef = useRef();
    const imageRef = useRef();


    return (
        <>
            <div className="conversation flexItems">
                <div className="left">
                <Animate><h2 ref={shortHeadingRef} className="marginBottom26 shortHeading mainShortHeading grey">{props.shortHeading}</h2> </Animate>
                <Animate><h1 ref={headingRef} className="marginBottom55 heading bigHeading black">{props.heading}</h1> </Animate>
                <Animate><p ref={msgLineRef} className="marginBottom55 msg bigDescription black">{props.msg}</p> </Animate>
                <Animate><p ref={descRef} className="marginBottom55 desc bigDescription black">{props.desc}</p> </Animate>
                <Animate><div ref={buttonRef} className="cta"><Button buttonText={props.buttonText} buttonType="rectangle" textOnHover="LEARN MORE"/></div> </Animate>
                </div>
                <Animate><div ref={imageRef} className="right"><Image  height={718} width={545} originalSrc={props.img} className="width-100" alt="Image"/></div></Animate>
            </div>   
            <style jsx>{`
                .conversation{
                    padding:0 7.6%;
                    align-items: flex-end;
                }
                .desc,.msg{
                    color:#000000;
                }
                .right{
                    width:44.6%;
                }
                .left{
                    width:55.4%;
                    padding-right: 9%;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .conversation{
                        display:block;
                        padding:0 0%;
                        height:100vh;
                        position:relative;
                    }
                    .right{
                        width:100%;
                        height:100%;
                    }
                    .left{
                        width:100%;
                        padding: 0px 15%;
                        position:absolute;
                        top:20%;
                        left:50%;
                        transform:translateX(-50%);
                        text-align:center;
                        z-index: 9;
                    }
                    .right img{
                        height:100%;
                        object-fit: cover;
                        object-position: center;
                    }
                    .heading,.msg,.desc{
                        color:#ffffff;                        
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .left{
                        padding: 0px 5.1rem;
                    }
                    .heading{
                        font-size:2.1rem;
                        line-height:2.8rem;
                    }
                    .msg,.desc{
                        font-size:1.7rem;
                        line-height:2.2rem;
                    }
                }
            `}</style>
        </>
    )
}
