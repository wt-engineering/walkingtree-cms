import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../../redux/actions";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SmoothScrollContext } from '../../function';
import {MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT,scrollTriggerStartValue} from "../../config"
import BlockContent from "@sanity/block-content-to-react"
import {serialiser} from "../../serialiser"
import Sanity from "../../sanity"
import SEO from "../../components/seo"
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import Image from "../../components/Image";
gsap.registerPlugin(ScrollTrigger);

function TheGroup(props) {
  useEffect(() => {
    props.setHeroImageLoaded(true);
  }, []);
  let seo =props.data.seo
  return (
      <>
      {!!seo &&
        <SEO
          title={seo.title}
          description={seo.description}
          image={urlFor(seo.image).quality(100).url()} 
        />}
        <Layout static={true} initialBgForNav={true} >
              <div className="topSections">
                <div className="pageTitle alignCenter standardPaddingBottom">
                    <div style={{animationDelay:"0.1s"}} className="mainShortHeading blackish richText fadeUpAnimation marginBottom26">{props.data.banner.heading}</div>
                    <div style={{animationDelay:"0.2s"}} className="bannerHeadingBlack black  richText fadeUpAnimation marginBottom55">{!!props.data.banner.description?<BlockContent blocks={props.data.banner.description}/>:<p></p>}</div>
                    <div style={{animationDelay:"0.3s"}} className="lesserAdditionalPadding fadeUpAnimation">
                        <Image height={565} width={1086} alt="Our Story" originalSrc={urlFor(props.data.banner.image).url()}/>
                    </div>
                </div>
                <BlockContent blocks={props.data.content} serializers={serialiser}/>
              <div className="footerSpace"></div> 
            </div>
        </Layout>
        <style jsx>{`
          .mainImage{
              padding-left:22.84%;
              padding-right:22.84%;
          }
          .blackish{
            padding-top:20rem;
          }
          .footerSpace{
              height:${props.common.footerHeight >= props.common.windowHeight ?`${props.common.windowHeight}px`:`${props.common.footerHeight}px`};
              background:transparent;
          }
          .topSections{
              background:white;
          }
          @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
            .mainImage{
              padding-left:15%;
              padding-right:15%;
            }
          }
          @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
            .mainImage{
              padding-left:10%;
              padding-right:10%;
            }
          }
          @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
            .mainImage{
              padding-left:0%;
              padding-right:0%;
            }
            .blackish{
              padding-top:15rem;
            }
          }
        `}</style>
      </>
    
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(TheGroup);


export async function getStaticProps({params}){
    let data=null;
    let query=`*[_id=="group_en"]`
    let errors=false
    let allArticles=[]
    try{
        data=await Sanity.fetch(query);
        data=Array.isArray(data)?data[0]:null;
        if(Array.isArray(data.content)){
          for(let i=0;i<data.content.length;i++){
            // console.log(data.pageDetails.content[i]._type)
            if(data.content[i]._type=="articleList"){
              // console.log(data.pageDetails.content[i].articleCol.explore)
              let exploreArticles=data.content[i].articleCol.explore;
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
              data.content[i].allArticles=allArticles
            }
          }
        }
        return {props:{data}, revalidate:60}
      }catch(err){
        return {props:{errors,data}, revalidate:60}
      }
    // try{
    //     data=await Sanity.fetch(query);
    //     data=Array.isArray(data)?data[0]:null;
    //     return{ props:{
    //         errors,data
    //     }
    // }
    // }catch(err){
    //     return {props:{errors,data}, revalidate:60}
    // }
}