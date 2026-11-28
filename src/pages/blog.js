import React from "react";
import HeroBlog from "../components/heroBlog";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import FeaturedArticles from "../components/featuredArticles";
import ThreeColArticles from "../components/threeColArticles";
import SocialMediaImages from "../components/socialMediaImages";
import { MOBILE_BREAKPOINT } from "../config";
import Space from "../components/space";
const featuredArticles = [
  {
    featuredImageLandscape: "/images/884@2x.png",
    category: "Events",
    excerpt:
      "Unsaid Jewels store launch in Antwerp with “name of the identity” art show collaboration.",
    description:
      "Our brand launched their third store in Antwerp, Belgium. It was hosted in collaboration with the art museum of royal arts and ….",
    author: "By Aadya Baoni",
    label: "Read ON",
    imageType: "featuredImageLandscape",
    slug: "#",
  },
  {
    featuredImageSquare: "/images/886@2x.png",
    category: "Sustainability",
    excerpt: "Rita Botelho launches our first sustainable jewellery line.",
    description:
      "Introducing the future of fine jewelry, designed for humans and the planet. We create the world’s first … ",
    author: "By Praachi Raniwala",
    label: "Read ON",
    imageType: "featuredImageSquare",
    slug: "#",
  },
];

const threeColumnArticlesPortrait = [
  {
    portrait: "/images/885.png",
    category: "Style & Innovation",
    description:
      "The landscape of India and its cultural diversity provides the backdrop for an enduring fascination with the paisley motif… ",
    author: "By Katerina Perez",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/881.png",
    category: "Hollywood & Fashion",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes… ",
    author: "By Shontel Horne",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/883.png",
    category: "Interview",
    description:
      "Rumi Lailacee takes us through her 101 jewelry gift gude. she talks about the beauty of giving gifts that creates memories and …",
    author: "By Anesha George",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
];
const newsArticles = [
  {
    square: "/images/889.png",
    category: "Style & Innovation",
    description:
      "Our global concept director Christie Max talks with the “show name” name on our approach with honouring craftsmanship …",
    author: "By Raj Aditya Chaudhuri",
    label: "READ ON",
    imageType: "square",
    slug: "#",
  },
  {
    square: "/images/News2.png",
    category: "Awards",
    description:
      "We received the award for R&D and innovation in the jewellery industry by the prestigious annual International Gem & …",
    author: "By Katerina Perez",
    label: "READ ON",
    imageType: "square",
    slug: "#",
  },
  {
    square: "/images/887.png",
    category: "Magazine",
    description:
      "Our brand Her Story featured in the Vogue Magazine, Paris. The editorial talks about our recent spring line collection which takes …",
    author: "By Anesha George",
    label: "READ ON",
    imageType: "square",
    slug: "#",
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

const allArticlesFirstThree = [
  {
    portrait: "/images/901.png",
    category: "Style & Innovation",
    description:
      "The landscape of India and its cultural diversity provides the backdrop for an enduring fascination with the paisley motif…",
    author: "By Katerina Perez",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/902.png",
    category: "Hollywood & Fashion",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes…",
    author: "By Shontel Horne",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/903.png",
    category: "Interview",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes…",
    author: "By Anesha George",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/910.png",
    category: "Style & Innovation",
    description:
      "The landscape of India and its cultural diversity provides the backdrop for an enduring fascination with the paisley motif…",
    author: "By Katerina Perez",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/911.png",
    category: "Hollywood & Fashion",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes…",
    author: "By Shontel Horne",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/912.png",
    category: "Interview",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes…",
    author: "By Anesha George",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
];

const allArticlesLastThree = [
  {
    portrait: "/images/910.png",
    category: "Style & Innovation",
    description:
      "The landscape of India and its cultural diversity provides the backdrop for an enduring fascination with the paisley motif…",
    author: "By Katerina Perez",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/911.png",
    category: "Hollywood & Fashion",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes…",
    author: "By Shontel Horne",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/912.png",
    category: "Interview",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes…",
    author: "By Anesha George",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
];

function Blog(props) {
  return (
    <>
      <Layout static={true} paddingTop={false} initialBgForNav={true}>
            <div className="topSections" >
              <div className="hero">
                <HeroBlog
                  shortHeading="Presenting"
                  mainHeading="Our Multifaceted Journal"
                  desc="Unsaid is a collection of symbols inspired by the emotions and stories of real people from across the world."
                />
              </div>
              <div>
                <FeaturedArticles
                  title="Featured Articles"
                  article={featuredArticles}
                  // articleCol={threeColumnArticlesPortrait}
                  // featuredImageLandscape="/images/884@2x.png"
                  // category1="Events"
                  // exerpt1="Unsaid Jewels store launch in Antwerp with “name of the identity” art show collaboration."
                  // descriptionTop="Our brand launched their third store in Antwerp, Belgium. It was hosted in collaboration with the art museum of royal arts and …."
                  // author1="By Aadya Baoni"
                  // label="READ ON"
                  // featuredImageSquare="/images/886@2x.png"
                  // category2="Sustainability"
                  // exerpt2="Rita Botelho launches our first sustainable jewellery line."
                  // descriptionTop2="Introducing the future of fine jewelry, designed for humans and the planet. We create the world’s first …"
                  // author2="By Praachi Raniwala"
                  // slug="#"
                />
              </div>
              <div className="paddedContent">
                <div className="portrait">
                  <ThreeColArticles articleCol={threeColumnArticlesPortrait} />
                </div>
                <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
                <div className="newsArticles">
                  <ThreeColArticles title="In news" articleCol={newsArticles} />
                </div>
                <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
                <div className="ourRecentEvents">
                  <ThreeColArticles
                    title="Our recent events"
                    articleCol={ourRecentEvents}
                  />
                </div>
                <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
                <div className="firstThreeArticles">
                  <ThreeColArticles
                    title="All Articles"
                    articleCol={allArticlesFirstThree}
                  />
                </div>
                {/* <div className="lastThreeArticles">
                  <ThreeColArticles removeMarginBottom={true} articleCol={allArticlesLastThree} />
                </div> */}
              </div>
              <div className="socialMediaSections">
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
              </div>
              <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
            </div>
      </Layout>
      <style jsx>{`
          .newsArticles,
          .portrait,
          .ourRecentEvents,
          .firstThreeArticles {
            border-bottom: 1px solid #707070;
          }
          .scrollDownLabel {
            margin-bottom: 2.2rem;
          }
          .scrollDownArrowWrapper {
            border-bottom: 1px solid #707070;
          }
          .scrollDownArrow {
            display: inline-block;
            margin-top: 1rem;
            margin-bottom: 7.7rem;
            animation: bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
          @keyframes bounce {
            50% {
              transform: translateY(-15px);
            }
          }
          .footerSpace{
            height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":`${props.common.footerHeight}px`};
            background:transparent;
          }
          .topSections{
            background:white;
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .newsArticles,
            .portrait,
            .ourRecentEvents,
            .firstThreeArticles,
            .lastThreeArticles {
              text-align: center;
            }
            .portrait,
            .newsArticles,
            .ourRecentEvents {
              border-bottom: 1px solid #fff;
            }
          }
      `}</style>
      </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(Blog);
