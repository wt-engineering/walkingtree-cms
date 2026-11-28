import React from "react";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import ThreeColArticles from "../components/threeColArticles";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config";
import Space from "../components/space"
const threeColumnArticlesPortrait = [
  {
    portrait: "/images/885.png",
    category: "Style & Innovation",
    description:
      "The landscape of India and its cultural diversity provides the backdrop for an enduring fascination with the paisley motif…",
    author: "By Katerina Perez",
    label: "READ ON",
    imageType: "portrait",
    slug: "#",
  },
  {
    portrait: "/images/881.png",
    category: "Hollywood & Fashion",
    description:
      "Best diamond jewellery looks from the 2021 cannes film festival. All of the exceptional diamond jewellery looks from the cannes…",
    author: "By Shontel Horne",
    shortHeadingReadON: "READ ON",
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

function FeaturedArticle(props) {
  return (
    <>
      <Layout static={true} initialBgForNav={true}>
          <div className="paddedContent topSections">
            <div className="allArticles">
              <ThreeColArticles
                title="Featured Articles"
                articleCol={threeColumnArticlesPortrait}
                removeMarginBottom={true}
              />
            </div>
            <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
          </div>
          <style jsx>{`
            .scrollDownLabel {
              margin-bottom: 2.2rem;
            }
            .footerSpace{
              height:${props.common.footerHeight >= props.common.windowHeight ?"100vh":`${props.common.footerHeight}px`};
              background:transparent;
            }
            .topSections{
              background:white;
              padding-top:19rem;
            }
            .scrollDownArrow {
              display: inline-block;
              margin-top: 1rem;
              margin-bottom: 7.7rem;
              animation: bounce 1600ms infinite
              cubic-bezier(0.445, 0.05, 0.55, 0.95);
            }
            @keyframes bounce {
              50% {
                transform: translateY(-15px);
              }
            }
            @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
              .topSections{
                padding-top:13rem;
              }
            }
            @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
              .topSections {
                text-align: center;
                padding-top:10rem;
              }
            }
          `}</style>
      </Layout>
    </>
  );
}

function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(
  FeaturedArticle
);
