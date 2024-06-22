import dynamic from "next/dynamic";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import Details from "@/components/Cancers-listing/Cancer-single/Details";
import client from "@/lib/ApolloClient";
import { GET_CANCER, GET_CANCER_SEO } from "@/lib/Queries";
import { notFound } from "next/navigation";
import FindDocButton from "@/components/Cancers-listing/FindDocButton";
import Header from "@/components/Home/Header";

export async function generateMetadata({ params: { slug } }) {
  const res = await client.request(
    GET_CANCER_SEO,
    // variables are type-checked too!
    { id: slug }
  );

  const seo = res?.cancer?.seo || {};
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
    keywords: `${seo.focuskw},${seo?.metaKeywords}`,
    openGraph: {
      images: seo?.opengraphImage?.sourceUrl
        ? [{ url: seo?.opengraphImage?.sourceUrl }]
        : [],
    },
  };
}

const Page = async ({ params }) => {
  const { slug } = params;

  const resCancer = await client.request(GET_CANCER, { id: slug });
  const cancer = resCancer.cancer;

  if (!cancer?.title) return notFound();

  const symptoms = cancer?.cancersOptions?.symptoms;
  const riskFactors = cancer?.cancersOptions?.riskFactors;
  const topLinks = cancer?.cancersOptions?.topLinks;

  const blocks = JSON.parse(cancer?.blocksJSON);

  const metaDetails = await fetch(`https://vni.fe7.mytemp.website/wp-json/wp/v2/cancers/${cancer?.databaseId}`);
  const metaDetailsJson = await metaDetails.json();




  const metaSymptoms = Object.values(metaDetailsJson?.meta?.symptoms) || [];

  const metaRiskFactors = Object.values(metaDetailsJson?.meta?.riskfactors) || [];

  
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="job-detail-section">

        {/* <!-- job-detail-outer--> */}
        <div className="job-detail-outer reverse">
          <div className="auto-container">
            <div className="row">
              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar pd-right">
                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <h4 className="widget-title"> Symptons</h4>
                      <ul className="list-disc">
                        {metaSymptoms?.map((symptom, idx) => (
                          <li className="p-1" key={idx}>
                            {symptom.title}
                          </li>
                        ))}
                        {/* <li></li> */}
                      </ul>
                    </div>

                    <div className="btn-box pt-4">
                      <FindDocButton title={cancer?.title} />
                    </div>
                  </div>
                  {/* End company-widget */}

                  <div className="sidebar-widget company-widget">
                    <h4 className="widget-title"> Risk Factors</h4>
                    <div className="widget-content">
                      {/*  compnay-info */}
                      <ul className="company-info mt-0 custom-risk">
                        {metaRiskFactors?.map((risk, idx) => (
                          <li className="p-1" key={idx}>
                            {risk.title}: <p>{risk?.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* End sidebar-widget */}
                  <div className="sidebar-widget company-widget">
                    <div className="widget-content ">
                      <h4 className="widget-title">Top Links</h4>
                      <div className="top_links" dangerouslySetInnerHTML={{__html: `${topLinks}`}} />
                    </div>
                  </div>
                  {/* End contact-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}

              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                {/*  job-detail */}
                <Details title={cancer?.title} blocks={blocks} />
                {/* End job-detail */}
              </div>
              {/* End .content-column */}
            </div>
            {/* End row */}
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
