import React, { useEffect,useState,useRef } from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../../redux/actions";
import ThreeColArticles from "../../components/threeColArticles";
import LongArrow from "../../components/longArrow";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../config";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SmoothScrollContext } from '../../function';
import Space from "../../components/space"
import Sanity from "../../sanity"
gsap.registerPlugin(ScrollTrigger);
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../../components/seo";
import Loader from "../../components/loader";
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
//   console.log(props.data.title);
    let seo=props.data.seo
  const [scroll, setScroll] = useState(null);
  const scrollWrapper = useRef();

  useEffect(() => {
    props.setHeroImageLoaded(true);
    ScrollTrigger.defaults({
      scroller: scrollWrapper.current,
      // scroller:"#collectionPage",
      toggleActions:"play none none none",
      scrub: false,
      start: "top 80%",
    });
  }, []);
  let allArticles=props.data.relatedArticles.map((article) =>{
      return {
        category:article.articleCategory[0].title,
        categorySlug:article.articleCategory[0].slug,
        imageType:"portrait",
        // excerpt:article.excerpt,
        description:article.description,
        author:article.author,
        label:article.label,
        slug:article.slug,
        title:article.title,
        portrait:article.articlePortraitImage?urlFor(article.articlePortraitImage).url():null,
      }
  })
//   console.log("allArticles",allArticles)
  return (
    <>
      {!!seo && <SEO
        title={seo.title}
        description={seo.description}
        image={urlFor(seo.image).quality(100).url()} 
       />}
      <Layout static={true} initialBgForNav={true}>
          <div data-scroll-container ref={scrollWrapper}>
            <div className="paddedContent topSections">
              <div className="allArticles">
              {!props.common.heroImageLoaded && <Loader type="type1"/>}
                <ThreeColArticles
                  title={props.data.title}
                  articleCol={allArticles}
                  removeMarginBottom={true}
                />
              </div>
              <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
            </div>
            {/* <div className="footerSpace"></div>  */}
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


export async function getStaticPaths(){
    let paths=[];
    let query=`*[_type=="articleCategory"]{"slugParams":slug.current}`
    let category=await Sanity.fetch(query)
    if(Array.isArray(category)){
        for(let i=0;i<category.length;i++){
            paths.push({params:{slug:category[i].slugParams}})
        }
    }else{
        // console.log("invalid slug")
    }
    return{
        paths,
        fallback:'blocking'
    }
}


export async function getStaticProps({params}){
    let data=null;
    let query=`*[_type=="articleCategory" && slug.current=="${params.slug}"]{
        "relatedArticles": *[_type=='article' && references(^._id)]{
        articleCategory[]->{"slug":slug.current,title},
        author,
        description,
        excerpt,
        title,
        articlePortraitImage,
        label,
        "slug":slug.current},
        seo,
        title,
      }`
    let error=false
    try{
        data=await Sanity.fetch(query)
        data=Array.isArray(data)?data[0]:null
        return {props:{data,error}, revalidate:60}
    }catch(err){
        error=true
        return {props:{error,data}, revalidate:60}
    }
}

