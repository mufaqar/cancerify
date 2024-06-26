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
      <div className="filters-outer  ">
        <button
          type="button"
          className="btn-close text-reset close-filters show-1023"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        {/* End .close filter */}
        <div className="filter-block">
          <div className=" relative">
            <h4>Search by Cancer</h4>
            {keyword && (
              <button
                onClick={() => cancerHandler({ name: "" })}
                className="absolute custom-align"
              >
                <span className="icon flaticon-close"></span>
              </button>
            )}
          </div>
          <div className="form-group">
            <Categories cancers={cancers} />
          </div>
        </div>

        <div className="filter-block">
          <div className=" relative">
            <h4> Specializations </h4>
            {specializations && (
              <button
                onClick={() => SpecializationsHandler({ name: "" })}
                className="absolute custom-align"
              >
                <span className="icon flaticon-close"></span>
              </button>
            )}
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
          <div className=" relative">
            <h4>Location</h4>
            {location && (
              <button
                onClick={() => locationHandler({ name: "" })}
                className="absolute custom-align"
              >
                <span className="icon flaticon-close"></span>
              </button>
            )}
          </div>
          <div className="form-group">
            <LocationBox locations={locations} />
          </div>
        </div>
      </div>
      {/* Filter Outer */}
    </div>
  );
};

export default FilterSidebar;
