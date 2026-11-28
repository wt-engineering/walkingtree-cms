import { getSite } from '@/lib/legacy/site'
import React from "react";
import Layout from "../components/layout";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import HeroModule from '../components/heroModule'
import BlockContent from "@sanity/block-content-to-react"
import Sanity from "../sanity"
import {serialiser} from '../serialiser'
import {buildFileUrl, parseAssetId} from '@sanity/asset-utils'
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../components/seo"
const urlFor = (source) => imageBuilder.image(source);
const imageBuilder = imageUrlBuilder(Sanity);
function Home(props) {
    let seo=props.data.pageDetails.seo
    return (
      <>
        {!!seo && 
          <SEO
            title={seo.title}
            description={seo.description}
            image={urlFor(seo.image).quality(100).url()} 
          />
        }
        <Layout static={true}>
          <div className="">
                  <HeroModule
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
                      videoUrlMobile={!!props?.data?.heroModule?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
                    />
          </div>        
                  <BlockContent blocks={props.data.pageDetails.content} serializers={serialiser}/>
        </Layout>
      </>
    );
  }
function mapStateToProps({ common }) {
return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(Home);
export async function getStaticProps({params}) {
  let data=null;
  let errors=false
  let query=`*[_id=="home_en"]`
  let allArticles=[]
  try{
    data=await Sanity.fetch(query);
    data=Array.isArray(data) ? data[0] : null
    if(Array.isArray(data.pageDetails.content)){
      for(let i=0;i<data.pageDetails.content.length;i++){
        if(data.pageDetails.content[i]._type=="articleList"){
          let exploreArticles=data.pageDetails.content[i].articleCol.explore;
          for(let j=0;j<exploreArticles.length;j++){
            let ref=exploreArticles[j]._ref;
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
    return {props:{site: await getSite(), data}, revalidate:60}
  }catch(err){
    return {props:{site: await getSite(), errors,data}, revalidate:60}
  }
}