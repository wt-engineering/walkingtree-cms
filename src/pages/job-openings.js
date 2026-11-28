import React from "react";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import {MOBILE_BREAKPOINT} from '../config'
import JobDesignationUpdated from "../components/jobDesignationUpdated";
import NoJobOpenings from "../components/NoJobOpenings";
function JobOpenings(props) {
    return (
      <>
        <Layout static={true} paddingTop={true} initialBgForNav={true}>
            <div className="topSections">
              <JobDesignationUpdated
                smallHeading="Job Opening"
                designation="Design Lead/Design Director"
                location="Unsaid, Bangalore, Remote"
                caption1="Job Description"
                caption2="Application"
                cmsRichContent={true}
              />
                {/* <Space desktopHeight="18.6rem"  tabletLandscapeHeight="9.2rem"  mobileHeight="6.1rem"/> */}
              <NoJobOpenings
                heading="Can’t see opening for you Submit your details"
                desc="We operate offices across the world.<br/> We’re always looking to connect with individuals who want to make the best work of their lives with the world’s greatest brands. If you’re interested in working with us or learning more, drop us a note, portfolio link, or résumé."
                applyButtonText="APPLY NOW"
                image="/images/noJobOpen.png"
              />
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