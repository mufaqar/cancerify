"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addLocation,
  addKeyword,
} from "@/features/filter/candidateFilterSlice";

import { useRouter } from "next/navigation";
import { useState } from "react";

const mostSearched = [
  {
    id: 1,
    title: "Colorectal Cancer",
  },
  {
    id: 2,
    title: "Prostate Cancer",
  },
  {
    id: 3,
    title: "Breast Cancer",
  },
  {
    id: 4,
    title: "Lung Cancer",
  },
  {
    id: 5,
    title: "Stomach Cancer",
  },
];

const SearchForm4 = (props) => {
  const { locations,setIsInputFocused, isInputFocused } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const { category: getCategory } =
    useSelector((state) => state.candidateFilter) || {};

  const categoryHandler = ({ name }) => {
    dispatch(addCategory(name));
  };

  // Location
  const { location } = useSelector((state) => state.candidateFilter) || {};

  // location handler
  const locationHandler = ({ name }) => {
    dispatch(addLocation(name));
  };

  // keyword handler
  const keywordHandler = ({ value }) => {
    dispatch(addKeyword(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const location = event.target.location.value;
    // const cancers = event.target.cancers.value;
    const name =
      event.target.name.value == ""
        ? event.target.mbname.value
        : event.target.name.value;

    if (!name) {
      alert("Please select location and cancer type");
    } else {
      keywordHandler({ value: name });
      // locationHandler({ name: location });
      // categoryHandler({ name: cancers });
      router.push("/doctors");
    }
  };

  // get input focused or not!
  const handleFocus = () => {
    setIsInputFocused(true);
  };



  return (
    <form onSubmit={handleSubmit} className="relative " >
      <div className="row desktop-hidden">
        <div className="form-group col-lg-10 col-md-8 col-sm-8">
          {/* <label>Type of Cancer</label> */}
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="name"
            placeholder="Search by type cancer"
            onFocus={handleFocus}
            // onBlur={handleBlur}
          />
        </div>

        {/* <!-- Form Group --> */}
        {/* <div className="form-group col-lg-5 col-md-12 col-sm-12 location">
        <label>Types of Cancer</label>
          <span className="icon flaticon-briefcase"></span>
          <select id="cancers" className="chosen-single form-select">
            <option defaultValue="">All Cancers</option>
            {cancers?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>

        </div> */}

        {/* <!-- Form Group --> */}
        {/* <div className="form-group col-lg-4 col-md-12 col-sm-12 category">
        <label>Location?</label>
          <span className="icon flaticon-map-locator"></span>
          <select id="location" className="chosen-single form-select">
            <option defaultValue="">All locations</option>
            {
              locations?.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))
            }

          </select>
        </div> */}

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-2 col-md-2 col-sm-2 text-right ">
          <button
            type="submit"
            className="bg-search_btn theme-btn btn-style-two rounded-50"
          >
            Find Doctor
          </button>
        </div>
      </div>
      {/* Mobile search */}
      <div className="mobile_search mb-hidden">
        <div className="mb-search-form rounded-50 ">
          <input
            className="input-mb-search"
            type="text"
            name="mbname"
            placeholder="Search by type cancer"
            onFocus={handleFocus}
            // onBlur={handleBlur}
          />
          <button
            type="submit"
            className="mb-search-btn bg-search_btn theme-btn"
          >
            <span className="icon flaticon-search-1 text-white"></span>
          </button>
        </div>
      </div>
      {isInputFocused && (
        <div className=" most-searched">
          <h4>Most Searched</h4>
          <ul>
            {mostSearched.map((item) => (
              <li
            
                onClick={() => {
                  keywordHandler({ value: item.title });
                  router.push("/doctors");
                }}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchForm4;
