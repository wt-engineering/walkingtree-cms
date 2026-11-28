import { getSite } from '@/lib/legacy/site'
import React, { useEffect, useRef, useState } from "react";
import HeroModule from "../../components/heroModule";
import Layout from "../../components/layout";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../../redux/actions";
import Sanity from '../../sanity'
import BlockContent from '@sanity/block-content-to-react'
import {serialiser} from '../../serialiser'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import {buildFileUrl, parseAssetId} from '@sanity/asset-utils'
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../../components/seo"
gsap.registerPlugin(ScrollTrigger);

function DesignAndCraftsmanship(props) {
  const scrollWrapper = useRef();
  
  useEffect(() => {
    ScrollTrigger.defaults({
      scroller: scrollWrapper.current,
      // scroller:"#collectionPage",
      toggleActions:"play none none none",
      scrub: false,
      start: "top 80%",
    });
  }, []);
  let seo=props.data.pageDetails.seo
  return (
    <>
    {!!seo && <SEO
              title={seo.title}
              description={seo.description}
              image={urlFor(seo.image).quality(100).url()} 
            />}
      <Layout static={true}>
          <div id="homePage" data-scroll-container ref={scrollWrapper}>
            <div className="topSections">
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
              videoUrlMobile={!!props?.data.heroModule?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(props?.data?.heroModule?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null}
            />
              <BlockContent 
                blocks={props.data.pageDetails.content}
                serializers={serialiser}
              /> 
              {/* <Space desktopHeight="21rem" mediumHeight="17.5rem" tabletLandscapeHeight="15rem" mobileHeight="8rem"/>
              <TextImageSection
                text1="Closer look at the key areas of our expertise"
                text2="The tradition of curiosity and openness is one that Walking Tree has long embraced, and it is actively encouraged throughout the house"
                text3="Dialogue is essential as a way to keep looking and thinking. a huge part of our process comes about through dialogue with artists, industry experts, clients. There is a dialogue with every piece we create."
                buttonText="EXPLORE OUR PROCESS"
                buttonTextOnHover="LEARN MORE"
                img="/images/secondSectionImg.png"
                imgCaptionBlack="Atelier Mumbai, India."
                imgCaptionGrey="Facade of our manufacturing headquarters"
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
              <TwoImgCol
                img1="/images/section3-1.png"
                img2="/images/section3-2.png"
                shortHeading="Inspiration"
                desc="The perfect phrase for us — an old-world exclamation that exudes a feeling of amazement. This aligns with the inspiration and vision for many of our projects: They should be distinctive, and elicit a sense of wonder for clients and our teams alike."
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
              <SliderSection sliderData={sliderData} />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
              <CultureImages
                img1="/images/col1-1.png"
                img1GreyCaption="Green certified mines in the,"
                img1BlackCaption="South Of Africa"
                img2="/images/col1-2.png"
                img2Caption1="Development of"
                img2Caption2="Unfabulous"
                img2Caption3="collection in our"
                img2Caption4="Asia studio"
                img3="/images/col3-1.png"
                img4="/images/col3-2.png"
                shortHeading="Intepret"
                heading1="Its about having "
                heading2="people "
                heading3="and "
                heading4="new eyes "
                heading5="it moves us forward through a hyper collaborative mode"
                desc1="We believe in rigorous yet cultural aesthetic, applying the classical proportions of design with science and innovative ground work."
                desc2="Our collections are characterised with gestural frugality and confidence of vision; result is series of stages upon which the structure and the collection comes together."
                desc3="We find its interpretation by exploring interpretations inside and outside the organisation through a hyper - collaborative mode."
                img3ForTablet="/images/1.png"
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
              <Trends
                changeTextInTrendsSection={false}
                trendCarouselData={trendCarousel}
                shortHeading="Aesthetic & Trends"
                topText1="Attention to form, material, story, provenance these are the factors which unites our processes."
                topText2="We are inspired by aesthetics and trends that exist beyond jewellery as a category."
                bottomSubText1="Anna Sui "
                bottomSubText2="has overseen celebrated collections with the house. Her good judgement and exceptional taste are attributes that are "
                bottomSubText3="innate, well honed"
                bottomSubText4=", and, in many ways, "
                bottomSubText5="alchemical."
                bottomRightText1="“It is a mix of intuition, analysis, scanning ideas and thoughts, understanding and a lot of innovation.”"
                bottomRightSubText1="Anna Sui, "
                bottomRightSubText2="Senior Design Lead"
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
              <CraftsmanshipSection
                leftImage1="/images/crafts1.png"
                leftImage2="/images/crafts2.png"
                leftImage3="/images/crafts3.png"
                leftImage4="/images/crafts5.png"
                leftImage5="/images/crafts6.png"
                rightImage="/images/crafts4.png"
                shortHeading="Generational Expertise"
                mainHeadingSub1="The hands behind the "
                mainHeadingSub2="craftsmanship"
                greyDescription="The master artisans helps us pioneer collections and jewellery along with modern technology and innovation."
                text1="The artisans are at the heart of the company and have played a fundamental role since the very beginning. They are key to the precision and reliability of jewellery, as well as the unrivalled reputation for excellence. They give a personal touch to each piece."
                text2="Far removed from the throwaway culture, the master artisans go to great lengths to ensure each piece’s longevity."
                rightGreyCaption="consequat semper, "
                rightBlackCaption="Process Name"
                leftGreyCaption="Polishing gives the final lustre, "
                leftBlackCaption="Termineur"
                bottomTextTablet="In each workshop, with each different process, craftsmen perpetuate classic techniques and traditions, working with the rigour and patience of their forebears, while also integrating highly sophisticated technologies. As part of an historic continuum, they keep an ancient heritage alive and take the art of jewellery making to new heights thanks to the impressive production facilities made available to them."
                slNo="01."
                bottomText="In each workshop, with each different process, craftsmen perpetuate classic techniques and traditions, working with the rigour and patience of their forebears, while also integrating highly sophisticated technologies. As part of an historic continuum, they keep an ancient heritage alive and take the art of jewellery making to new heights thanks to the impressive production facilities made available to them."
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
              <HorizontalSection
                defaultImage="/images/horImage.png"
                hoverImage="/images/horizontalOnHover.png"
                defaultText="Accumsan tortor posuere ac ut consequat semper viverra nam libero Et tortor consequat id"
                hoverText="Porta nibh venenatis cras sed felis. In fermentum et sollicitudin ac orci phasellus egestas tellus."
                greyCaption="Laser beam that’s guided by water to cut expertly, moving the beauty of a diamond, "
                blackCaption="Machine or technical name"
              />
              <Space desktopHeight="30rem" mediumHeight="25rem" tabletLandscapeHeight="22.5rem" mobileHeight="15rem"/>
              <Designers
                shortHeading="Designers & Engineers"
                desc="Collaborations between artists, designers, engineers and craftsmen are just one vital component in keeping each piece we create fresh and invigorated."
                leftImage="/images/de1.png"
                rightImage="/images/de2.png"
                text1="Designers and engineers work in porous, cross-functional teams to experiment with designing, prototyping, engineering capabilities and craft and material possibilities to push each idea into its most appropriate form."
                text2="During the initial phase of research and development, when a new collection is being perfected and the first laboratory tests are performed, the craftsmen experience helps engineers and designers to decide upon technical aspects of the design, manufacture and future maintenance of the jewellery piece."
                greyCaption="Engineer Lead working on prototype, "
                blackCaption="Placeholder"
              /> */}
            </div>
          </div>
      </Layout>
      <style jsx>{`
        .footerSpace {
          display: inline-block;
          height:589px;
          background: transparent;
          pointer-events: none;
        }
        .topSections {
          background: white;
        }
      `}</style>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setHeroImageLoaded })(DesignAndCraftsmanship);

export async function getStaticPaths(){
    let paths=[]
    let query='*[_type=="creativeProcess"]{"slugParams":pageDetails.uri}'
    let category=await Sanity.fetch(query);
    if(Array.isArray(category)){
        for(let i=0;i<category.length;i++){
            paths.push({params:{slug:category[i].slugParams}})
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
    let query=`*[_type=="creativeProcess" && pageDetails.uri=="${params.slug}"]`
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
        return {props:{site: await getSite(), data}, revalidate:60}
      }catch(err){
        return {props:{site: await getSite(), errors,data}, revalidate:60}
      }
    // try{
    //     data=await Sanity.fetch(query);
    //     data=Array.isArray(data)?data[0]:null;

    //     return {
    //         props:{
    //             data,errors
    //         }
    //     }
    // }catch(err){
    //     errors=true
    //     return{
    //         props:{
    //             errors,data
    //         }
    //     }
    // }
}

{/* <BlockContent 
                blocks={props.data.pageDetails.content}
                serializers={serialiser}
              /> */}