import { getSite } from '@/lib/legacy/site'
import React, { useEffect,useState,useRef } from "react";
import HeroModuleStyleAndInovation from "../../components/heroModuleStyleAndInovation";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../../redux/actions";
import { MOBILE_BREAKPOINT } from "../../config";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Space from "../../components/space"
import ThreeColArticles from '../../components/threeColArticles'
import SocialMediaImages from '../../components/socialMediaImages'
import Sanity from '../../sanity'
import BlockContent from '@sanity/block-content-to-react'
import {serialiser} from '../../serialiser'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
gsap.registerPlugin(ScrollTrigger);
import SEO from "../../components/seo"
import NextAndPreviousButtonWithText from "../../components/nextAndPreviousButtonWithText"
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
  const [scroll, setScroll] = useState(null);
  const [windowScroll, setWindowScroll] = useState(null);
  const scrollWrapper = useRef();

  useEffect(()=>{
    props.setHeroImageLoaded(true);

    ScrollTrigger.defaults({
      scroller: scrollWrapper.current,
      // scroller:"#collectionPage",
      toggleActions:"play none none none",
      scrub: true,
      start: "top 80%",
    });
  },[])
  
  let articleList
  if(props.data.articleList){
    articleList = props.data.articleList.map((article)=>{
      return {
        category: article.articleCategory[0].title,
        categorySlug:article.articleCategory[0].slug.current,
        imageType:'portrait',
        // excerpt:article.excerpt,
        description:article.description,
        author:article.author,
        label:article.label,
        slug:article.slug.current,
        title:article.title,
        portrait:article.articlePortraitImage?urlFor(article.articlePortraitImage).url():null,
      }
    })
  }
  
  // console.log(categorySlug,)
  let seo =props.data.seo;
  return (
   <>
   {!!seo && <SEO
      title={seo.title}
      description={seo.description}
      image={urlFor(seo.image).quality(100).url()} 
    />}
      <Layout static={true} initialBgForNav={true} >
          <div data-scroll-container ref={scrollWrapper}>
            <div className="topSections"> 
             {!!props.data.heroModule && <HeroModuleStyleAndInovation
                category={Array.isArray(props.data.category) &&props.data.category[0].title ?props.data.category[0].title:""}
                topText={!!props.data.heroModule.topText?<BlockContent blocks={props.data.heroModule.topText}/>:<p></p>}
                image={!!props.data.heroModule.img?true:false}
                img={!!props.data.heroModule.img?urlFor(props.data.heroModule.img).url():null}
                desc={!!props.data.heroModule.desc?<BlockContent blocks={props.data.heroModule.desc}/>:<p></p>}
                facebook_image="/images/fb.png"
                twitter_image="/images/twitter.png"
                pintrest_image="/images/451.png"
                mail_image="/images/452.png"
              />}
             
              {!!props.data.content &&  <BlockContent blocks={props.data.content} serializers={serialiser}/>}
              {/* <Space  desktopHeight="21rem" mediumHeight="17.5rem"  tabletLandscapeHeight="15rem" mobileHeight="8rem"/>
              <ImageText
                bigText="I"
                descriptionUp="ntroducing the future of fine jewelry, designed for humans and the planet. We create the world’s first positive-impact and truly sustainable diamonds: alchemized from air and hand-set in responsibly-sourced metals. Aether diamonds are as real as mined with none of the harmful consequences — every carat of our gemstones helps to create a better future."
                image="/images/934.png"
                descriptionDown="Aether diamonds are physically and chemically identical to mined diamonds, except they don’t come from deep inside the earth—they are transformed from excess carbon pollution in the atmosphere that would otherwise contribute to global warming."
              />
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <OneImageslider
                sliderFourImages={sliderFourImages}
                cmsRichContent={true}
                shortHeading="Love To The Future "
                heading=" Each <i> Aether</i> piece defines the highest standards for responsible social and environmental practices, <i> prioritizing</i> the<i> wellbeing</i> of life on<i> earth:</i>  no hazardous working conditions."
              />
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <ThreeImagesText
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
                nextArticle="Next Article"
                previousArticle="Previous Article"
              />
              
              */}
             {!!props.previousArticle && !!props.nextArticle && <NextAndPreviousButtonWithText/> }
              <Space  desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="5rem"/>
              <div className="section6 paddedContent">
                <div className="">
                  {!!articleList && 
                    <ThreeColArticles
                      title="Related Articles"
                      articleCol={articleList}
                    />
                  }
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

export async function getStaticPaths(){
    let paths=[]
    let query=`*[_type=="article"]{"slugParams":slug.current}`
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
    let query=`*[_type=="article" && slug.current=="${params.slug}"]{
      content,
      heroModule,
      seo,
      "category":articleCategory[]->,
      "articleList":referenceArticles[]->{"articleCategory":articleCategory[]->,...},
      nextArticleLink,
      previousArticleLink
    }`
    let errors=false;
    try{
        data=await Sanity.fetch(query)
        data=Array.isArray(data)?data[0]:null
        return {props:{site: await getSite(), data,errors}, revalidate:60}
    }catch(err){
        // console.log(err)
        return {props:{site: await getSite(), data,errors}, revalidate:60}

    }
    
}
// *[_type=="article" && slug.current=="single-article-1"]
// {
//   content,
//   heroModule,
//   seo,
//   "category":articleCategory[]->,
// 	"articleList":referenceArticles[]->,
// nextArticleLink,
// previousArticleLink
// }