import React, { useEffect, useRef, useState,useContext } from "react";
import Slider from "react-slick";
import {MOBILE_BREAKPOINT, TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,lineAnimationTiming} from "../config";
import JobOpeningsDescription from '../components/jobOpeningsDescription';
import JobHeadingAndPoints from "../components/JobHeadingAndPoints";
import ApplyNowButton from "../components/ApplyNowButton";
import ApplicationForm from "../components/applicationForm";
import Space from "../components/space";
import { connect } from "react-redux";
import { setOpenNoJobOpeningsForm } from "../redux/actions";
import BlockContent from "@sanity/block-content-to-react"
function JobDesignationUpdated(props) {
    const [indexSlider, setIndexSlider] = useState(0);
    const [fixSubNav, setFixSubNav] = useState(false);
    const [belowDataAnimated, setBelowDataAnimated] = useState(false);
    const slider = useRef();
    const subNavRef = useRef();
    const scrollToViewRef = useRef();
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipe: true,
        adaptiveHeight: true,
        beforeChange: (current, next) => setIndexSlider(next),
    };
    function scrollHandler(){
        let subNavTopValue = subNavRef.current?.getBoundingClientRect().bottom;
        if(subNavTopValue <= 0){
            setFixSubNav(true)
        }else{
            setFixSubNav(false)
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);

    useEffect(() => {
        if(fixSubNav) scrollToViewRef.current?.scrollIntoView({behavior: "smooth"});
    }, [indexSlider])

    useEffect(() => {
        if(props.common.noJobOpeningForm) slider.current.slickGoTo(1)
        if(indexSlider==1) scrollToViewRef.current?.scrollIntoView({behavior: "smooth"});
        props.setOpenNoJobOpeningsForm(false)
    }, [props.common.noJobOpeningForm])

    function scrollToBottomAndSetIndex(){
        if(!belowDataAnimated) {
            window.scrollTo(0,10000)
            setTimeout(() => {slider.current.slickGoTo(1)}, 100)
        }else{
            slider.current.slickGoTo(1)
        }
        setBelowDataAnimated(true)
    }
    return (
        <>
            <div className={`jobDesignation ${fixSubNav?"fixSubNav":""}`}>
                <div ref={subNavRef} className="centerText alignCenter">
                    <div style={{animationDelay:"0s"}} className="mainShortHeading shortline fadeUpAnimation" >{props.smallHeading}</div>
                    <div style={{animationDelay:"0.1s"}} className="designationHeading bigHeading black fadeUpAnimation">{props.designation}</div>
                    <h2 style={{animationDelay:"0.2s"}} className="leftHeading  fadeUpAnimation">{props.location}</h2>
                </div>
                <div className="subNavContainer">
                    <div style={{animationDelay:"0.3s"}} className="bottomTextSection flexItems fadeUpAnimation">
                        <div className="leftText">
                            <div onClick={()=>slider.current.slickGoTo(0)}  className={`greyCaption cursorPointer underlineLR ${indexSlider==0?" marginBottomUl active":""}`}>{props.caption1}</div>
                        </div>
                        <div className="rightText">
                            <div onClick={()=>slider.current.slickGoTo(1)} className={`greyCaption cursorPointer underlineLR ${indexSlider==1?"marginBottomUl active":""}`}>{props.caption2}</div>
                        </div>
                    </div>
                </div>
                <div className="subNavSpace"></div>
                <div ref={scrollToViewRef}><Space desktopHeight="18.6rem" tabletHeight="10.8rem" mobileHeight="8.2rem"/></div>
                <Slider ref={slider} {...settings}>
                    <div>
                        <JobOpeningsDescription
                          text={!!props.jobDescription?props.jobDescription:"Intuition influences your approach and strategy guides it. You collaborate, you lead, and you contribute. You bring world-class skills across experience design, content strategy, and visual design to create experiences that resonate deeply with people. You believe in innovation and progression, but not at the expense of the audience or business. Most importantly, you inspire those around you to do the best work of their lives.<br/><br/> Emphasis on design and design systems across digital experiences, eCommerce, and content for lifestyle and technology categories."}
                          onButtonClick={()=>scrollToBottomAndSetIndex()}
                        />
                        <JobHeadingAndPoints
                            borderTop={true}
                            heading={!!props?.jobHeadingAndPoints1?.heading? props?.jobHeadingAndPoints1?.heading:"What You Will Do"}
                            points={!!props?.jobHeadingAndPoints1?.points?<BlockContent blocks={props?.jobHeadingAndPoints1?.points}/>:"<p>Collaborate with the team to drive several large-scale digital projects to completion, including websites, branding, content, and more.</p><p>Inspire the client as well as your team to define and align on a collective vision.</p><p>Establish direction, craft guidelines, build presentation materials, and even assist with production and delivery when required.</p><p>Be a leader, putting the client and team before yourself.</p><p>Bring a unique point-of-view as well as an openness and curiosity in everything you do.</p><p>Work with little process in place, solving problems by being optimistic and proactive.</p>"}
                            cmsRichContent={props.cmsRichContent}
                        />
                        <JobHeadingAndPoints
                            heading={!!props?.jobHeadingAndPoints2?.heading? props?.jobHeadingAndPoints2?.heading:"What You'll Bring"}
                            points={!!props?.jobHeadingAndPoints2?.points?<BlockContent blocks={props?.jobHeadingAndPoints2?.points}/>:"<p>7+ years of design and interactive work for the world’s leading brands.</p><p>Confidence and talent when it comes to presenting to stakeholders of all levels.</p><p>Strong knowledge of visual design, user-centered experience design, interaction design, brand development, and the creative process.</p><p>A love for typography, interaction, traditional graphic design, and technology. Skills in modern design and prototyping tools.</p><p>Ability to lead internal teams with strategic vision and creative inspiration. A solid point-of-view and a collaborative spirit.</p><p>An entrepreneurial and independent attitude.</p><p>A versatile sense of taste with the knowledge necessary to apply it to various challenges.</p><p>Passion for hardware, AI, and technology products.</p>"}
                            cmsRichContent={props.cmsRichContent}
                        />
                        <JobHeadingAndPoints
                            heading={!!props?.jobHeadingAndPoints3?.heading? props?.jobHeadingAndPoints3?.heading:"What You'll Get"}
                            points={!!props?.jobHeadingAndPoints3?.points?<BlockContent blocks={props?.jobHeadingAndPoints3?.points}/>:"<p>Global Industry Standard Compensation.</p><p>Full benefits including medical, dental, and vision insurance. Matching 401k.</p><p>Paid vacation and sick leave.</p><p>Paid holidays.</p><p>Amazing clients to work with.</p><p>Dogs to pet and things to drink.</p><p>A great working space in downtown Antwerp.</p><p>A team that works hard, has fun, and loves a challenge.</p>"}
                            paddingBottom="1.7rem"
                            signatureOf={props.designation}
                            cmsRichContent={props.cmsRichContent}
                        />
                        <div className="applyNowButtonWrapper">
                            <ApplyNowButton text="Apply Now" onClick={()=>scrollToBottomAndSetIndex()}/>
                        </div>
                    </div>
                    <div>
                        <ApplicationForm
                            mainHeading="Application Form"
                            description="Dialogue is essential as a way to keep looking and thinking. a huge part of our process comes about through dialogue with artists, industry experts, clients. There is a dialogue with every piece we create."
                            smallHeading="Documents"
                            personalInformation="Personal Information"
                        />
                        <Space  desktopHeight="30rem" tabletLandscapeHeight="22.5rem" mobileHeight=""/>
                    </div>
                </Slider>
            </div>
            <style jsx >{`
                .centerText {
                    justify-content: center;
                    padding-bottom: 13rem;
                }
                .marginBottomUl{
                    padding-bottom: 7px;
                }
                .subNavSpace{
                    padding:0;
                }
                .fixSubNav .subNavSpace{
                    padding:4rem;
                }
                .subNavContainer{
                    background: #FFFFFF;
                    padding-top: 3rem;
                    position:static;
                    z-index:9;
                    transition:all 0.3s ease-out;
                }
                .fixSubNav .subNavContainer{
                    position:fixed;
                    top:0;
                    width:100%;
                    transition:all 0.3s ease-out;
                }
                .shortline {
                    margin-bottom: 2.1rem;
                }
                .designationHeading {
                    margin-bottom: 1rem;
                }
                .bottomTextSection {
                    box-shadow:0px 5px 4px #00000029;
                    padding: 0 32% 3rem;
                    justify-content: space-between;
                }
                .bottomTextSection div{
                    // font-size:2.1rem;
                }
                .rightText .active,.leftText .active{
                    font-weight:bold;
                    transition:all 0.3s ease-out;
                }
                .applyNowButtonWrapper{
                    margin-top:5.6rem;
                    margin-bottom:24.4rem;
                    padding-left: 20%;
                }
                @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                    .leftText {
                        margin-right: 18%;
                    }
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .leftText {
                        margin-right: 17%;
                    }
                    .bottomTextSection {
                        padding: 0 25% 3rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .designationHeading {
                        padding:0 3%;
                    }
                    .applyNowButtonWrapper{
                        margin-top:3.4rem;
                        margin-bottom:8.4rem;
                        padding-left: 2.1rem;
                    }
                    .centerText {
                        padding-top: 12rem;
                    }
                    .bottomTextSection {
                        padding: 0 5.1rem 2rem;
                    }
                    .bottomTextSection div{
                        font-size:1.4rem;
                    }
                    .subNavContainer{
                        padding-top:2rem;
                    }
                }
            `}</style>
        </>
    )
}
function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps, {setOpenNoJobOpeningsForm})(JobDesignationUpdated);