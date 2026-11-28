import React from "react";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import ThreeStepTextCarousel from '../components/threeStepTextCarousel'
import History from '../components/history'
import ShortHeadingAndDescriptionWithOptionalImage from "../components/shortHeadingAndDescriptionWithOptionalImage"
import InfoAndPointsWithLines from '../components/infoAndPointsWithLines'
import ImageLeftInfoCtaRight from "../components/imageLeftInfoCtaRight"
import BannerCta from '../components/bannerCta'
import Space from '../components/space'
import {MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT} from "../config"
import Counts from "../components/Counts"
import HeadingAndDescriptionLeftImageRight from '../components/headingAndDescriptionLeftImageRight'
import OurTeam from "../components/OurTeam";
import TextSurroundedByImagesAndCta from '../components/textSurroundedByImagesAndCta'
import {teamDetails,carouselImages,historyImages} from "../staticData/pageContent"
import Image from '../components/Image'
const points = [
  {
    _key:"dsku3",
    heading:"User Sensitivity",
    text:"Walking Tree is built on the studied practice of listening and developing an appreciation of what truly touches people."
  },
  {
    _key:"dsku33",
    heading:"Constant Innovation",
    text:"We studiously foster innovation because we have an inherent drive to keep moving ahead of the curve."
  },
  {
    _key:"dsku3543",
    heading:"Constant Innovation",
    text:"We studiously foster innovation because we have an inherent drive to keep moving ahead of the curve."
  },
  {
    _key:"dsk4u3",
    heading:"Infectious Intensity",
    text:"We sport an almost evangelical drive within us to bring about a positive change in the jewellery industry."
  },
  {
    _key:"dsk4235u3",
    heading:"Ecosystem Thinking",
    text:"We like to see the big picture. this gives us a much more robust understanding of what should be created and reinvented."
  },
  {
    _key:"dsku35r46",
    heading:"The Promise Of Sustainability",
    text:"As a business geared towards the future, we are 100% committed to creating a business that is based on the principles of sustainability and planet-consciousness."
  }
]

function TheGroup(props) {
  return (
      <>
        <Layout static={true} initialBgForNav={true}>
              <div className="topSections">
                <div className="pageTitle alignCenter">
                    <div style={{animationDelay:"0.1s"}} className="mainShortHeading blackish fadeUpAnimation marginBottom26">Our Story</div>
                    <div style={{animationDelay:"0.2s"}} className="bannerHeadingBlack fadeUpAnimation marginBottom90">Deep Roots,<br/>Unfettered Imagination</div>
                    <div style={{animationDelay:"0.3s"}} className="mainImage fadeUpAnimation">
                        <Image height={523} width={783} alt="Our Story" originalSrc="/images/the-group.png" className="width-100" />
                    </div>
                </div>
                
                <Space desktopHeight="21rem" mediumHeight="17.5rem"  tabletLandscapeHeight="15rem" mobileHeight="8rem" />
                <ThreeStepTextCarousel 
                  shortHeading="All about how we make it"
                  topText1={`<p>We enable our brands &amp; partners entry into a world of unlimited possibilities.</p>`} 
                  topText2={`<p>We have strong roots in the diamond industry. Walking Tree is the coming together of two strong organisations – H Dipak, the world’s largest manufacturer and distributor of princess cut diamonds, and KBS, a veteran of bridal diamond jewellery industry since four decades. The idea was to merge expertise and create a disruptive design house that is geared towards the future of diamonds and jewellery.</p>`} 
                  carouselImages={carouselImages}
                  shortHeading1="About Us"
                  desc="As a third-generation diamond family, we have grown from a manufacturer to a full-stack design and manufacturing house that intimately knows the new kind of consumer and the evolving definition of luxury. Through the journey we have kept constant innovation and consumer-centricity as our core principles."
                  cmsRichContent={true}/>
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                {/* <SubNavigation /> */}
                <History 
                  shortHeading="Our Legacy &amp; Rich History"
                  heading="54 Years of Enriched Generational Expertise"
                  historyImages={historyImages}
                /> 
                <Space desktopHeight="12.5rem" mediumHeight={"10rem"} tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
                <TextSurroundedByImagesAndCta 
                  image1="/images/history1.png"
                  image1Caption="Our first atelier ground work, <strong>Bombay Maharastra</strong>, Archive, 1955"
                  shortHeading="Our Enriched History"
                  heading="“name person” was frimly <i>convinced</i> of a person’s ability to innovate and strive for excellence"
                  desc="Name or names were not simply a visionary who, through their knowledge, spirit of enterprise and ability to think differently, endowed walking tree with their fundamental technical and aesthetic characteristics and set the way for his company’s long-lasting success. constant quest for perfection was accompanied by a profound generosity and unshakeable faith in human potential – in our capacity to both innovate and overcome difficulties."
                  image2="/images/history2.png"
                  image3="/images/history3.png"
                  image2Caption="<strong>Atelier Mumbai, India.</strong> Archive 1972"
                  buttonText={"WATCH THE FILM"}
                  buttonTextOnHover={"WATCH THE FILM"}
                  cmsRichContent={true}
                /> 
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                <ShortHeadingAndDescriptionWithOptionalImage shortHeading="Our Ecosystem" desc="Throughout its history, we have partnered with events, institutions and individuals whose commitment and actions are a source of inspiration. Guided by the vision of its founders and visionaries, the group was quick to support and accompany initiatives that aligned with its own values." img="/images/ecosystem.png"/>
                <Space desktopHeight="9rem" tabletLandscapeHeight="6rem" mobileHeight="3rem" />
                {/* <HeadingDescriptionAndStats smallHeading="A collection of leaders, creators and innovators" bigDescription="Crafting a meaningful response to the traditional jewellery creation process with abundance of innovation and expert craftsmanship" /> */}
                <Counts
                    heading="A collection of leaders, creators and innovators"
                    description="Crafting a meaningful response to the traditional jewellery creation process with abundance of innovation and expert craftsmanship"
                    countItem1={{name:"Ateliers",count:3}}
                    countItem2={{name:"Studios",count:4}}
                    countItem3={{name:"Employees",count:1600}}
                    countItem4={{name:"Artisans",count:60}}
                    countItem5={{name:"COLLECTIONS",count:100}}
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                <HeadingAndDescriptionLeftImageRight 
                  heading="We are inspired by aesthetics and trends that exist beyond jewellery as a category."
                  desc=" We are a team of innovators, engineers, designers and artists who are united by a singular vision, to never stop bringing a new point of view to the table. We are led by our founders who have taken a family business and expanded it to become one of the most exciting jewellery company in the industry."
                  img="/images/belowStats.png"
                  caption={{showArrow:true,text:"<p><strong>Walking Tree Group</strong>, Annual Meeting 2021</p>"}}
                  cmsRichContent={true}/>
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                <InfoAndPointsWithLines 
                  shortHeading={`Our Values Philosophy`} 
                  heading1="Multifaceted collaborative" 
                  heading2="experience centre & space" 
                  description="Our mission is to create beautiful interiors that connect people with their spaces meaningfully and comfortably. To achieve this, we use:" 
                  img1="/images/values1.png" 
                  img2="/images/values2.png" 
                  points={points}
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                <OurTeam
                  shortHeading="Meet The Team"
                  desc="We believe in transparency and straight-talking good advice, and have built our reputation based on trust, quality, care and close collaboration."
                  teamMembers={teamDetails}
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                <ImageLeftInfoCtaRight 
                  heading="Future Focused"
                  description="Our 2025 Sustainability Goals put a bold roadmap in place to guide us—and inspire our industry—towards a better future."
                  img="/images/future.png"
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                {/* <FullWidthBoxWithTextOnTheLeft />
                <Space desktopHeight="4.6rem" tabletLandscapeHeight="4rem" mobileHeight="3.9rem" /> */}
                {/* <div ref={mapAnimationRef}><Map /></div>
                <Space desktopHeight="11.2rem" tabletLandscapeHeight="10rem" mobileHeight="10rem" />
                <DropUsALine />
                <Space desktopHeight="9.8rem" tabletLandscapeHeight="9rem" mobileHeight="10rem" /> */}
                <BannerCta 
                  img="/images/bannerCta.png"
                  text={"<p>To talk about</br> your project</p>"}
                  buttonText="LETS CONNECT"
                  buttonTextOnHover="LETS CONNECT"
                  cmsRichContent={true}
                />
                <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              </div>
        </Layout>
        <style jsx>{`
          .mainImage{
              padding-left:22.84%;
              padding-right:22.84%;
          }
          .blackish{
            padding-top:20rem;
          }
          .footerSpace{
              height:${props.common.footerHeight >= props.common.windowHeight ?`${props.common.windowHeight}px`:`${props.common.footerHeight}px`};
              background:transparent;
          }
          .topSections{
              background:white;
          }
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
            .mainImage{
              padding-left:15%;
              padding-right:15%;
            }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .mainImage{
              padding-left:10%;
              padding-right:10%;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .mainImage{
              padding-left:0%;
              padding-right:0%;
            }
            .blackish{
              padding-top:15rem;
            }
          }
        `}</style>
      </>
    
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(TheGroup);
