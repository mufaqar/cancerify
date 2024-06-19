import dynamic from "next/dynamic";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import Details from "@/components/Cancers-listing/Cancer-single/Details";
import client from "@/lib/ApolloClient";
import { GET_CANCER, GET_CANCER_SEO } from "@/lib/Queries";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";

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

  if(!cancer?.title) return notFound();

  const symptoms = cancer?.cancersOptions?.symptoms;
  const riskFactors = cancer?.cancersOptions?.riskFactors;

  const blocks = JSON.parse(cancer?.blocksJSON);

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}



      <section className="job-detail-section">
        {/* <!-- Upper Box --> */}
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven style-three">
              <div className="inner-box">
                <Breadcrumb title={cancer?.title} meta={cancer?.title} /> 
                
                {/* End .content */}
              </div>
            </div>
            {/* <!-- Job Block --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

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
                        {symptoms?.map((symptom) => (
                          <li className="p-1" key={symptom.id}>
                            {symptom.name}
                          </li>
                        ))}
                        {/* <li></li> */}
                      </ul>
                    </div>

                    <div className="btn-box pt-4">
                      <Link href="#" className="theme-btn btn-style-three">
                        Find a doctor
                      </Link>
                    </div>
                  </div>
                  {/* End company-widget */}

                  <div className="sidebar-widget company-widget">
                    <h4 className="widget-title"> Risk Factors</h4>
                    <div className="widget-content">
                      {/*  compnay-info */}
                      <ul className="company-info mt-0 custom-risk">
                        {
                            riskFactors?.map((risk) => (
                                <li className="p-1" key={risk.id}>
                                    {risk.name}: <p>{risk?.description}</p>
                                </li>
                            ))
                        }


                      </ul>
                    </div>
                  </div>
                  {/* End sidebar-widget */}

                  {/* End contact-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}

              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                {/*  job-detail */}
                <Details blocks={blocks}/>
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
