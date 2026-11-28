import { getSite } from '@/lib/legacy/site'
import React from "react";
import SEO from "../../components/seo";
import Layout from "../../components/layout";

function Investor() {
  const seo = {
    title: "Investor",
  };
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <Layout static={true}>
        <div className="container">
          <h1>Investor</h1>
          <br />
          <a href="investor/files/Form_MGT_7_WTVPL_FY_2022-23.pdf">
            Form_MGT_7_WTVPL_26.11.2024-Revised-Signed.pdf
          </a>
          <br />
          <br />
          <a href="investor/files/Form_MGT_7_WTVPL_FY_2022-23.pdf">
            Form_MGT_7_WTVPL_FY 2022-23.pdf
          </a>
          <br />
          <br />
        </div>
      </Layout>
      <style jsx>{`
        .container {
          padding: 100px 20px 0;
        }
        h1 {
          font-size: 3rem;
        }
      `}</style>
    </>
  );
}

export default Investor;

export async function getStaticProps(){
  return {props:{site: await getSite()}, revalidate:60}
}
