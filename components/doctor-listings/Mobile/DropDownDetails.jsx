"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const DropDownDetails = (props) => {
  const {
    educations,
    awards,
    professionalMemberships,
    clinicalExperience,
    researchpublications,
    specializations,
  } = props;

  const [open, setOpen] = useState(null);

  const alldropdown = [
    {
      type: "Specializations",
      data: specializations,
    },
    {
      type: "Educations",
      data: educations,
    },
    {
      type: "Awards",
      data: awards,
    },
    {
      type: "Affiliations",
      data: professionalMemberships,
    },
    {
      type: "Clinical Experience",
      data: clinicalExperience,
    },
    {
      type: "Publications",
      data: researchpublications,
    },
  ];

  return (
    <>
      {
      isMobile &&
      alldropdown.map((item, index) => {
        return item?.type === "Specializations" ? (
          item?.data?.length ? (
            <div key={index} className="mb_details_block mb-hidden">
              <button
                onClick={() => setOpen(index)}
                className="mb_details_block_title mb-3 text-theme-color flex items-center justify-between w-full "
              >
                <h3>{item?.type}</h3>
                {open === index ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <rect x="6" y="11" width="12" height="2" rx="1" />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                    </svg>
                  </span>
                )}
              </button>
              {open === index && (
                <div className="px-3 py-2">
                  <ul className="list-disc">
                    {specializations?.map((val, i) => (
                      <li className="p-1" key={i}>
                        {val?.title} <br />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : null
        ) : item?.type === "Educations" ? (
          item?.data?.length ? (
            <div key={index} className="mb_details_block mb-hidden">
              <button
                onClick={() => setOpen(index)}
                className="mb_details_block_title mb-3 flex items-center justify-between w-full "
              >
                <h3>{item?.type}</h3>
                {open === index ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <rect x="6" y="11" width="12" height="2" rx="1" />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                    </svg>
                  </span>
                )}
              </button>
              {open === index && (
                <div className="px-3 py-2 resume-outer theme-blue">
                  {item?.data?.map((item, idx) => (
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
                              <span className="year">{item?.daterange}</span>
                            </div>
                          )}
                        </div>
                        {item?.description && (
                          <div className="text">{item?.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null
        ) : item?.type === "Awards" ? (
          item?.data?.length ? (
            <div key={index} className="mb_details_block mb-hidden">
              <button
                onClick={() => setOpen(index)}
                className="mb_details_block_title mb-3 flex items-center justify-between w-full "
              >
                <h3>{item?.type}</h3>
                {open === index ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <rect x="6" y="11" width="12" height="2" rx="1" />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                    </svg>
                  </span>
                )}
              </button>
              {open === index && (
                <div className="px-3 py-2 resume-outer theme-yellow">
                  {item?.data?.map((item, idx) => (
                    <div className="resume-block" key={idx}>
                      <div className="inner">
                        <span className="name">
                          {item?.awardname?.substring(0, 1) + "" || ""}
                        </span>
                        <div className="title-box">
                          <div className="info-box">
                            <h3>{item?.awardname}</h3>
                            {item?.awardfrom && <span>{item?.awardfrom}</span>}
                          </div>
                          {item?.daterange && (
                            <div className="edit-box">
                              <span className="year">{item?.daterange}</span>
                            </div>
                          )}
                        </div>
                        {item?.description && (
                          <div className="text">{item?.description}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null
        ) : item?.type === "Affiliations" ? (
          item?.data?.length ? (
            <div key={index} className="mb_details_block mb-hidden ">
              <button
                onClick={() => setOpen(index)}
                className="mb_details_block_title mb-3 flex items-center justify-between w-full "
              >
                <h3>{item?.type}</h3>
                {open === index ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <rect x="6" y="11" width="12" height="2" rx="1" />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                    </svg>
                  </span>
                )}
              </button>
              {open === index && (
                <div className="px-3 py-2 theme-blue">
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
                          {item?.daterange && (
                            <div className="edit-box">
                              <span className="year">{item?.daterange}</span>
                            </div>
                          )}
                        </div>
                        <div className="text">{item?.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null
        ) : item?.type === "Clinical Experience" ? (
          item?.data?.length ? (
            <div key={index} className="mb_details_block mb-hidden">
              <button
                onClick={() => setOpen(index)}
                className="mb_details_block_title mb-3 flex items-center justify-between w-full "
              >
                <h3>{item?.type}</h3>
                {open === index ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <rect x="6" y="11" width="12" height="2" rx="1" />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                    </svg>
                  </span>
                )}
              </button>
              {open === index && (
                <div className="px-3 py-2 resume-outer">
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
                          {item?.daterange && (
                            <div className="edit-box">
                              <span className="year">{item?.daterange}</span>
                            </div>
                          )}
                        </div>
                        <div className="text">{item?.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null
        ) : item?.type === "Publications" ? (
          item?.data?.length ? (
            <div key={index} className="mb_details_block mb-hidden">
              <button
                onClick={() => setOpen(index)}
                className="mb_details_block_title mb-4 flex items-center justify-between w-full "
              >
                <h3>{item?.type}</h3>
                {open === index ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <rect x="6" y="11" width="12" height="2" rx="1" />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                    </svg>
                  </span>
                )}
              </button>
              {open === index && (
                <div className="px-3 py-2">
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
                          {item?.daterange && (
                            <div className="edit-box">
                              <span className="year">{item?.daterange}</span>
                            </div>
                          )}
                        </div>
                        <div className="text">{item?.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null
        ) : null;
      })}
    </>
  );
}

export default dynamic(() => Promise.resolve(DropDownDetails), {
  ssr: false,
});
