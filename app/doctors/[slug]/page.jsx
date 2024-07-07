import dynamic from "next/dynamic";
import MobileMenu from "@/components/header/MobileMenu";
// import Social from "@/components/candidates-single-pages/social/Social";
// import JobSkills from "@/components/candidates-single-pages/shared-components/JobSkills";
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

  // const detailsRes = await fetch(
  //   `https://vni.fe7.mytemp.website/wp-json/wp/v2/doctors/${doctor.databaseId}`
  // );
  // const details = await detailsRes.json();



  // console.log(doctor);
  
  const cancerTreated = doctor?.doctorsoptions?.cancerTreated || [];

  const  insuranceHeading = doctor?.doctorsoptions?.insurancesHeading || 'Insurances';
  const  specializationsHeading = doctor?.doctorsoptions?.specializationsHeading || 'Specializations';
  const  researchAndPublicationsHeading = doctor?.doctorsoptions?.researchAndPublicationsHeading || 'Research and Publications';
  const  professionalMembershipsHeading = doctor?.doctorsoptions?.professionalMembershipsHeading || 'Professional Memberships and Affiliations';
  const  clinicalExperienceHeading = doctor?.doctorsoptions?.clinicalExperienceHeading || 'Clinical Experience';
  const  educationHeading = doctor?.doctorsoptions?.educationHeading || 'Education';
  const  cancerTreatedHeading = doctor?.doctorsoptions?.cancerTreatedHeading || 'Cancer Treated';
  const  bookAppointmentLabel = doctor?.doctorsoptions?.bookAppointmentLabel || 'Book An Appointment';
  const  awardsHeading = doctor?.doctorsoptions?.awardsHeading || 'Awards';
  


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
                      {doctor?.specializations?.nodes?.map((val) => (
                        <h6 key={val.id} className="designation mb-3">
                          {val?.name}
                        </h6>
                      ))}
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
                        <h3>{educationHeading}</h3>
                      </div>
                      {/* educations */}
                      <div className="doc-custom-lists">
                        {parseHtml(doctor?.doctorsoptions?.educations || "")}
                      </div>

                      {/* {educations?.map((item, idx) => (
                        <div className="resume-block" key={idx}>
                          <div className="inner">
                            <span className="name">
                              {item?.schoolname.substring(0, 1) + ""}
                            </span>
                            <div className="title-box">
                              <div className="info-box custom-info-box">
                                {item?.degree && (
                                  <span className="px-1"> {item?.degree}:</span>
                                )}
                                <h3>{item?.schoolname} </h3>
                              </div>
                              {item?.daterange && (
                                <div className="edit-box">
                                  <span className="year">
                                    {item?.daterange}
                                  </span>
                                </div>
                              )}
                            </div>
                            {item?.description && (
                              <div className="text">{item?.description}</div>
                            )}
                          </div>
                        </div>
                      ))} */}
                    </div>
                  ) : null}

                  {/* <!-- educations Resume End --> */}

                  {/* <!-- awards Start --> */}
                  {doctor?.doctorsoptions?.awardss ? (
                    <div className={`resume-outer theme-yellow`}>
                      <div className="upper-title">
                        <h3>{awardsHeading}</h3>
                      </div>
                      {/* educations */}
                      <div className="doc-custom-lists">
                        {parseHtml(doctor?.doctorsoptions?.awardss || "")}
                      </div>

                    </div>
                  ) : null}
                  {/* <!-- awards Resume End --> */}
                  {/* <!-- professionalMemberships Start --> */}
                  {doctor?.doctorsoptions?.professionalMemberships ? (
                    <div className={`resume-outer theme-blue`}>
                      <div className="upper-title">
                        <h3>{professionalMembershipsHeading}</h3>
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
                        <h3>{clinicalExperienceHeading}</h3>
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
                  {doctor?.doctorsoptions?.researchPublicationsss ? (
                    <div className={`resume-outer theme-yellow`}>
                      <div className="upper-title">
                        <h3>{researchAndPublicationsHeading}</h3>
                      </div>
                      {/*  */}
                      <div className="doc-custom-lists">
                        {parseHtml(
                          doctor?.doctorsoptions?.researchPublicationsss || ""
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
                       {bookAppointmentLabel}
                    </Link>
                  </div>
                  <div className="cancer_treted pb-5 pt-4">
                    <h4 className="widget-title pb-1">{cancerTreatedHeading}</h4>
                    <ul className="post-tags flex items-center flex-wrap">
                      {cancerTreated?.map((val, i) => (
                        <li className="" key={i}>
                          <Link className="text-white" href={`/cancers/${val?.slug}`}>
                            {val?.title.replace(/(<([^>]+)>)/gi, "")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {doctor?.doctorsoptions?.specializationss && (
                    <div className="sidebar-widget">
                      {
                        <div className="widget-content">
                          <h4 className="widget-title">{specializationsHeading}</h4>
                          <div>
                            {parseHtml(
                              doctor?.doctorsoptions?.specializationss || ""
                            )}
                          </div>
                        </div>
                      }
                    </div>
                  )}

                  {/* End .sidebar-widget conadidate overview */}
                  {doctor?.doctorsoptions?.insurancess ? (
                    <div className="sidebar-widget">
                      <h4 className="widget-title">{ insuranceHeading}</h4>
                      <div className="widget-content insurance_list">
                        {parseHtml(doctor?.doctorsoptions?.insurancess || "")}
                        {/* <ul className="job-skills">
                          <JobSkills insurances={insurances} />
                        </ul> */}
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
              awards={doctor?.doctorsoptions?.awardss}
              professionalMemberships={
                doctor?.doctorsoptions?.professionalMemberships
              }
              clinicalExperience={doctor?.doctorsoptions?.clinicalExperiences}
              researchpublications={
                doctor?.doctorsoptions?.researchPublicationsss
              }
              cancerTreated={cancerTreated}
              insurances={doctor?.doctorsoptions?.insurancess}
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
