import Head from "next/head";


import React from 'react'

export default function SearchEngineOptimisation(props) {
    let url;
    useEffect(()=>{
        url=window.location.href;
    },[])
    return (
            <Head>
                <title>{"title"}</title>
                <meta property="og:title" content={"title"} key="title"/>
                <meta property="og:description" content={"description"} key="description"/>
                <meta property="og:site_name" content={SITENAME} key="siteName"/>
                <meta property="og:type" content="website" key="article"/>
                <meta property="og:url" content={url} key="url"/>
                <meta property="og:image" content={props.image} key="image"/>
            </Head>
    )
}



