import dynamic from "next/dynamic";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import Contact from "@/components/candidates-single-pages/shared-components/Contact";
import Social from "@/components/candidates-single-pages/social/Social";
import JobSkills from "@/components/candidates-single-pages/shared-components/JobSkills";
import client from "@/lib/ApolloClient";
import { GET_DOCTOR, GET_DOCTORS_SEO } from "@/lib/Queries";
import Link from "next/link";


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
  // https://vni.fe7.mytemp.website/wp-json/wp/v2/doctors/60
  const detailsRes = await fetch(
    `https://vni.fe7.mytemp.website/wp-json/wp/v2/doctors/${doctor.databaseId}`
  );
  const details = await detailsRes.json();

  const educations = details?.meta?.education
    ? Object.values(details?.meta?.education)
    : [];
  const cancerstreated = details?.meta?.cancerstreated
    ? Object.values(details?.meta?.cancerstreated)
    : [];
  const awards = details?.meta?.awards
    ? Object.values(details?.meta?.awards)
    : [];

  const professionalMemberships = details?.meta
    ?.professionalmembershipsaffiliations
    ? Object.values(details?.meta?.professionalmembershipsaffiliations)
    : [];

  const clinicalExperience = details?.meta?.clinicalexperience
    ? Object.values(details?.meta?.clinicalexperience)
    : [];

  const researchpublications = details?.meta?.researchpublications
    ? Object.values(details?.meta?.researchpublications)
    : [];
  
  const insurances= details?.meta?.insurances ? Object.values(details?.meta?.insurances) : [];
  const specializations = details?.meta?.specializations ? Object.values(details?.meta?.specializations) : [];

  // console.log(doctor);


  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="candidate-detail-section">
        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="candidate-block-five">
                  <div className="inner-box">
                    <div className="content">
                      {/* <figure className="image">
                          <Image
                            width={100}
                            height={100}
                            src={candidate?.avatar}
                            alt="avatar"
                          />
                        </figure> */}
                      <h4 className="name">{doctor?.title}</h4>

                      <ul className="candidate-info">
                        {/* <li className="designation">
                            {doctor?.designation}
                          </li> */}
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {doctor?.doctorsoptions?.address}
                        </li>
                        <li>
                          <span className="icon flaticon-telephone"></span>
                          {doctor?.doctorsoptions?.phoneNumber}
                        </li>
                      </ul>

                      <ul className="post-tags">
                        {doctor?.expertiseOfDoctors?.nodes?.map((val, i) => (
                          <li key={i}>{val?.name}</li>
                        ))}
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

                  {/* <!-- cancerstreated Start --> */}
                  {cancerstreated?.length ? (
                    <div className={`resume-outer`}>
                      <div className="upper-title">
                        <h4>Cancer Treated</h4>
                      </div>
                      {/* educations */}

                      {cancerstreated?.map((item, idx) => (
                        <div className="resume-block" key={idx}>
                          <div className="inner">
                            <span className="name">
                              {item?.cancername?.substring(0, 1) + "" || ""}
                            </span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.cancername}</h3>
                                <span>{item?.institution}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.daterange}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {/* <!-- cancerstreated Resume End --> */}

                  {/* <!-- educations Start --> */}
                  {educations?.length ? (
                    <div className={`resume-outer theme-blue`}>
                      <div className="upper-title">
                        <h4>Education</h4>
                      </div>
                      {/* educations */}

                      {educations?.map((item, idx) => (
                        <div className="resume-block" key={idx}>
                          <div className="inner">
                            <span className="name">
                              {item?.schoolname.substring(0, 1) + ""}
                            </span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.schoolname}</h3>
                                <span>{item?.degree}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.daterange}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* <!-- educations Resume End --> */}

                  {/* <!-- awards Start --> */}
                  {awards?.length ? (
                    <div className={`resume-outer theme-yellow`}>
                      <div className="upper-title">
                        <h4>Awards</h4>
                      </div>
                      {/* educations */}

                      {awards?.map((item, idx) => (
                        <div className="resume-block" key={idx}>
                          <div className="inner">
                            <span className="name">
                              {item?.awardname?.substring(0, 1) + "" || ""}
                            </span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.awardname}</h3>
                                <span>{item?.awardfrom}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.daterange}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {/* <!-- awards Resume End --> */}
                  {/* <!-- professionalMemberships Start --> */}
                  {professionalMemberships?.length ? (
                    <div className={`resume-outer theme-blue`}>
                      <div className="upper-title">
                        <h4>Professional Memberships and Affiliations</h4>
                      </div>
                      {/* educations */}

                      {professionalMemberships?.map((item, idx) => (
                        <div className="resume-block" key={idx}>
                          <div className="inner">
                            <span className="name">
                              {item?.title?.substring(0, 1) + "" || ""}
                            </span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.title}</h3>
                                <span>{item?.subtitle}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.daterange}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {/* <!-- professionalMemberships Resume End --> */}
                  {/* <!-- Clinical Experience: Start --> */}
                  {clinicalExperience?.length ? (
                    <div className={`resume-outer`}>
                      <div className="upper-title">
                        <h4>Clinical Experience</h4>
                      </div>
                      {/*  */}

                      {clinicalExperience?.map((item, idx) => (
                        <div className="resume-block" key={idx}>
                          <div className="inner">
                            <span className="name">
                              {item?.title?.substring(0, 1) + "" || ""}
                            </span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.title}</h3>
                                <span>{item?.institution}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.daterange}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {/* <!-- Clinical Experience Resume End --> */}
                  {/* <!-- researchpublications Start --> */}
                  {researchpublications?.length ? (
                    <div className={`resume-outer theme-yellow`}>
                      <div className="upper-title">
                        <h4>Research and Publications</h4>
                      </div>
                      {/*  */}

                      {researchpublications?.map((item, idx) => (
                        <div className="resume-block" key={idx}>
                          <div className="inner">
                            <span className="name">
                              {item?.title?.substring(0, 1) + "" || ""}
                            </span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.title}</h3>
                                <span>{item?.subtitle}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.daterange}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {/* <!-- researchpublications Resume End --> */}


                  {/* <!-- Portfolio --> */}
                </div>
                {/* End job-details */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="btn-box">
                    <Link
                      className="theme-btn btn-style-one"
                      href={doctor?.doctorsoptions?.bookAppointmentLink || '#'}
                    >
                      Book An Appointment
                    </Link>
            
                  </div>

                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview">
                        <li>
                          <i className="icon icon-degree"></i>
                          <h5>Specializations:</h5>
                          {
                            specializations?.map((val, i) => (
                              <span key={i}>{val?.title} <br /></span>
                            ))
                          }
                          {/* <span>Master Degree</span> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End .sidebar-widget conadidate overview */}

                  <div className="sidebar-widget social-media-widget">
                    <h4 className="widget-title">Social media</h4>
                    <div className="widget-content">
                      <div className="social-links">
                        <Social socials={doctor?.doctorsoptions?.socialMedias} />
                      </div>
                    </div>
                  </div>
                  {/* End .sidebar-widget social-media-widget */}

                  <div className="sidebar-widget">
                    <h4 className="widget-title">Insurances</h4>
                    <div className="widget-content">
                      <ul className="job-skills">
                        <JobSkills insurances={insurances} />
                      </ul>
                    </div>
                  </div>
                  {/* End .sidebar-widget skill widget */}

                  <div className="sidebar-widget contact-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="widget-content">
                      <div className="default-form">
                        <Contact />
                      </div>
                    </div>
                  </div>
                  {/* End .sidebar-widget contact-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
