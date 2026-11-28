import { getSite } from '@/lib/legacy/site'
import React, { useEffect,useState,useRef } from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../../redux/actions";
import HeroModulePeople from "../../components/heroModulePeople";
import OurResponse from "../../components/ourResponse";
import Products from "../../components/products";
import FullImage from '../../components/fullImage'
import LivingWage from "../../components/livingWage";
import HorizontalSlider from "../../components/horizontalSlider";
import Intepret from "../../components/intepret";
import ChampioningWomen from "../../components/championingWomen";
import Space from "../../components/space";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SmoothScrollContext } from '../../function';
import { MOBILE_BREAKPOINT } from "../../config";
import Sanity from '../../sanity'
import BlockContent from '@sanity/block-content-to-react'
import {serialiser} from '../../serialiser'
import HeroModule from "../../components/heroModule";
const imageBuilder = imageUrlBuilder(Sanity);
import {buildFileUrl, parseAssetId} from '@sanity/asset-utils'
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../../components/seo"
const horizontalSection = [
  { img: "/images/port.png" },
  { img: "/images/506.png" },
  { img: "/images/529.png" },
  { img: "/images/621.png" },
];

gsap.registerPlugin(ScrollTrigger);

function People(props) {
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
  let seo =props.data.pageDetails.seo;
  return (
    <>
      {!!seo && <SEO
        title={seo.title}
        description={seo.description}
        image={urlFor(seo.image).quality(100).url()} 
      />}
      
      <Layout static={true} paddingTop={false} initialBgForNav={true}>
          <div data-scroll-container ref={scrollWrapper}>
            <div className="topSections">
              {props.currentPage=="responsiblity" &&
                <HeroModule
                  // mainImageMobile={urlFor(props?.data?.heroModule?.mainImageMobile).quality(100).url()}
                  mainImageMobile={!!props?.data?.heroModule?.mainImageMobile? urlFor(props?.data?.heroModule?.mainImageMobile).quality(100).url():null}
                  mainImage={!!props?.data?.heroModule?.mainImage ?  urlFor(props?.data?.heroModule?.mainImage).quality(100).url():null}
                  // mainImage={urlFor(props?.data?.heroModule?.mainImage).quality(100).url()}
                  shortHeading={props.data.heroModule.shortHeading}
                  mainHeading={props.data.heroModule.mainHeading}
                  desc={!!props.data.heroModule.desc?<BlockContent  blocks={props.data.heroModule.desc} serializers={serialiser}></BlockContent>:<p className="marginBottom10"></p>}
                  button={props?.data?.heroModule?.cta?.buttonText ? true : false}
                  cta={props?.data?.heroModule?.cta}
                  mediaType={props?.data?.heroModule?.mediaType}
                  video={!!props?.data?.heroModule?.video? props?.data?.heroModule?.video:null}
                  videoUrl={!!props?.data?.heroModule?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
                  videoUrlMobile={!!props?.data.heroModule?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
                />
              }
              <BlockContent blocks={props.data.pageDetails.content} serializers={serialiser}/>
            </div>
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
export default connect(mapStateToProps, { setHeroImageLoaded })(People);

export async function getStaticPaths(){
    let paths=[]
    // let query='*[_type=="creativeProcess"]{"slugParams":pageDetails.uri}'
    let query='*[_type=="csr"]{"slug":pageDetails.uri}'
    let category=await Sanity.fetch(query);
    if(Array.isArray(category)){
        for(let i=0;i<category.length;i++){
            paths.push({params:{slug:category[i].slug}})
        }
    }else{
        // console.log("invalid slug")
    }
    return {
        paths,
        fallback:'blocking'
    }
}
export async function getStaticProps({params}){
    let data=null;
    let errors=false
    let currentPage=params.slug
    // let query=`*[_type=="creativeProcess" && pageDetails.uri=="${params.slug}"]`
    let query=`*[_type=="csr" && pageDetails.uri=="${params.slug}"]`
    let allArticles=[]
    try{
        data=await Sanity.fetch(query);
        data=Array.isArray(data)?data[0]:null;
        if(Array.isArray(data.pageDetails.content)){
          for(let i=0;i<data.pageDetails.content.length;i++){
            // console.log(data.pageDetails.content[i]._type)
            if(data.pageDetails.content[i]._type=="articleList"){
              // console.log(data.pageDetails.content[i].articleCol.explore)
              let exploreArticles=data.pageDetails.content[i].articleCol.explore;
              for(let j=0;j<exploreArticles.length;j++){
                let ref=exploreArticles[j]._ref;
                // console.log(ref)
                let articleQuery=`*[_type=="article" &&_id=="${ref}"]{articleCategory[]->{"slug":slug.current,title},
                author,
                description,
                excerpt,
                title,
                articlePortraitImage,
                label,
                "slug":slug.current}`
                let article=await Sanity.fetch(articleQuery);
                article=Array.isArray(article) ? article[0]:null;
                allArticles.push(article)
              }
              data.pageDetails.content[i].allArticles=allArticles
            }
          }
        }
        return {props:{site: await getSite(), data,errors,currentPage}, revalidate:60}
    }catch(err){
        errors=true
        return {props:{site: await getSite(), errors,data}, revalidate:60}
    }
}
