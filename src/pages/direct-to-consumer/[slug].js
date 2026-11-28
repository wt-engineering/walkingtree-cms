import React from "react";
import Layout from "../../components/layout";
import { MOBILE_BREAKPOINT } from "../../config";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../../redux/actions";
import HeroModule from "../../components/heroModule"
import Sanity from '../../sanity'
import BlockContent from '@sanity/block-content-to-react'
import {serialiser} from '../../serialiser'
const imageBuilder = imageUrlBuilder(Sanity);
import {buildFileUrl, parseAssetId} from '@sanity/asset-utils'
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../../components/seo"
function UnsaidJewels(props) {
  let seo =props.data.pageDetails.seo
  return (
    <>
       {!!seo && <SEO
              title={seo.title}
              description={seo.description}
              image={urlFor(seo.image).quality(100).url()} 
            />
      }
      <Layout static={true}>  
          <div className="topSections">
            {/* <HeroModuleUnsaidJewel
              mainImageMobile="/images/hero2.png"
              mainImage="/images/hero2.png"
              shortHeading="Private Label Brand"
              mainHeading="Unsaid Jewels"
              bannerDescription1="Unsaid is a collection of symbols inspired by the emotions and the stories of real people from across the world"
              bannerDescription2="www.unsaidjewels.com"
            /> */}
            <HeroModule
              // mainImageMobile={urlFor(props?.data?.heroModule?.mainImageMobile).quality(100).url()}
              mainImageMobile={!!props?.data?.heroModule?.mainImageMobile? urlFor(props?.data?.heroModule?.mainImageMobile).quality(100).url():null}
              mainImage={!!props?.data?.heroModule?.mainImage ?  urlFor(props?.data?.heroModule?.mainImage).quality(100).url():null}
              shortHeading={props.data.heroModule.shortHeading}
              mainHeading={props.data.heroModule.mainHeading}
              desc={!!props.data.heroModule.desc?<BlockContent  blocks={props.data.heroModule.desc} serializers={serialiser}></BlockContent>:<p className="marginBottom10"></p>}
              button={props?.data?.heroModule?.cta?.buttonText ? true : false}
              cta={props?.data?.heroModule?.cta}
              mediaType={props?.data?.heroModule?.mediaType}
              video={!!props?.data?.heroModule?.video? props?.data?.heroModule?.video:null}
              videoUrl={!!props?.data?.heroModule?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
              videoUrlMobile={!!props?.data.heroModule?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
            />
            <BlockContent blocks={props.data.pageDetails.content} serializers={serialiser}/>
          </div>
          <div className="footerSpace"></div> 
      </Layout>
      <style jsx>{`
          .footerSpace{
            // height:589px;
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
export async function getStaticPaths(){
    let paths=[]
    let query=`*[_type=="directToConsumer"]{"slugParams":pageDetails.uri}`
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
    let query=`*[_type=="directToConsumer" && pageDetails.uri=="${params.slug}"]`
    let errors=false;
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
        return {props:{data}, revalidate:60}
      }catch(err){
        return {props:{errors,data}, revalidate:60}
      }
}