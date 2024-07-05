"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GET_ALL_DOCTORS } from "@/lib/Queries";
import client from "@/lib/ApolloClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const FilterTopBox = (props) => {
  const { doctors, pageInfo } = props;
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("endCursor");

  const [filteredData, setFilteredData] = useState([]);
  const [mainData, setMainData] = useState([]);
 

  const { keyword, location, category } =
    useSelector((state) => state.candidateFilter) || {};

  // if there is new data save previous doctors data in variable and append new data to it.

  const { data, fetchNextPage, hasNextPage, isLoading, status } =
    useInfiniteQuery({
      queryKey: ["doctors", page],
      queryFn: async ({ pageParam = page }) => {
        const res = await client.request(GET_ALL_DOCTORS, { after: pageParam });
        return res?.doctors;
      },
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage?.pageInfo?.endCursor,
    });

  // filter
  const doctorsData = mainData?.length ? mainData : doctors;

  useEffect(() => {
    const allDoctors = data?.pages?.map((page) => page?.nodes).flat() || [];
    setMainData([...allDoctors]);
  }, [data?.pages]);

  useEffect(() => {
    if (keyword !== "" || location !== "") {
      console.log("keyword", keyword, "location", location);
      const SearchfilteredData = doctorsData?.filter((doc) => {
        return (
          // cancerTreated filter
          doc?.doctorsoptions?.cancerTreated?.some((val) =>
            val?.title
              ?.replace(/(<([^>]+)>)/gi, "")
              .toLowerCase()
              .includes(keyword.replace(/(<([^>]+)>)/gi, "").toLowerCase())
          ) &&
          doc?.doctorsoptions?.location?.some((val) =>
            val?.title?.toLowerCase().includes(location.toLowerCase())
          )
        );
      });
      // console.log(SearchfilteredData, "SearchfilteredData");
      setFilteredData(SearchfilteredData);

    } else {
      setFilteredData([]);
      const allDoctors = data?.pages?.map((page) => page?.nodes).flat() || [];
      setMainData([...allDoctors]);
    }
  }, [keyword, location]);

  useEffect(() => {
    if (category !== "") {
      const SearchfilteredData = doctorsData?.filter((doc) => {
        return doc?.specializations?.nodes?.some((val) =>
          val?.name?.toLowerCase().includes(category.toLowerCase())
        );
      });
      setFilteredData(SearchfilteredData);


    } else {
      setFilteredData([]);
      const allDoctors = data?.pages?.map((page) => page?.nodes).flat() || [];
      setMainData([...allDoctors]);
      // setDoctorssData([...doctors])
    }
  }, [category]);

  // infinite scroll
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
      // router.push(`/doctors?endCursor=${pageInfo.endCursor}`, { scroll: false });
    }
  }, [inView, hasNextPage, fetchNextPage]);



  console.log("filteredData", filteredData);

  return (
    <>
      <div className="show-1023">
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

      {filteredData?.length
        ? filteredData?.map((doctor, idx) => (
            <div className="candidate-block-three" key={idx}>
              <div className="inner-box">
                <div className="content custom-content">
                  <h4 className="name">
                    {doctor?.specializations?.nodes?.map((val) => (
                      <h6 key={val.id} className="designation mb-hidden pb-2">
                        {val?.name}
                      </h6>
                    ))}
                    <Link href={`/doctors/${doctor?.slug}`}>
                      {doctor.title}
                    </Link>
                    {doctor?.specializations?.nodes?.map((val) => (
                      <h6 key={val.id} className="designation desktop-hidden">
                        {val?.name}
                      </h6>
                    ))}
                  </h4>
                  {/* For mobile   */}
                  <div className="mb-hidden  pb-1">
                  {doctor?.doctorsoptions?.location?.map((val) => (
                      <div className="flex items-center">
                        {/* <span className="icon flaticon-map-locator"></span>{" "} */}
                        <p key={val.id} className="line-clamp-1 ">
                          {val?.title}
                        </p>
                      </div>
                    ))}
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
                    {doctor?.doctorsoptions?.cancerTreated && (
                      <ul className="post-tags mb-hidden">
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
                                {val?.title
                                  ?.replace(/(<([^>]+)>)/gi, "")
                                  .replace("Cancer", "")}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>
                {/* End content */}

                <div className="btn-box custom-btn-box">
                  {doctor?.doctorsoptions?.cancerTreated && (
                    <ul className="post-tags">
                      {doctor?.doctorsoptions?.cancerTreated?.map((val, i) => (
                        <li
                          className={`${
                            keyword === val?.title?.replace(/(<([^>]+)>)/gi, "")
                              ? "bg-theme-color text-white"
                              : ""
                          }`}
                          key={i}
                        >
                          <span>
                            {val?.title?.replace(/(<([^>]+)>)/gi, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* End btn-box */}
              </div>
            </div>
          ))
        : keyword !== "" || location !== "" || category !== ""
        ? !filteredData?.length && (
            <div className="alert alert-warning">No doctors found</div>
          )
        : doctorsData?.map((doctor, idx) => (
            <>
              <div className="candidate-block-three" key={idx}>
              <div className="inner-box box-height">
                <div className="content custom-content">
                  <h4 className="name">
                    {doctor?.specializations?.nodes?.map((val) => (
                      <h6 key={val.id} className="designation mb-hidden pb-2">
                        {val?.name}
                      </h6>
                    ))}

                    <Link href={`/doctors/${doctor?.slug}`}>
                      {doctor.title}
                    </Link>
                    {doctor?.specializations?.nodes?.map((val) => (
                      <h6 key={val.id} className="designation desktop-hidden">
                        {val?.name}
                      </h6>
                    ))}
                  </h4>

                  <div className="mb-hidden flex items-center pb-1">
                  {doctor?.doctorsoptions?.location?.map((val) => (
                      <div className="flex items-center">
                        {/* <span className="icon flaticon-map-locator"></span>{" "} */}
                        <p key={val.id} className="line-clamp-1">
                          {val?.title}
                        </p>
                      </div>
                    ))}
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
                  <div className=" mb-hidden mb-lists">
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
                                {val?.title
                                  ?.replace(/(<([^>]+)>)/gi, "")
                                  .replace("Cancer", "")}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>
                {/* End content */}

                <div className="btn-box custom-btn-box">
                  {doctor?.doctorsoptions?.cancerTreated && (
                    <ul className="post-tags">
                      {doctor?.doctorsoptions?.cancerTreated?.map((val, i) => (
                        <li
                          className={`${
                            keyword === val?.title?.replace(/(<([^>]+)>)/gi, "")
                              ? "bg-theme-color text-white"
                              : ""
                          }`}
                          key={i}
                        >
                          <span>
                            {val?.title?.replace(/(<([^>]+)>)/gi, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* End btn-box */}
              </div>
            </div>
            <div ref={ref}></div>
            </>
          ))}



      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
