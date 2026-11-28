import React from "react";
import HeroModuleStyleAndInovation from "../components/heroModuleStyleAndInovation";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import ImageText from "../components/imageText";
import OneImageslider from "../components/oneImageslider";
import { oneImageslider } from "../staticData/pageContent";
import ThreeImagesText from "../components/threeImagesText";
import BigImageAndText from "../components/bigImageAndText";
import ThreeColArticles from "../components/threeColArticles";
import TwoImagesAndNextPreviousButtons from "../components/twoImagesAndNextPreviousButtons";
import SocialMediaImages from "../components/socialMediaImages";
import { MOBILE_BREAKPOINT } from "../config";
import Space from "../components/space";
const ourRecentEvents = [
  {
    square: "/images/841.png",
    category: "Event",
    description:
      "Our annual meet with our clients, brands, partners and teams over a two day long eat and meet greet in Mumbai. India. The day …",
    author: "By Katerina Perez",
    label: "READ ON",
    imageType: "square",
    slug: "#",
  },
  {
    square: "/images/IMAGE 2.jpg",
    category: "Launch",
    description:
      "Antwerp-based concept jewellery brand Unsaid Library presents its first pop-up boutique at the list. Jewellery in …",
    author: "By Shontel Horne",
    label: "READ ON",
    imageType: "square",
    slug: "#",
  },
  {
    square: "/images/843.png",
    category: "Exhibition",
    description:
      "Moda Exhibition, Birmigham, United Kingdom, Walking Tree par took in the exhibition with other 100+ global brands …",
    author: "By Anesha George",
    label: "READ ON",
    imageType: "square",
    slug: "#",
  },
];

function StyleAndInovation(props) {
  return (
   <>
      <Layout static={true} initialBgForNav={true} >
            <div className="topSections">
              <HeroModuleStyleAndInovation
                category="Style & Innovation"
                topText="Positive Impact And Truly <i>Sustainable</i> Diamonds"
                cmsRichContent={true}
                desc="Written by INMA BUENDÍA </br> Intereviewed by MARTINO DI NAPOLI RAMPOLLA </br> Photographed by GUGLIELMO PROFETI </br> 06 SEPTEMBER 2021"
                facebook_image="/images/fb.png"
                twitter_image="/images/twitter.png"
                pintrest_image="/images/451.png"
                mail_image="/images/452.png"
              />
              <Space  desktopHeight="21rem" mediumHeight="17.5rem"  tabletLandscapeHeight="15rem" mobileHeight="8rem"/>
              <ImageText
                bigText="I"
                descriptionUp="ntroducing the future of fine jewelry, designed for humans and the planet. We create the world’s first positive-impact and truly sustainable diamonds: alchemized from air and hand-set in responsibly-sourced metals. Aether diamonds are as real as mined with none of the harmful consequences — every carat of our gemstones helps to create a better future."
                image="/images/934.png"
                descriptionDown="Aether diamonds are physically and chemically identical to mined diamonds, except they don’t come from deep inside the earth—they are transformed from excess carbon pollution in the atmosphere that would otherwise contribute to global warming."
              />
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              {/* <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mediumHeight="5rem"/> */}
              <OneImageslider
                oneImageslider={oneImageslider}
                cmsRichContent={true}
                shortHeading="Love To The Future "
                heading=" Each <i> Aether</i> piece defines the highest standards for responsible social and environmental practices, <i> prioritizing</i> the<i> wellbeing</i> of life on<i> earth:</i>  no hazardous working conditions."
              />
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <ThreeImagesText
                mobileImageTop="/images/930.png"
                firstImg="/images/932.png"
                secondImg="/images/930.png"
                thirdImg="/images/931.png"
                desc="Nisl vel pretium lectus quam id leo in. faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. integer feugiat scelerisque varius morbi enim. Libero id faucibus nisl tincidunt eget nullam non nisi. enim eu turpis egestas pretium aenean pharetra."
              />
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <BigImageAndText
                singleImage="/images/926.png"
                desc="Nisl vel pretium lectus quam id leo in. faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. integer feugiat scelerisque varius morbi enim. Libero id faucibus nisl tincidunt eget nullam non nisi. enim eu turpis egestas pretium aenean pharetra."
              />
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <TwoImagesAndNextPreviousButtons
                firstImg="/images/921.png"
                secondImg="/images/933.png"
                caption1="Model in campaign shoot, wearing  <strong> Yuke ear cuff</strong>"
                cmsRichContent={true}
                caption2="<strong>Pooja Manek, </strong>  Europe business lead wearing Aether collection"
                rightText="“Augue lacus viverra vitae congue eu consequat ac felis. Nullam vehicula ipsum a arcu cursus ullamcorper.”"

              />
              {/* <Space  desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/> */}
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <div className="section6 paddedContent">
                <div className="ourRecentEvents">
                  <ThreeColArticles
                    title= {"Our Recent Events"}
                    articleCol={ourRecentEvents}
                  />
                </div>
              </div>
              <SocialMediaImages
                exerpt="Follow Our Journey"
                imgOne="/images/31.jpg"
                imgTwo="/images/1020.jpg"
                imgThree="/images/1021.jpg"
                imgFour="/images/1022.jpg"
                playButton="/images/Play.png"
                playButton1="/images/Play.png"
                playButton2="/images/Play.png"
                imgFive="/images/1023.jpg"
                imgSix="/images/1036.jpg"
                imgSeven="/images/1037.jpg"
                imgEight="/images/1038.jpg"
                imgNine="/images/1039.jpg"
                imgTen="/images/1040.jpg"
                imgEleven="/images/1025.jpg"
                imgTwelve="/images/1024.jpg"
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/> 
            </div>
      </Layout>
      <style jsx>{`
        .borderBottom {
          border-bottom: 1px solid #707070;
        }
        .footerSpace{
          height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":`${props.common.footerHeight}px`};
          background:transparent;
        }
        .topSections{
          background:white;
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .section6 {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}

function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(
  StyleAndInovation
);
