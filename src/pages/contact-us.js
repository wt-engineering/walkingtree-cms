import React from "react";
import { connect } from "react-redux";
import { setHeroImageLoaded } from "../redux/actions";
import {MOBILE_BREAKPOINT} from '../config'
import Layout from "../components/layout";
import Space from "../components/space";
import HeroModule from '../components/heroModule'
import ContactForm from "../components/contactForm";
import Sanity from "../sanity"
import BlockContent from '@sanity/block-content-to-react'
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import SEO from "../components/seo"
function ContactUs(props) {
    // console.log(props.data)

    let seo=props.data.seo
    let formType =[
      {
        enquiryType: 'Business Development'
      },
      {
        enquiryType: 'Media Relations'
      },
      {
        enquiryType: 'Careers'
      },
      {
        enquiryType: 'Others'
      },
    ]
    return (
        <>
          {!!seo &&
          <SEO
          title={seo.title}
          description={seo.description}
          image={urlFor(seo.image).quality(100).url()} 
        />}
           <Layout static={true}>
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
                        <ContactForm
                           heading={props.data.contactForm.heading}
                           shortDesc={props.data.contactForm.shortDesc}
                           img={urlFor(props.data.contactForm.img).url()}
                           mapItems={formType}
                        />
                        <Space desktopHeight="21rem" mediumHeight="17.5rem" tabletLandscapeHeight="15rem"mobileHeight="7.9rem"/>
                        {/* <FullWidthBoxWithTextOnTheLeft  
                        shortHeading={props.data.fourStepText.shortHeading}
                        smallHeading1={props.data.fourStepText.smallHeading1}
                        smallHeading2={props.data.fourStepText.smallHeading2}
                        desc={props.data.fourStepText.desc}
                        /> */}
                        {/* <Space desktopHeight="4.6rem" tabletLandscapeHeight="4rem" mobileHeight="3.9rem" /> */}
                        {/* <div ref={mapAnimationRef}><Map mapItems={props.data.map}/></div>   */}
                       
                  </div>
                  {/* <div className="footerSpace"></div>  */}
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
    )
}

function mapStateToProps({ common }) {
    return { common };
  }
  export default connect(mapStateToProps, { setHeroImageLoaded })(ContactUs);

export async function getStaticProps({params}){
    let data=null;
    let errors=false
    let query=`*[_type=="contact"]`
    try{
        data = await Sanity.fetch(query)
        data=Array.isArray(data)?data[0]:null
        return {props:{data,errors}, revalidate:60}
    }catch(err){
        errors=true;
        return {props:{data,errors}, revalidate:60}
    }
}
  