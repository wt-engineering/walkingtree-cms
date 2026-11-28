import React from "react";
import Layout from "../components/layout";
import ThreeStepTextAndSingleImageCarousel from "../components/threeStepTextAndSingleImageCarousel";
import {sliderDots,sliderPage,giftStory, sliderThreeImages, catalog,mobileImages} from "../staticData/pageContent";
import TwoImagetxt from "../components/twoImagetxt";
import ThreeImageslider from "../components/threeImageslider";
import ProductCatalog from "../components/productCatalog";
import ProductCatalouge from "../components/productCatalouge1";
import GiftStory from "../components/giftStory";
import MeetTheTeam from "../components/meetTheTeam";
import OneImage from "../components/oneImage";
import ExploreMoreSlider from "../components/exploreMoreSlider";
import FooterHero from "../components/footerHero";
import { MOBILE_BREAKPOINT } from "../config";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import Space from "../components/space";
import HeroModule from "../components/heroModule"
function UnsaidJewels(props) {
  return (
    <>
      <Layout static={true}>
          <div className="topSections">
            <HeroModule
              mainImageMobile="/images/hero2.png"
              mainImage="/images/hero2.png"
              shortHeading="Private Label Brand"
              mainHeading="Unsaid Jewels"
              desc="Unsaid is a collection of symbols inspired by the emotions and the stories of real people from across the world <br/><br/>www.unsaidjewels.com"
              button={true}
              cmsRichContent={true}
              mediaType="image"
              cta={{buttonText:"Watch the film",buttonTextOnHover:"Learn more"}}
            />
            <Space desktopHeight="21rem" mediumHeight="17.5rem" tabletLandscapeHeight="15rem" mobileHeight="8rem"/>
            <ThreeStepTextAndSingleImageCarousel
              shortHeading="All about how we make it"
              topText1_2="Meaningful gifts"
              topText1_3="that you will never let go of"
              img1="/images/Component.png"
              sliderDots={sliderDots}
              topText2="Unsaid Library is Walking Tree's foray in the world of precious gifting We travelled the world and interacted with hundreds of people capturing thier motions in the form of powerful stories"
            />
            <Space desktopHeight="9rem" tabletLandscapeHeight="6rem" mobileHeight="4rem"/>
            <TwoImagetxt
              img1="/images/Image43.png"
              img2="/images/Image32.png"
              caption='Unsaid Jewels store facade,<strong> Antwerp Belgium</strong>'
              cmsRichContent={true}
              desc="Over two years, unsaid library has launched artistic collaborations with artists and started a range of gifts beyond jewellery to further expand the idea of meaningful gifts. "
            />
            <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
            <ThreeImageslider
              shortHeading="Featured Collections"
              mainHeading="Whirlwind"
              sliderPage={sliderPage}
              text1="Dynamic silhouettes and free-flowing lines recreate a heart caught up in a whirlwind."
              text2Desktop="The artisans are at the heart of the company and have played a fundamental role since the very beginning. They are key to the precision and reliability of jewellery, as well as the unrivalled reputation for excellence. they give a personal touch to each piece."
              text2Mobile="The artisans are at the heart of the company and have played a fundamental role since the very beginning. <br/> They are key to the precision and reliability of jewellery, as well as the unrivalled reputation for excellence. They give a personal touch to each piece.<br/><br/>Far removed from the throwaway culture, the master artisans go to great lengths to ensure each piece’s longevity."
              cmsRichContent={true}
            />
            <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
            <ProductCatalouge
              shortHeading="Product Catalogue"
              topText1_1="Its about having"
              topText1_2=" people "
              topText1_3=" and "
              topText1_4=" new eyes "
              topText1_5=" it moves us forward through a hyper collaborative mode"
              text2="We believe in rigorous yet cultural aesthetic, applying the classical proportions of design with science and innovative ground work."
              img="/images/14.png"
              caption="<strong>Supernova Bracelet, </strong></br> Supernova Collection"
              cmsRichContent={true}
            />
            <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="3rem"/>
            <div className="lesserAdditionalPadding">
              <ProductCatalog 
                catalog={catalog}
                mobileImages={mobileImages}
                cmsRichContent={true}
                buttonText="VISIT THE WEBSITE"
                buttonTextOnHover="VISIT THE WEBSITE"
              />
            </div>
            <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
            <GiftStory
              shortHeading="The gift of story telling"
              topText1="Each piece comes in an array of messages, emotive artwork, engraving in signature Unsaid gift boxes."
              giftStory={giftStory}
              bottomSubText= '<strong>Anna Sui</strong>  has overseen celebrated collections with the house. Her good judgement and exceptional taste are attributes that are <strong>innate,well honed,</strong> and,in many ways,<strong>alchemical</strong>'
              bottomRightText1="“It is a mix of intuition, analysis, scanning ideas and thoughts, understanding and a lot of innovation.”"
              bottomRightSubText="<strong>Anna Sui,</strong>  Senior Design Lead"
              cmsRichContent={true}
            />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
            <MeetTheTeam
              shortHeading="Meet the Team"
              text1="Collaborations between artists, designers, engineers and craftsmen are just one vital component in keeping each piece we create fresh and invigorated."
              leftImage="/images/100.png"
              caption="Engineer lead working on prototype, <strong> Placeholder</strong>"
              text2="The brand launched with a concept store in Antwerp and an e-commerce website that ships across Europe."
              rightImage="/images/101.png"
              cmsRichContent={true}
            />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
            <OneImage
              img="/images/432.png"
              caption1="Engineer lead working on prototype, <strong> Placeholder </strong>"
              caption2="click to explore <strong>www.unsaidjewels.com</strong>"
              cmsRichContent={true}
            />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
            <ExploreMoreSlider
              mainShortHeading="Explore More"
              bigHeading="Image Gallery"
              sliderImages={sliderThreeImages}
              description="“By immersion yourself in an area that far away from our offices and studios, you break from your comfort zone and open your eyes to new possibilities in your visual experiences.”"
              link="www.unsaidjewels.com"
              linkText="www.unsaidjewels.com"
            />
            <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
            <FooterHero
              mainImage="/images/432.png "
              shortHeading="Lookbook Festive 2021"
              mainHeading="A Place of Comfort, Sanctuary and Peace"
              bannerDescription="Watch the Film"
            />
            <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
          </div>
          <div className="footerSpace"></div>
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
export default connect(mapStateToProps, { setHeroImageLoaded })(UnsaidJewels);