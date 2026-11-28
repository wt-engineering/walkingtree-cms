import React, { useEffect,useState,useRef } from "react";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroModuleStyleAndInovation from "../components/heroModuleStyleAndInovation";
import TwoTextAndOneImg from "../components/twoTextAndOneImg";
import ThreeImagesWithText from "../components/threeImagesWithText";
import TwoQuestionAnswers from "../components/twoQuestionAnswers";
import SliderThreeImages from "../components/sliderThreeImages";
import SectionVideo from "../components/sectionVideo";
import ThreeColArticles from "../components/threeColArticles";
import SocialMediaImages from "../components/socialMediaImages";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";
import { gsap } from "gsap/dist/gsap";
import Space from "../components/space";


gsap.registerPlugin(ScrollTrigger);

const slides = [
  {img: "/images/943.png",},
  {img: "/images/944.png",},
  {img: "/images/948.png",},
  {img: "/images/944.png",},
];

const questionAnswer = [
  {
    questions: "WT: What is your anecdote of collaborating with artists?",
    shortAnswer: "TK: ",
    answer:
      " “These projects always inspire me. working with artists is personal, if difficult on occasion, but above all, always touching,” he says with a smile. “What every collaboration in the field shows me is that listening is what counts above all else.” ",
  },
  {
    questions:
      "WT: You were talking earlier how thought process of architects have changed over the course of a decade with open global projects. can you elaborate your thoughts on that?",
    ShortAnswer: "TK: ",
    answer:
      " “Today, architects no longer want to work exclusively with standard products, but with a mix of the standard and the customised. Zumtobel receives briefs with individualised elements that they cannot build, as they only produce in large quantities. This custom-made portion is accordingly passed on to us to produce as a manufacturing partner.”",
  },
];
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
function Interview(props) {
  const [scroll, setScroll] = useState(null);
    const [windowScroll, setWindowScroll] = useState(null);
    const scrollWrapper = useRef();
  
    useEffect(() => {
      ScrollTrigger.defaults({
        scroller: scrollWrapper.current,
        toggleActions:"play none none none",
        scrub: false,
        start: "top 80%",
      });

    }, []);

  return (
    <>
      {/* <Layout static={true} initialBgForNav={true}>
       
          <div data-scroll-container ref={scrollWrapper}>
            <div className="topSections" >
              <HeroModuleStyleAndInovation
                category="Interview"
                topText="Thomas König <i>takes us through</i> Typico"
                cmsRichContent={true}
                image={true}
                img="/images/950.png"
                desc="Written by INMA BUENDÍA <br/> Intereviewed by MARTINO DI NAPOLI RAMPOLLA <br/> Photographed by GUGLIELMO PROFETI <br/> 06 SEPTEMBER 2021"
                facebook_image="/images/fb.png"
                twitter_image="/images/twitter.png"
                pintrest_image="/images/451.png"
                mail_image="/images/452.png"
              />
              <Space desktopHeight="21rem" mediumHeight="17.5rem" tabletLandscapeHeight="15rem" mobileHeight="8rem" />
              <div className="section1">
                <TwoTextAndOneImg
                  bigText="W"
                  desc="e talk to Thomas König, Typico’s CEO, about the enduringly volatile medium of light, the fusion of visionary art with technology, and the building blocks of a stable collaboration. born the son of an electrician and an office clerk, könig grew up on the shores of lake of constance in “middle-class” family setting, as he describes it. “My father always said, ‘this guy is so smart – let’s hope he doesn’t become an academic!’"
                  singleImage="/images/936.png" 
                  questions="WT: What is the work approach for your projects ?"
                  shortAnswer="TK:"
                  answer=" “At Typico, too, we’re always on the lookout for new challenges, and are keen to connect highly complex elements. This undertaking has become something of a self-fulfilling prophecy: today, typico operates in eight different business areas – from trade fair construction and art to lighting projects and interior design. across the board, no two jobs are alike.” He says, “I often explain our way of working according to the principles of baking: our setting at the company that offers a few hundred different ingredients, but we bake a different cake for each client.”"
                  // cmsRichContent={true}
                />
              </div>
              <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <ThreeImagesWithText
                imgLeft="/images/946.png"
                caption1Left="<strong>Thomas,</strong>  with the architect team expelling their new concept"
                caption2Left="We grab a quick coffee with Thomas in Kuberg’s cafe"
                imgRight="/images/937.png"
                captionRight="“I’ve come to realise that everything is irrelevant if you don’t harmonise on a human level. In the end, we all breathe the same air.”"
                imgDown="/images/947.png"
                cmsRichContent={true}
              />
              <Space desktopHeight="9rem" mediumHeight="7.5rem" tabletLandscapeHeight="6rem" mobileHeight="4rem" />
              <TwoQuestionAnswers
                questions="WT: What is your anecdote of collaborating with artists?"
                shortAnswer="TK:"
                answer=" “These projects always inspire me. working with artists is personal, if difficult on occasion, but above all, always touching,” he says with a smile. “What every collaboration in the field shows me is that listening is what counts above all else.”"
                lastQuestion="WT: You were talking earlier how thought process of architects have changed over the course of a decade with open global projects. can you elaborate your thoughts on that?"
                smallBoldText="TK:" 
                answers="TK: ““Today, architects no longer want to work exclusively with standard products, but with a mix of the standard and the customised. Zumtobel receives briefs with individualised elements that they cannot build, as they only produce in large quantities. This custom-made portion is accordingly passed on to us to produce as a manufacturing partner.”"      
              />
              <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <SliderThreeImages
                slides={slides}
                mainShortHeading="Love To The Future"
                desc="Whatever challenges lie just around the geographic – or professional – corner, könig is feeling confident and motivated for the future – not only due to the innovations to which he’ll be contributing. To König, one thing is certain – his courage to create, paired with the demand and interest in his ever-changing mediums, will not fade."
                smallHeading="“We draw a lot of our innovative power from our surroundings.I’ve come to realise that everything is irrelevant if you don’t harmonise on a human level.”"
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
              <SectionVideo
                mainImg="/images/945.png"
                shortHeading="Interview"
                mainHeading="Meet Thomas König"
                buttonText="WATCH THE FILM"
                textOnHover="LEARN MORE"
              />
              <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem" />
              <div className="events">
                <div className="borderBottom">
                  <ThreeColArticles
                    title="Related Article"
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
                imgFive="/images/1023.jpg"
                imgSix="/images/1036.jpg"
                imgSeven="/images/1037.jpg"
                imgEight="/images/1038.jpg"
                imgNine="/images/1039.jpg"
                imgTen="/images/1040.jpg"
                imgEleven="/images/1025.jpg"
                imgTwelve="/images/1024.jpg"
                playButton="/images/Play.png"
                playButton1="/images/Play.png"
                playButton2="/images/Play.png"
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem" />
            </div>
            
          </div> 
       
      </Layout> */}
      <style jsx>{`
          .events {
            padding-left: 6.7rem;
            padding-right: 6.6rem;
          }
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
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .events {
              padding-left: 3.8rem;
              padding-right: 3.8rem;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .events {
              padding-left: 2.1rem;
              padding-right: 2.1rem;
            }
          }
        `}</style>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(Interview);
