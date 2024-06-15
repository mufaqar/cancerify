"use client";

import Link from "next/link";
import ListingShowing from "../components/ListingShowing";
import candidatesData from "../../../data/candidates";
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
import { useState } from "react";

const FilterTopBox = (props) => {
  const { doctors } = props;

  const [filteredData, setFilteredData] = useState([...doctors]);

  const {
    keyword,
    location,
    destination,
    category,
    candidateGender,
    datePost,
    experiences,
    qualifications,
    sort,
    perPage,
  } = useSelector((state) => state.candidateFilter) || {};

  const dispatch = useDispatch();

 


  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };








  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
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
          {/* Collapsible sidebar button */}

          <div className="text">
            <strong>{filteredData?.length}</strong> Doctors
          </div>
        </div>
        {/* End showing-result */}

        <div className="sort-by">
        

          <select
            onChange={sortHandler}
            className="chosen-single form-select"
            value={sort}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>
          {/* End select */}


          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}

      {filteredData?.map((doctor) => (
        <div className="candidate-block-three" key={doctor.id}>
          <div className="inner-box">
            <div className="content">
              {/* <figure className="image">
                <Image
                  width={90}
                  height={90}
                  src={doctor.avatar}
                  alt="doctor"
                />
              </figure> */}
              <h4 className="name">
                <Link href={`/doctors/${doctor.slug}`}>
                  {doctor.title}
                </Link>
              </h4>

              <ul className="candidate-info">
                {/* <li className="designation">{doctor?.designation}</li> */}
                <li className=" ">
                  <span className="icon flaticon-map-locator"></span>{" "}
                  <p className="line-clamp-1">{doctor?.doctorsoptions?.address}</p>
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
                <span className="btn-title">View Profile</span>
              </Link>
            </div>
            {/* End btn-box */}
          </div>
        </div>
      ))}

      <ListingShowing />
      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
