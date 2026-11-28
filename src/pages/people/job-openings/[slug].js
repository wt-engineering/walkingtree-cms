import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../components/layout";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SmoothScrollContext } from '../../../function';
import { connect } from "react-redux";
import Space from "../../../components/space";
import { setHeroImageLoaded } from "../../../redux/actions";
import {MOBILE_BREAKPOINT} from '../../../config'
import JobDesignationUpdated from "../../../components/jobDesignationUpdated";
import NoJobOpenings from "../../../components/NoJobOpenings";
import Sanity from "../../../sanity"
import SEO from "../../../components/seo"
gsap.registerPlugin(ScrollTrigger);

function JobOpenings(props) {
    const [scroll, setScroll] = useState(null);
    const [changeScrollTriggerValue, setScrollTriggerValue] = useState(false)
    const scrollWrapper = useRef();
    useEffect(() => {
      props.setHeroImageLoaded(true);
      ScrollTrigger.defaults({
        scroller: scrollWrapper.current,
        // scroller:"#collectionPage",
        toggleActions:"play none none none",
        scrub: false,
        start: `${changeScrollTriggerValue?"top 200%":"top 80%"}`,
      });
    }, []);
  
    // useEffect(() => {
    //   setScroll(null)
    //   setScrollTriggerValue(true)
    // }, [containerHeight])
    let title="Job Application | Walking tree"
    let description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    let image="/images/1.png"
    return (
      <>
        <SEO title={title} description={description} image={image}/>
        <Layout static={true} paddingTop={true} initialBgForNav={true}>
                <div data-scroll-container ref={scrollWrapper}>
                    <div className="topSections">
                      <JobDesignationUpdated
                        smallHeading="Job Opening"
                        designation={props.data.name}
                        location={props.data.location}
                        caption1="Job Description"
                        caption2="Application"
                        jobDescription={props.data.jobDescription}
                        jobHeadingAndPoints1={props.data.jobHeadingAndPoints1}
                        jobHeadingAndPoints2={props.data.jobHeadingAndPoints2}
                        jobHeadingAndPoints3={props.data.jobHeadingAndPoints3}
                      />
                        {/* <Space desktopHeight="18.6rem"  tabletLandscapeHeight="9.2rem"  mobileHeight="6.1rem"/> */}
                      <NoJobOpenings
                        heading="Can’t see opening for you Submit your details"
                        desc="We operate offices across the world.<br/> We’re always looking to connect with individuals who want to make the best work of their lives with the world’s greatest brands. If you’re interested in working with us or learning more, drop us a note, portfolio link, or résumé."
                        applyButtonText="APPLY NOW"
                        image="/images/noJobOpen.png"
                      />
                    </div>
                    {/* <div className="footerSpace"></div>  */}
                </div> 
        </Layout>
        <style jsx>{`
          .footerSpace{
            height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":`${props.common.footerHeight}px`};
            background:transparent;
          }
          .applyNowButtonWrapper{
              margin-top:5.6rem;
              margin-bottom:24.4rem;
              padding-left: 20%;
          }
          .topSections{
            background:white;
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
            .applyNowButtonWrapper{
                margin-top:3.4rem;
                margin-bottom:8.4rem;
                padding-left: 2.1rem;
            }
          }
        `}</style>
      </>
    );
  }

function mapStateToProps({ common }) {
return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(JobOpenings);

export async function getStaticPaths(){
    let paths=[];
    let query=`*[_type=="jobOpening"]{"slugParams":slug.current}`
    let category=await Sanity.fetch(query);
    if(Array.isArray(category)){
        for(let i=0; i<category.length; i++){
            paths.push({params:{slug:category[i].slugParams}})
        }
    }else{
        //do nothing
    }
    return {
        paths,
        fallback:'blocking'
    }
}

export async function getStaticProps({params}){
    let slug=params.slug;
    let data=null;
    let query=`*[_type=="jobOpening" && slug.current=="${slug}"]
    {
      "department":department->,
      jobDescription,
      jobHeadingAndPoints1,
      jobHeadingAndPoints2,
      jobHeadingAndPoints3,
      location,
      name,
    }`
    let error=false;
    try{
        data=await Sanity.fetch(query);
        data=Array.isArray(data)?data[0]:null;
        return {
            props:{
                data,slug,error
            }
        }
    }catch(err){
        return {props:{error}, revalidate:60}
    }
}