import React from 'react'
import Link from 'next/link'
import {MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT} from '../config'
import { connect } from "react-redux";
import { setMenuBarShow, setNavShow,setHeroImageLoaded } from "../redux/actions";
import Loader from './loader';
import { useRouter } from 'next/router'

function Navbar(props) {
    const router = useRouter()
    return (
        <>
            <div className={`navBar paddedContent positionRelative flexItems ${props.background?"bgActive":""}  ${props.common.menuShow?"showMenuBar":"hideMenuBar"}`}>
                <div onClick={()=>props.setMenuBarShow(true)} className="leftMenuBar cursorPointer">
                    <div className="lineOne"></div>
                    <div className="lineTwo"></div>
                </div>
                <Link href="/">

                    <div className="middleLogo positionAbsolute color font24 cursorPointer">
                        <div>{props.background? <img alt="Logo" className="width-100" src="/images/logoDark.png"/>: <img alt="Logo" className="width-100" src="/images/logoLight.png"/>}</div>
                    </div>

                </Link>
                <div className="rightMenu bannerDescription color">
                    <div><Link
                        href="/our-story"
                        className={`color ${props.background?"underlineGreyLR":"underlineWhiteLR"} ${router?.pathname == "/our-story"?"active":""}` }>Our Story</Link></div>
                    <div><Link
                        href="/contact-us"
                        className={`color ${props.background?"underlineGreyLR":"underlineWhiteLR"} ${router?.pathname == "/contact-us"?"active":""}`}>Contact Us</Link></div>
                </div>
            </div>
            <style jsx>{`
                .navBar{
                    background:transparent;
                    height:8rem;
                    justify-content:space-between;
                    align-items:center;
                    background-blend-mode: luminosity;
                    transition:all 0.3s ease-out;
                }
                .leftMenuBar{
                    padding: 2rem;
                    margin-left: -2rem;
                }
                .bgActive.navBar{
                    background: #d5e4eeeb;
                    transition:all 0.3s ease-out;
                }
                .bgActive .color{
                    color:#414042;
                }
                .color{
                    color:#ffffff;
                }
                .leftMenuBar div{
                    width:21px;
                    height:2px;
                    background:#ffffff;
                }
                .bgActive .leftMenuBar div{
                    background:#414042;
                }
                .lineOne{
                    margin-bottom:0.7rem;
                }
                .linetwo{
                    
                }
                .showMenuBar .lineOne{
                    animation:menuBarLineOneAnimation 0.5s linear forwards;
                }
                .showMenuBar .lineTwo{
                    animation:menuBarLineTwoAnimation 0.5s linear forwards;
                }
                .rightMenu div{
                    margin-right:3.2rem;
                    cursor:pointer;
                }
                .rightMenu div a{
                    text-decoration:none;
                }
                .rightMenu div:last-child{
                    margin-right:0;
                }
                .rightMenu{
                    display:flex;
                }
                .middleLogo{
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    letter-spacing: 9px;
                }
                .middleLogo img{
                    width: 30rem;
                }
                @keyframes menuBarLineOneAnimation{
                    0%{
                        transform: translateY(0);
                    }
                    60%{
                        transform: translateY(4.5px);
                    }
                    100%{
                        transform: translateY(4.5px) rotate(45deg);
                    }
                }
                @keyframes menuBarLineTwoAnimation{
                    0%{
                        transform: translateY(0);
                    }
                    60%{
                        transform: translateY(-4.5px);
                    }
                    100%{
                        transform: translateY(-4.5px) rotate(-45deg);
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .rightMenu{
                        display:none;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .middleLogo img{
                        width: 28rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .navBar{
                        height:5.5rem;
                    }
                    .middleLogo img{
                        width: 19rem;
                    }
                    .middleLogo{
                        top:45%;
                    }
                }
            `}</style>
        </>
    );
}
function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps, { setMenuBarShow, setNavShow ,setHeroImageLoaded})(Navbar);