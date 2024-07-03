"use client";
import Categories from "../components/Categories";
import LocationBox from "../components/LocationBox";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addLocation,
  addKeyword,
} from "@/features/filter/candidateFilterSlice";
import SpecializationsBox from "../components/SpecializationsBox";

const FilterSidebar = (props) => {
  const { cancers, locations, specialities } = props;
  const dispatch = useDispatch();
  const {
    category: specializations,
    keyword,
    location,
  } = useSelector((state) => state.candidateFilter) || {};

  const SpecializationsHandler = ({ name }) => {
    dispatch(addCategory(name));
  };

  const cancerHandler = ({ name }) => {
    dispatch(addKeyword(name));
  };

  // location handler
  const locationHandler = ({ name }) => {
    dispatch(addLocation(name));
  };

  return (
    <div className="inner-column pd-right sticky">
      <div className="filters-outer  mb-h-100vh">
        <button
          type="button"
          className="btn-close text-reset close-filters show-1023"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        {/* End .close filter */}
        <div className="filter-block custom-filter-block">
          <div className=" relative">
            <h4>Search by Cancer</h4>
          </div>
          <div className="form-group">
            <Categories cancers={cancers} />
          </div>
        </div>

        <div className="filter-block">
          <div className=" relative custom-filter-block">
            <h4> Specializations </h4>
            {/* {specializations && (
              <button
                onClick={() => SpecializationsHandler({ name: "" })}
                className="absolute custom-align"
              >
                <span className="icon flaticon-close"></span>
              </button>
            )} */}
          </div>
          <div className="form-group">
            <SpecializationsBox
              specialities={specialities}
              SpecializationsHandler={SpecializationsHandler}
              specializations={specializations}
            />
          </div>
        </div>

        <div className="filter-block">
          <div className=" relative custom-filter-block">
            <h4>Location</h4>
            {/* {location && (
              <button
                onClick={() => locationHandler({ name: "" })}
                className="absolute custom-align"
              >
                <span className="icon flaticon-close"></span>
              </button>
            )} */}
          </div>
          <div className="form-group">
            <LocationBox locations={locations} />
          </div>
        </div>

        <div className="mb-4">
          <button
            type="button"
            className="btn btn-primary bg-theme-color rounded-50 w-100 mb-3 custom-see-filter mb-hidden "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            See Doctors
          </button>
          <button
            type="button"
            className="btn btn-primary bg-theme-color rounded-50 w-100 custom-see-filter desktop-hidden"
            onClick={() => {
              dispatch(addCategory(""));
              dispatch(addLocation(""));
              dispatch(addKeyword(""));
            }}
          >
            Clear filter
          </button>

          <button
            type="button"
            className="mb-hidden text-center text-theme underline clear-btn"
            onClick={() => {
              dispatch(addCategory(""));
              dispatch(addLocation(""));
              dispatch(addKeyword(""));
            }}
          >
            Clear filter
          </button>
        </div>
      </div>
      {/* Filter Outer */}
    </div>
  );
};

export default FilterSidebar;
