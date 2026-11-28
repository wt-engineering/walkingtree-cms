import React from "react";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import {MOBILE_BREAKPOINT} from '../config'
import HeroModule from '../components/heroModule'
import ThreeStepText from '../components/threeStepText'
import Space from '../components/space'
import ImageTextButton from "../components/ImageTextButton";
import Services from "../components/services"
import PrivateLabelCollections from '../components/privateLabelCollections'
import NewBrandIncubation from '../components/newBrandIncubation'
import BrandManufacturing from '../components/brandManufacturing'
function BusinessToBusiness(props) {     
    return (
      <>
        <Layout static={true}>
              <div className="topSections">
                  <HeroModule
                      mediaType="image"
                      mainImageMobile="/images/b2bBanner.png"
                      mainImage="/images/b2bBanner.png"
                      shortHeading="Business to Business"
                      mainHeading="Lacus Vestibulum Sed"
                      desc="Diam in arcu cursus euismod. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ultrices tincidunt arcu non sodales. Risus nec feugiat in fermentum. Vitae aliquet nec ullamcorper amet risus nullam."
                  />
                  <Space desktopHeight="21rem" mediumHeight="17.5rem"  tabletLandscapeHeight="15rem" mobileHeight="8rem" />
                  <ThreeStepText 
                      center={true} 
                      topText2Class="grey bigDescription" 
                      shortHeading="Nunc Aliquet Bibendum Enim" 
                      topText1="Nunc consequat interdum varius sit amet mattis tristique." 
                      topText2="Vel pharetra vel turpis nunc eget lorem dolor sed. metus aliquam eleifend mi in nulla posuere. morbi tristique senectus et netus et malesuada fames. Vitae semper quis lectus nulla at volutpat diam." 
                  />
                  <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                  <ImageTextButton
                      img="/images/b2bLadyImage.png"
                      shortHeading="Design Studio India"
                      desc="The perfect phrase for us — an old-world exclamation that exudes a feeling of amazement. This aligns with the inspiration and vision for many of our projects: They should be distinctive, and elicit a sense of wonder for clients and our teams alike."
                      buttonText="EXPLORE OUR PROCESS"
                      buttonTextOnHover="LEARN MORE"
                  />
                  <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
                  <ImageTextButton
                      img="/images/b2bImage3.png"
                      // sliderDesign={sliderDesign}
                      shortHeading="Design Studio India"
                      desc="The perfect phrase for us — an old-world exclamation that exudes a feeling of amazement. This aligns with the inspiration and vision for many of our projects: They should be distinctive, and elicit a sense of wonder for clients and our teams alike."
                      buttonText="EXPLORE OUR PROCESS"
                      buttonTextOnHover="LEARN MORE"
                  />
                  <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                  <Services
                    shortHeading="Services"
                    smallheading="From offering the whole bouquet to standalone design and manufacturing services"
                    bigDescription="As a full stack design studio, we know that every partner who comes to us has a unique challenge to resolve. because we are the sum of many standalone parts, we are able to create a flexible structure that fits a specific set of needs. That is why every collaboration we do is unique and results in ways that always creates new desire for our partners."
                    image="/images/1020.png"
                  />
                  <Space desktopHeight="30rem" mediumHeight="25rem"tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                  <PrivateLabelCollections
                    img1="/images/col1-1.png"
                    caption="Green certified mines in the,<strong> South Of Africa</stong>"
                    captionMobile="Green certified mines in the,<strong> South Of Africa</stong>"
                    img2="/images/645.png"
                    img3="/images/1114.png"
                    img3ForTablet="/images/184.png"
                    img4="/images/col3-2.png"
                    img4ForTablet="/images/185.png"
                    shortHeading="Private Label Collections"
                    heading1="From offering the whole bouquet to standalone design and manufacturing services "
                    desc1="Every jewellery retailer needs to build a distinct presence that captures their individualistic aesthetics and values. We work closely with retail partners to build a showcase for them that is completely their own. From insights to design and manufacturing, we plug in and put as per the retailer’s preference to help them build their key lines."
                    buttonText="EXPLORE OUR PROCESS"
                    buttonTextOnHover="EXPLORE OUR PROCESS"
                    cmsRichContent={true}
                    />
                  <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                  <BrandManufacturing
                    mainShortHeading="Brand Manufacturing"
                    smallHeading="Attention to form, material, story, provenance these are the factors which unites our processes."
                    imageOne="/images/1111.png"
                    imageTwo="/images/1113.png"
                    imageThree="/images/1115.png"
                    description="Some of the most progressive jewellery brands come to us for our manufacturing capabilities. From the choice of material to the finesse of the finish, we match our partner’s exacting standards to deliver world-class jewellery based on their creative vision."
                    bigDescription="“It is a mix of intuition, analysis, scanning ideas and thoughts, understanding and a lot of innovation.”"
                    caption="<b>Anna Sui,</b>  SENIOR DESIGN LEAD"
                    cmsRichContent={true}
                  />
                  <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
                  <NewBrandIncubation 
                    mainShortHeading="New Brand Incubation"
                    description="The evolving nature of our wearer coupled with new and exciting retail opportunities are the perfect reasons to experiment with ideas that find deep resonance. we help partners find exciting new insights that align with their philosophy and give shape to a brand that has their DNA and our expertise."
                    bigDescription="“We believe that sustainability makes our business stronger, underpinning everything we do..”"
                    caption= "<b>Ella Luther</b>,  In - House Sustainability Director"
                    image="/images/650.png"
                    cmsRichContent={true}
                  />
                  <Space desktopHeight="21rem" mediumHeight="17.5rem"  tabletLandscapeHeight="15rem" mobileHeight="8rem" />
              </div>
        </Layout>
        <style jsx>{`
          .footerSpace{
            height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":`${props.common.footerHeight}px`};
            background:transparent;
          }
          .topSections{
            background:white;
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px){

          }
        `}</style>
      </>
    );
  }

function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(BusinessToBusiness);