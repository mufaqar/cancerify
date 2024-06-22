"use client";

import Link from "next/link";
import ListingShowing from "../components/ListingShowing";
import { useDispatch, useSelector } from "react-redux";
import {
  addSort,
} from "../../../features/filter/candidateFilterSlice";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GET_ALL_DOCTORS } from "@/lib/Queries";
import client from "@/lib/ApolloClient";

const FilterTopBox = (props) => {
  const { doctors, pageInfo } = props;
  const searchParams = useSearchParams();

  const page = searchParams.get("endCursor");

  const [filteredData, setFilteredData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { keyword, location, category, sort } =
    useSelector((state) => state.candidateFilter) || {};

  const dispatch = useDispatch();




  console.log("keyword", keyword);
  // if there is new data save previous doctors data in variable and append new data to it.

  useEffect(() => {
    if (page) {
      setIsLoading(true);
      const fetchMoreData = async () => {
        const res = await client.request(GET_ALL_DOCTORS, { after: page });
        const newDoctors = res?.doctors?.nodes || [];
        const allDoctors = [...doctors, ...newDoctors];

        setFilteredData(allDoctors);
        setIsLoading(false);
      };
      fetchMoreData();
    }
  }, [page]);

  // Filter data
  useEffect(() => {
    if (keyword || location) {
      const SearchfilteredData = doctors?.filter((doctor) => {
        return (
          // doctor.title.toLowerCase().includes(keyword.toLowerCase()) &&
            doctor?.doctorsoptions?.location?.some((val) =>
            val?.title?.toLowerCase() === location.toLowerCase()) ||
            doctor?.doctorsoptions?.cancerTreated?.some((val) =>
            val?.title?.replace(/(<([^>]+)>)/gi, "").toLowerCase().includes(keyword.toLowerCase())
          )
        );
      });


      setFilteredData(SearchfilteredData);
    } else {
      setFilteredData([...doctors]);
    }
  }, [keyword, location, doctors]);

 

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

      {filteredData?.length === 0 ? (
        <div className="alert alert-warning">No doctors found</div>
      ) : (
        filteredData?.map((doctor) => (
          <div className="candidate-block-three" key={doctor.id}>
            <div className="inner-box">
              <div className="content custom-content">
                <h4 className="name">
                  <Link href={`/doctors/${doctor.slug}`}>{doctor.title}</Link>
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
                    {
                      doctor?.doctorsoptions?.cancerTreated && 
                      <ul className="post-tags">
                      {doctor?.doctorsoptions?.cancerTreated?.map((val, i) => (
                        <li className="" key={i}>
                          <span>{val?.title?.replace(/(<([^>]+)>)/gi, "")}</span>
                        </li>
                      ))}
                    </ul>
                    }
 
              </div>
              {/* End content */}

              <div className="btn-box">
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
      )}

      {filteredData?.length
        ? pageInfo?.hasNextPage && (
            <ListingShowing isLoading={isLoading} pageInfo={pageInfo} />
          )
        : null}

      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
