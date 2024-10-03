import dynamic from "next/dynamic";
import MobileMenu from "@/components/header/MobileMenu";
import client from "@/lib/ApolloClient";
import { GET_DOCTOR, GET_DOCTORS_SEO } from "@/lib/Queries";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Disclaimer from "@/components/Home/Disclaimer";
import DoctorMobileDetails from "@/components/doctor-listings/Mobile/DoctorMobileDetails";
import parseHtml from "@/lib/Parser";

export async function generateMetadata({ params: { slug } }) {
  const res = await client.request(
    GET_DOCTORS_SEO,
    // variables are type-checked too!
    { id: slug }
  );

  const seo = res?.doctor?.seo || {};
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

const Page = async ({ params: { slug } }) => {
  const res = await client.request(GET_DOCTOR, { id: slug });
  const doctor = res?.doctor || {};

  const cancerTreated = doctor?.doctorsoptions?.cancerTreated || [];

  const insuranceHeading = doctor?.doctorsoptions?.insurancesHeading;
  const specializationsHeading = doctor?.doctorsoptions?.specializationsHeading;
  const researchAndPublicationsHeading =
    doctor?.doctorsoptions?.researchAndPublicationsHeading;
  const professionalMembershipsHeading =
    doctor?.doctorsoptions?.professionalMembershipsHeading;
  const clinicalExperienceHeading =
    doctor?.doctorsoptions?.clinicalExperienceHeading;
  const educationHeading = doctor?.doctorsoptions?.educationHeading;
  const cancerTreatedHeading = doctor?.doctorsoptions?.cancerTreatedHeading;
  const bookAppointmentLabel = doctor?.doctorsoptions?.bookAppointmentLabel;
  const awardsHeading = doctor?.doctorsoptions?.awardsHeading;

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="candidate-detail-section">
        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row cancer_row  desktop-hidden">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="candidate-block-five desktop-hidden">
                  <div className="inner-box">
                    <div className="content doctor_content">
                      <h4 className="name">{doctor?.title}</h4>
                      <div className="flex items-center ">
                      {doctor?.specializations?.nodes?.map((val) => (
                        <h6 key={val.id} className="designation mb-3">
                          {val?.name}
                        </h6>
                      ))}
                      </div>
                      <div className="cancer_treted pb-3 flex items-center">
                        <h6 className="text-gray-2 pr-4 line-height-38">
                          {cancerTreatedHeading || "Cancer Treated"}:
                        </h6>
                        <ul className="post-tags grid grid-cols-3 grid-cols-md-2 mb-cust-lists-23">
                          {cancerTreated?.map((val, i) => (
                            <li className="bg-gray" key={i}>
                              <Link
                            className="cancer-text-gray"
                            href={`/cancers/${val?.slug}`}
                          >
                            {val?.title.replace(/(<([^>]+)>)/gi, "")}
                          </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ul className="candidate-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {doctor?.doctorsoptions?.address}
                        </li>
                        <li>
                          <a
                            href={`tel:${doctor?.doctorsoptions?.phoneNumber}`}
                          >
                            <span className="icon flaticon-telephone"></span>
                            {doctor?.doctorsoptions?.phoneNumber}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  <!-- Candidate block Five --> */}

                <div className="job-detail">
                  <div
                    className="content_details"
                    dangerouslySetInnerHTML={{
                      __html: `${doctor?.doctorsoptions?.aboutDoctor}`,
                    }}
                  />

                  {/* <!-- educations Start --> */}
                  {doctor?.doctorsoptions?.educations ? (
                    <div className={`resume-outer theme-blue`}>
                      <div className="upper-title">
                        <h3>{educationHeading || "Education"}</h3>
                      </div>
                      {/* educations */}
                      <div className="doc-custom-lists">
                        {parseHtml(doctor?.doctorsoptions?.educations || "")}
                      </div>

                      
                    </div>
                  ) : null}

                  {/* <!-- educations Resume End --> */}

                  {/* <!-- awards Start --> */}
                  {doctor?.doctorsoptions?.awards ? (
                    <div className={`resume-outer theme-yellow`}>
                      <div className="upper-title">
                        <h3>{awardsHeading || "Awards"}</h3>
                      </div>
                      {/* educations */}
                      <div className="doc-custom-lists">
                        {parseHtml(doctor?.doctorsoptions?.awards || "")}
                      </div>
                    </div>
                  ) : null}
                  {/* <!-- awards Resume End --> */}
                  {/* <!-- professionalMemberships Start --> */}
                  {doctor?.doctorsoptions?.professionalMemberships ? (
                    <div className={`resume-outer theme-blue`}>
                      <div className="upper-title">
                        <h3>
                          {professionalMembershipsHeading ||
                            "Professional Memberships and Affiliation"}
                        </h3>
                      </div>
                      {/*  */}
                      <div className="doc-custom-lists">
                        {parseHtml(
                          doctor?.doctorsoptions?.professionalMemberships || ""
                        )}
                      </div>
                    </div>
                  ) : null}

                  {/* <!-- professionalMemberships Resume End --> */}
                  {/* <!-- Clinical Experience: Start --> */}
                  {doctor?.doctorsoptions?.clinicalExperiences ? (
                    <div className={`resume-outer`}>
                      <div className="upper-title">
                        <h3>
                          {clinicalExperienceHeading || "Clinical Experience"}
                        </h3>
                      </div>
                      {/*  */}
                      <div className="doc-custom-lists">
                        {parseHtml(
                          doctor?.doctorsoptions?.clinicalExperiences || ""
                        )}
                      </div>
                    </div>
                  ) : null}

                  {/* <!-- Clinical Experience Resume End --> */}
                  {/* <!-- researchpublications Start --> */}
                  {doctor?.doctorsoptions?.researchPublications ? (
                    <div className={`resume-outer theme-yellow`}>
                      <div className="upper-title">
                        <h3>
                          {researchAndPublicationsHeading ||
                            "Research and Publications"}
                        </h3>
                      </div>
                      {/*  */}
                      <div className="doc-custom-lists">
                        {parseHtml(
                          doctor?.doctorsoptions?.researchPublications || ""
                        )}
                      </div>
                    </div>
                  ) : null}
                  {/* <!-- researchpublications Resume End --> */}

                  {/* <!-- Portfolio --> */}
                </div>
                {/* End job-details */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <div className="candidate-block-five  mb-hidden">
                  <div className="inner-box">
                    <div className="content doctor_content">
                      <h4 className="name">{doctor?.title}</h4>

                      <ul className="candidate-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {doctor?.doctorsoptions?.address}
                        </li>
                        <li>
                          <a
                            href={`tel:${doctor?.doctorsoptions?.phoneNumber}`}
                          >
                            <span className="icon flaticon-telephone"></span>
                            {doctor?.doctorsoptions?.phoneNumber}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Sidebar */}

                <aside className="sidebar">
                  <div className="btn-box">
                    <Link
                      target="__blank"
                      className="theme-btn btn-style-one custom-btn"
                      href={doctor?.doctorsoptions?.bookAppointmentLink || "#"}
                    >
                      {bookAppointmentLabel || "Book An Appointment"}
                    </Link>
                  </div>
     

                  {/* End .sidebar-widget conadidate overview */}
                  {doctor?.doctorsoptions?.insurances ? (
                    <div className="sidebar-widget">
                      <h4 className="widget-title">
                        {insuranceHeading || "Insurance"}
                      </h4>
                      <div className="widget-content insurance_list">
                        {parseHtml(doctor?.doctorsoptions?.insurances || "")}
            
                      </div>
                    </div>
                  ) : null}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
            </div>
            {/*     cancerTreatedHeading  */}
            {/* Mobile version */}
            <DoctorMobileDetails
              doctor={doctor}
              educations={doctor?.doctorsoptions?.educations}
              awards={doctor?.doctorsoptions?.awards}
              professionalMemberships={
                doctor?.doctorsoptions?.professionalMemberships
              }
              clinicalExperience={doctor?.doctorsoptions?.clinicalExperiences}
              researchpublications={
                doctor?.doctorsoptions?.researchPublications
              }
              cancerTreated={cancerTreated}
              insurances={doctor?.doctorsoptions?.insurances}
              specializations={doctor?.doctorsoptions?.specializationss}
              insuranceHeading={insuranceHeading}
              specializationsHeading={specializationsHeading}
              researchAndPublicationsHeading={researchAndPublicationsHeading}
              professionalMembershipsHeading={professionalMembershipsHeading}
              clinicalExperienceHeading={clinicalExperienceHeading}
              educationHeading={educationHeading}
              cancerTreatedHeading={cancerTreatedHeading}
              bookAppointmentLabel={bookAppointmentLabel}
              awardsHeading={awardsHeading}
            />
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}
      <Disclaimer />
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
