"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GET_ALL_DOCTORS } from "@/lib/Queries";
import client from "@/lib/ApolloClient";
import { useInfiniteQuery } from "@tanstack/react-query";

const FilterTopBox = (props) => {
  const { doctors } = props;
  const { ref, inView } = useInView();

  const [filteredData, setFilteredData] = useState([]);
  const [cleanFilteredData, setCleanFilteredData] = useState([]);

  const [mainData, setMainData] = useState([]);
  const [isMainInfiniteLoading, setIsMainInfiniteLoading] = useState(false);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [isFilterInfiniteLoading, setIsFilterInfiniteLoading] = useState(false);

  const [filterPage, setFilterPage] = useState(0);

  const [pagination, setPagination] = useState();

  const { keyword, location, category } =
    useSelector((state) => state.candidateFilter) || {};

  // if there is new data save previous doctors data in variable and append new data to it.

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["doctors_infinity"],
    queryFn: async ({ pageParam }) => {
      setIsMainInfiniteLoading(true);
      const res = await client.request(GET_ALL_DOCTORS, { after: pageParam });
      return res?.doctors;
    },
    keepPreviousData: true,
    getNextPageParam: (lastPage) => lastPage?.pageInfo?.endCursor,
  });

  // filter
  const doctorsData = mainData?.length ? mainData : doctors;

  useEffect(() => {
    setIsMainInfiniteLoading(true);
    const allDoctors = data?.pages?.map((page) => page?.nodes).flat() || [];
    setMainData([...allDoctors]);
    setIsMainInfiniteLoading(false);
  }, [data?.pages]);

  // Apply filtering
  useEffect(() => {
    const parameterLogicLocation = keyword === "" ? "?" : "&";
    const parameterLogicSpecialization =
      keyword === "" && location === "" ? "?" : "&";

    const cancerQuery =
      keyword !== ""
        ? `?cancer_q=${keyword
            .replace(/(<([^>]+)>)/gi, "")
            .replace(" Cancer", "")
            .toLowerCase()}`
        : "";
    const locationQuery =
      location !== ""
        ? `${parameterLogicLocation}location_ids=%5B${location}%5D`
        : "";
    const specialityQuery =
      category !== ""
        ? `${parameterLogicSpecialization}specialization_ids=%5B${category}%5D`
        : "";

    const handleFilter = async () => {
      const SearchfilteredData = await fetch(
        `https://vni.fe7.mytemp.website/wp-json/doctors/v1/get_drs${cancerQuery}${locationQuery}${specialityQuery}&limit=6&offset=0`
      );

      const data = await SearchfilteredData.json();
      const doctors = data?.data?.doctors?.nodes || [];
      console.log(data?.pagination, "doctorsdoctors");

      setFilteredData([...doctors]);

      setPagination(data?.pagination);
      setIsFilterLoading(false);
    };

    if (keyword !== "" || location !== "" || category !== "") {
      setIsFilterLoading(true);
      handleFilter();
    } else {
      setFilteredData([]);
      setIsFilterLoading(false);
    }
  }, [keyword, location, category]);

  // Filter infinite scroll
  useEffect(() => {
    const handleInfinityFilter = async () => {
      setIsFilterInfiniteLoading(true);
      const parameterLogicLocation = keyword === "" ? "?" : "&";
      const parameterLogicSpecialization =
        keyword === "" && location === "" ? "?" : "&";

      const cancerQuery =
        keyword !== ""
          ? `?cancer_q=${keyword
              .replace(/(<([^>]+)>)/gi, "")
              .replace(" Cancer", "")
              .toLowerCase()}`
          : "";
      const locationQuery =
        location !== ""
          ? `${parameterLogicLocation}location_ids=%5B${location}%5D`
          : "";
      const specialityQuery =
        category !== ""
          ? `${parameterLogicSpecialization}specialization_ids=%5B${category}%5D`
          : "";

      const SearchfilteredData = await fetch(
        `https://vni.fe7.mytemp.website/wp-json/doctors/v1/get_drs${cancerQuery}${locationQuery}${specialityQuery}&limit=6&offset=${filterPage}`
      );

      const data = await SearchfilteredData.json();
      const doctors = data?.data?.doctors?.nodes || [];

      

      setFilteredData([...filteredData, ...doctors]);
      setIsFilterInfiniteLoading(false);
    };

    if (filterPage > 0) {
      handleInfinityFilter();
    }
  }, [filterPage]);

  // infinite scroll all doctors
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // infinite scroll filter doctors
  useEffect(() => {
    if (inView && pagination?.total > filteredData?.length) {
      // setFilterPage(pagination?.total);
      const calculatePage = Math.ceil(pagination?.total / pagination.limit);
      // calculate offset
      const offset = calculatePage * pagination.limit;
      offset > filterPage + 6 && setFilterPage((prev) => prev + 6);
    }
  }, [inView]);

  // if we click on filter button again then it will set the specific data
  useEffect(() => {
    if (keyword !== "" || location !== "" || category !== "") {
      setFilterPage(0);
    }
  }, [keyword, location, category]);

  // const isShow = filteredData;

  useEffect(() => {
    const isShow =
      keyword !== ""
        ? filteredData?.filter((doctor) => {
            return doctor?.doctorsoptions?.cancerTreated
              ? doctor?.doctorsoptions?.cancerTreated
              : doctor?.doctorsoptions?.cancer_treated.some(
                  (item) =>
                    item.title.replace(" Cancer", "").toLowerCase() ===
                    keyword.replace(" Cancer", "").toLowerCase()
                );
          })
        : filteredData;
    setCleanFilteredData(isShow);
  }, [keyword, filteredData]);

  return (
    <>
      <div className="show-1023 sticky z-200 py-3 bg-white top-70">
        <button
          type="button"
          className="theme-btn toggle-filters custom-filter "
          data-bs-toggle="offcanvas"
          data-bs-target="#filter-sidebar"
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_444_564"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_444_564)">
                <path
                  d="M10.9991 20C10.7158 20 10.4783 19.9042 10.2866 19.7125C10.0949 19.5208 9.9991 19.2833 9.9991 19V13L4.1991 5.6C3.9491 5.26667 3.9116 4.91667 4.0866 4.55C4.2616 4.18333 4.56577 4 4.9991 4H18.9991C19.4324 4 19.7366 4.18333 19.9116 4.55C20.0866 4.91667 20.0491 5.26667 19.7991 5.6L13.9991 13V19C13.9991 19.2833 13.9033 19.5208 13.7116 19.7125C13.5199 19.9042 13.2824 20 12.9991 20H10.9991ZM11.9991 12.3L16.9491 6H7.0491L11.9991 12.3Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </span>{" "}
          Add Filters
        </button>
      </div>
      {/* End top filter bar box */}

      {cleanFilteredData?.length ? (
        <>
          {cleanFilteredData
            ?.sort((a, b) => {
              const lastNameA = a.doctorsoptions?.last_name || "";
              const lastNameB = b.doctorsoptions?.last_name || "";
              return lastNameA.localeCompare(lastNameB);
            })
            .map((doctor, idx) => {
              return (
                <div className="candidate-block-three" key={idx}>
                  <Link href={`/doctors/${doctor?.slug}`}>
                    <div className="inner-box box-height">
                      <div className="content custom-content">
                        <div className="name">
                          <div className="flex items-center ">
                            {doctor?.specializations?.nodes?.map((val) => (
                              <h6
                                key={val.id}
                                className="designation pb-2 mb-hidden"
                              >
                                {val?.name}
                              </h6>
                            ))}
                          </div>
                          <h4 className="name">
                            <span>{doctor.title} </span>
                          </h4>
                          <div className="flex items-center desktop-hidden">
                            {doctor?.specializations?.nodes?.map((val) => (
                              <h6 key={val.id} className="designation pl-2">
                                {val?.name}
                              </h6>
                            ))}
                          </div>
                        </div>
                        {/* For mobile   */}
                        <div className="mb-hidden  pb-1 ">
                          <div className="flex items-center">
                            {doctor?.doctorsoptions?.location?.map((val) => (
                              <h6
                                key={val.id}
                                className="location_name pr-8 pb-2"
                              >
                                {val?.title}
                              </h6>
                            ))}
                          </div>
                        </div>
                        {/* End candidate-info for desktop */}
                        <ul className="candidate-info desktop-hidden pt-3">
                          <li className=" ">
                            <span className="icon flaticon-map-locator"></span>{" "}
                            <p className="line-clamp-1">
                              {doctor?.doctorsoptions?.address}
                            </p>
                          </li>
                        </ul>
                        <div className=" mb-hidden mb-lists">
                          <div className=" flex items-center">
                            {/* <h6 className="text-gray-2 pr-4 line-height-38 mb-line-height-30">
                            Cancer Treated:
                          </h6> */}
                            {doctor?.doctorsoptions?.cancerTreated
                              ? doctor?.doctorsoptions?.cancerTreated
                              : doctor?.doctorsoptions?.cancer_treated && (
                                  <ul className="post-tags">
                                    {doctor?.doctorsoptions?.cancerTreated
                                      ? doctor?.doctorsoptions?.cancerTreated
                                      : doctor?.doctorsoptions?.cancer_treated.map(
                                          (val, i) => (
                                            <li
                                              className={`${
                                                keyword ===
                                                val?.title
                                                  ?.replaceAll("&lt;", "<")
                                                  .replace(/(<([^>]+)>)/gi, "")
                                                  ? "bg-theme-color text-white"
                                                  : ""
                                              }`}
                                              key={i}
                                            >
                                              <span>
                                                {val?.title
                                                  ?.replaceAll("&lt;", "<")
                                                  .replace(/(<([^>]+)>)/gi, "")}
                                              </span>
                                            </li>
                                          )
                                        )}
                                  </ul>
                                )}
                          </div>
                        </div>
                      </div>
                      {/* End content */}

                      <div className="btn-box custom-btn-box s">
                        {doctor?.doctorsoptions?.cancerTreated
                          ? doctor?.doctorsoptions?.cancerTreated
                          : doctor?.doctorsoptions?.cancer_treated && (
                              <ul className="post-tags">
                                {doctor?.doctorsoptions?.cancerTreated
                                  ? doctor?.doctorsoptions?.cancerTreated
                                  : doctor?.doctorsoptions?.cancer_treated.map(
                                      (val, i) => (
                                        <li
                                          className={`${
                                            keyword ===
                                            val?.title
                                              ?.replaceAll("&lt;", "<")
                                              .replace(/(<([^>]+)>)/gi, "")
                                              ? "bg-theme-color text-white"
                                              : ""
                                          }`}
                                          key={i}
                                        >
                                          <span>
                                            {val?.title
                                              ?.replaceAll("&lt;", "<")
                                              .replace(/(<([^>]+)>)/gi, "")}
                                          </span>
                                        </li>
                                      )
                                    )}
                              </ul>
                            )}
                      </div>
                      {/* End btn-box */}
                    </div>
                  </Link>
                </div>
              );
            })}

          {/* { pagination?.total > 6 ? <div ref={ref}></div> : null} */}
          {pagination?.total > 6 || cleanFilteredData?.length > 6 ? (
            <div ref={ref}></div>
          ) : null}
        </>
      ) : keyword !== "" || location !== "" || category !== "" ? (
        isFilterLoading ? (
          // Array.from({ length: 8 }).map((_, idx) => (
          //   <div key={idx} className="doctors_lists_skeleton"></div>
          // ))
          <></>
        ) : !cleanFilteredData?.length ? (
          <div className="h-screen">
            <div className="alert alert-warning ">No results found</div>
          </div>
        ) : null
      ) : (
        <>
          {doctorsData
            ?.sort((a, b) => {
              const lastNameA = a.doctorsoptions?.lastName || "";
              const lastNameB = b.doctorsoptions?.lastName || "";
              return lastNameA.localeCompare(lastNameB);
            })
            .map((doctor, idx) => (
              <>
                <div className="candidate-block-three" key={idx}>
                  <Link href={`/doctors/${doctor?.slug}`}>
                    <div className="inner-box box-height">
                      <div className="content custom-content">
                        <div className="name">
                          <div className="flex items-center ">
                            {doctor?.specializations?.nodes?.map((val) => (
                              <p
                                key={val.id}
                                className="designation  pb-2 pr-2 mb-hidden"
                              >
                                {val?.name}
                              </p>
                            ))}
                          </div>

                          <h4 className="name">
                            <span>{doctor.title} </span>
                          </h4>
                          <div className="flex items-center ">
                            {doctor?.specializations?.nodes?.map((val) => (
                              <h6
                                key={val.id}
                                className="designation pb-2 pr-2 desktop-hidden"
                              >
                                {val?.name}
                              </h6>
                            ))}
                          </div>
                        </div>

                        <div className="mb-hidden  ">
                          <div className="flex items-center pb-1">
                            {doctor?.doctorsoptions?.location?.map((val) => (
                              <h6
                                key={val.id}
                                className="location_name pr-8 pb-2"
                              >
                                {val?.title}
                              </h6>
                            ))}
                          </div>
                        </div>
                        {/* End candidate-info */}
                        <ul className="candidate-info desktop-hidden pt-3">
                          <li className=" ">
                            <span className="icon flaticon-map-locator"></span>{" "}
                            <p className="line-clamp-1">
                              {doctor?.doctorsoptions?.address}
                            </p>
                          </li>
                        </ul>
                        <div className=" mb-hidden mb-lists ">
                          <div className="flex items-center">
               
                            {doctor?.doctorsoptions?.cancerTreated && (
                              <ul className="post-tags">
                                {doctor?.doctorsoptions?.cancerTreated?.map(
                                  (val, i) => (
                                    <li
                                      className={`${
                                        keyword ===
                                        val?.title?.replace(/(<([^>]+)>)/gi, "")
                                          ? "bg-theme-color text-white"
                                          : ""
                                      } `}
                                      key={i}
                                    >
                                      <span>
                                        {val?.title?.replace(
                                          /(<([^>]+)>)/gi,
                                          ""
                                        )}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* End content */}

                      <div className="btn-box custom-btn-box">
                        {doctor?.doctorsoptions?.cancerTreated && (
                          <ul className="post-tags">
                            {doctor?.doctorsoptions?.cancerTreated?.map(
                              (val, i) => (
                                <li
                                  className={`${
                                    keyword ===
                                    val?.title?.replace(/(<([^>]+)>)/gi, "")
                                      ? "bg-theme-color text-white"
                                      : ""
                                  }`}
                                  key={i}
                                >
                                  <span>
                                    {val?.title?.replace(/(<([^>]+)>)/gi, "")}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                      {/* End btn-box */}
                    </div>
                  </Link>
                </div>
              </>
            ))}
          <div ref={ref}></div>
        </>
      )}

      {isMainInfiniteLoading &&
        Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="doctors_lists_skeleton"></div>
        ))}
      {
        // filteredData?.length ?
        isFilterInfiniteLoading &&
          Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="doctors_lists_skeleton"></div>
          ))
        // : null
      }

      {/* { hasNextPage && } */}

      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
