import Link from "next/link";
import JobSkills from "@/components/candidates-single-pages/shared-components/JobSkills";
import DropDownDetails from "./DropDownDetails";


const DoctorMobileDetails = (props) => {
  const {
    doctor,
    educations,
    awards,
    professionalMemberships,
    clinicalExperience,
    researchpublications,
    cancerTreated,
    socials,
    insurances,
    specializations,
  } = props;

  return (
 
      <div className="row mb-hidden">
        <div className="content-column col-lg-8 col-md-12 col-sm-12">
          <div className="candidate-block-five">
            <div className="inner-box">
              <div className="content doctor_content">
                <h4 className="name">{doctor?.title}</h4>
                <div className="cancer_treted pb-3">
                  <ul className="post-tags grid grid-cols-3 grid-cols-md-2 gap-10">
                    {cancerTreated?.map((val, i) => (
                      <li className="bg-gray" key={i}>
                        {val?.title.replace(/(<([^>]+)>)/gi, "")}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="candidate-info border-t pt-3 pb-0">
                  <li className="socail-text-theme font-500">
                    <span className="icon flaticon-map-locator"></span>
                    {doctor?.doctorsoptions?.address}
                  </li>
                  <li className="pt-2">
                    <Link
                      className="socail-text-theme font-500"
                      href={`tel:${doctor?.doctorsoptions?.phoneNumber}`}
                    >
                      <span className="icon flaticon-telephone pt-2"></span>
                      {doctor?.doctorsoptions?.phoneNumber}
                    </Link>
                  </li>
                </ul>
                <div className="social-links w-full">
                  {socials?.facebook && (
                    <Link
                      className="font-500"
                      target="__blank"
                      href={socials?.facebook || ""}
                    >
                      {<i className="fab fa-facebook-f  text-gray"></i>}{" "}
                      facebook
                    </Link>
                  )}
                  {socials?.twitter && (
                    <Link
                      className="font-500"
                      target="__blank"
                      href={socials?.twitter || ""}
                    >
                      {<i class="icon flaticon-megaphone text-gray"></i>}{" "}
                      twitter
                    </Link>
                    //   <FontAwesomeIcon icon="fa-solid fa-bullhorn" />
                  )}
                  {socials?.instagram && (
                    <Link
                      className="font-500"
                      target="__blank"
                      href={socials?.instagram || ""}
                    >
                      {<i className="fab fa-instagram text-gray"></i>} instagram
                    </Link>
                  )}
                  {socials?.linkedin && (
                    <Link
                      className="font-500"
                      target="__blank"
                      href={socials?.linkedin || ""}
                    >
                      {<i className="fab fa-linkedin-in text-gray"></i>}{" "}
                      linkedin
                    </Link>
                  )}
                </div>
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

            <div className="btn-box pb-5">
              <Link
                target="__blank"
                className="theme-btn btn-style-one w-full"
                href={doctor?.doctorsoptions?.bookAppointmentLink || "#"}
              >
                Book An Appointment
              </Link>
            </div>

            {/* insurance */}
            {
              insurances?.length ?
              <div className="sidebar-widget">
              <h3 className="pb-4">Insurances</h3>
              <div className="widget-content">
                <JobSkills insurances={insurances} />
              </div>
            </div>
            : null
            }


            {/* specializations */}
            <DropDownDetails
              educations={educations}
              awards={awards}
              professionalMemberships={professionalMemberships}
              clinicalExperience={clinicalExperience}
              researchpublications={researchpublications}
              specializations={specializations}
            /> 

            {/* <!-- Portfolio --> */}
          </div>
          {/* End job-details */}
        </div>
      </div>
    
  );
};

export default DoctorMobileDetails;