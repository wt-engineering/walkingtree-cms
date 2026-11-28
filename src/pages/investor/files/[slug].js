import React from "react";
import SEO from "../../../components/seo";
import Layout from "../../../components/layout";

function FilesToDownload() {
  const seo = {
    title: "Download",
  };
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <Layout static={true}>
        <div className="container standardPaddingBottom">
          <h1 className="mbHeading topText1 smallHeading black richText">Page Not Found</h1>
          <p>
            The document you are looking for is currently unavailable. It may
            have been moved or is in the process of being updated.
          </p>
          <br />
        </div>
      </Layout>
      <style jsx>{`
        .container {
        padding: 100px 20px 0;
        }
      `}</style>
    </>
  );
}

export default FilesToDownload;
