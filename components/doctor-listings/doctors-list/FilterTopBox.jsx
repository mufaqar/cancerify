"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GET_ALL_DOCTORS } from "@/lib/Queries";
import client from "@/lib/ApolloClient";
import { useInfiniteQuery } from "@tanstack/react-query";

const FilterTopBox = (props) => {
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();

  const page = searchParams.get("endCursor");

  const [filteredData, setFilteredData] = useState([]);
  const [mainData, setMainData] = useState([]);

  const { keyword, location, category, sort } =
    useSelector((state) => state.candidateFilter) || {};

  // if there is new data save previous doctors data in variable and append new data to it.

  const { data, fetchNextPage, hasNextPage, isLoading, status } =
    useInfiniteQuery({
      queryKey: ["doctors", page],
      queryFn: async ({ pageParam = page }) => {
        const res = await client.request(GET_ALL_DOCTORS, { after: pageParam });
        return res?.doctors;
      },
      getNextPageParam: (lastPage) => lastPage?.pageInfo?.endCursor,
    });

  useEffect(() => {
    if (keyword !== "" || location !== "") {

      const SearchfilteredData = mainData?.filter((doc) => {
        return (
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
      console.log( "data?.pages");
      setFilteredData([])
      const allDoctors = data?.pages?.map((page) => page?.nodes).flat() || [];
      setMainData([...allDoctors]);
    }
  }, [keyword, location, data?.pages]);

  // console.log(typeCancer)

  // infinite scroll
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const doctorData = filteredData?.length ? filteredData : mainData;

  console.log(keyword !== "" || location !== "", "doctorData");

  return (
    <>
      <div className="show-1023">
        <button
          type="button"
          className="theme-btn toggle-filters "
          data-bs-toggle="offcanvas"
          data-bs-target="#filter-sidebar"
        >
          <span className="icon icon-filter"></span> Filter
        </button>
      </div>
      {/* End top filter bar box */}

      {isLoading
        ? Array.from({ length: 10 }).map((_, idx) => (
            <div key={idx} className="doctor-list-sekleton"></div>
          ))
        : filteredData?.length
        ? filteredData?.map((doctor, idx) => (
            <div className="candidate-block-three" key={idx}>
              <div className="inner-box">
                <div className="content custom-content">
                  <h4 className="name">
                    <Link href={`/doctors/${doctor?.slug}`}>
                      {doctor.title}
                    </Link>
                  </h4>
                  <ul className="candidate-info">
                    {/* <li className="designation">{doctor?.designation}</li> */}
                    <li className=" ">
                      <span className="icon flaticon-map-locator"></span>{" "}
                      <p className="line-clamp-1">
                        {doctor?.doctorsoptions?.address}
                      </p>
                    </li>
                    {/* <li>
                    <span className="icon flaticon-money"></span> $
                    {doctor.hourlyRate} / hour
                  </li> */}
                  </ul>
                  {/* End candidate-info */}
                  {doctor?.doctorsoptions?.cancerTreated && (
                    <ul className="post-tags">
                      {doctor?.doctorsoptions?.cancerTreated?.map((val, i) => (
                        <li className="" key={i}>
                          <span>
                            {val?.title?.replace(/(<([^>]+)>)/gi, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* End content */}

                <div className="btn-box custom-btn-box">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="theme-btn btn-style-three"
                  >
                    <span className="btn-title">Doctor info</span>
                  </Link>
                </div>
                {/* End btn-box */}
              </div>
            </div>
          ))
        : keyword !== "" || location !== "" ? 
          !filteredData?.length && <div className="alert alert-warning">No doctors found</div>
          :
          mainData?.map((doctor, idx) => (
            <div className="candidate-block-three" key={idx}>
              <div className="inner-box">
                <div className="content custom-content">
                  <h4 className="name">
                    <Link href={`/doctors/${doctor?.slug}`}>
                      {doctor.title}
                    </Link>
                  </h4>
                  <ul className="candidate-info">
                    {/* <li className="designation">{doctor?.designation}</li> */}
                    <li className=" ">
                      <span className="icon flaticon-map-locator"></span>{" "}
                      <p className="line-clamp-1">
                        {doctor?.doctorsoptions?.address}
                      </p>
                    </li>
                    {/* <li>
                    <span className="icon flaticon-money"></span> $
                    {doctor.hourlyRate} / hour
                  </li> */}
                  </ul>
                  {/* End candidate-info */}
                  {doctor?.doctorsoptions?.cancerTreated && (
                    <ul className="post-tags">
                      {doctor?.doctorsoptions?.cancerTreated?.map((val, i) => (
                        <li className="" key={i}>
                          <span>
                            {val?.title?.replace(/(<([^>]+)>)/gi, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* End content */}

                <div className="btn-box custom-btn-box">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="theme-btn btn-style-three"
                  >
                    <span className="btn-title">Doctor info</span>
                  </Link>
                </div>
                {/* End btn-box */}
              </div>
            </div>
          ))}

      <div ref={ref}></div>

      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
