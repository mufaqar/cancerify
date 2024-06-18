"use client";

import Link from "next/link";
import ListingShowing from "../components/ListingShowing";
import { useDispatch, useSelector } from "react-redux";
import {
  addCandidateGender,
  addCategory,
  addDatePost,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSort,
  clearExperienceF,
  clearQualificationF,
} from "../../../features/filter/candidateFilterSlice";
import {
  clearDatePost,
  clearExperience,
  clearQualification,
} from "../../../features/candidate/candidateSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GET_ALL_DOCTORS } from "@/lib/Queries";
import client from "@/lib/ApolloClient";

const FilterTopBox = (props) => {
  const { doctors ,pageInfo} = props;
  const searchParams = useSearchParams()

  const page = searchParams.get('endCursor')

  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    keyword,
    location,
    category,
    sort,
  } = useSelector((state) => state.candidateFilter) || {};

  const dispatch = useDispatch();

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };


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
    if( keyword || location || category || sort) {
      const SearchfilteredData = doctors.filter((doctor) => {
        return (
          doctor.title.toLowerCase().includes(keyword.toLowerCase()) &&
          doctor.doctorsoptions.address
            .toLowerCase()
            .includes(location.toLowerCase()) &&
          doctor.expertiseOfDoctors.nodes.some((val) =>
            val.name.toLowerCase().includes(category.toLowerCase())
          ) 
        );
      });
      
      setFilteredData(SearchfilteredData);
    }else{
      setFilteredData([...doctors]);
    }
  }, [keyword, location, category, sort, doctors]);


 

  return (
    <>

      {/* End top filter bar box */}

      {filteredData?.length === 0 ? (
        <div className="alert alert-warning">No doctors found</div>
      ) : (
        filteredData?.map((doctor) => (
          <div className="candidate-block-three" key={doctor.id}>
            <div className="inner-box">
              <div className="content">
  
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

                <ul className="post-tags">
                  {doctor.expertiseOfDoctors?.nodes?.map((val, i) => (
                    <li key={i}>
                      <span>{val.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End content */}

              <div className="btn-box">
                {/* <button className="bookmark-btn me-2">
                <span className="flaticon-bookmark"></span>
              </button> */}
                {/* End bookmark-btn */}

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

      {
        filteredData?.length ?

        pageInfo?.hasNextPage && <ListingShowing isLoading={isLoading} pageInfo={pageInfo} />  : null
      }
      
      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
