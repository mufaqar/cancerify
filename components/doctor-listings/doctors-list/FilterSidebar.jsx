"use client";
import Categories from "../components/Categories";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addLocation,
} from "@/features/filter/candidateFilterSlice";
// import { addLocation } from "../../../features/filter/candidateFilterSlice";

const FilterSidebar = () => {
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
              {getCategory && (
                <button
                  onClick={() => categoryHandler({ name: "" })}
                  className="absolute custom-align"
                >
                  <span className="icon flaticon-close"></span>
                </button>
              )}
            </div>
            <div className="form-group">
              <Categories />
            </div>
          </div>

          {/* <div className="filter-block">
                    <h4>Search by Doctor</h4>
                    <div className="form-group">
                        <SearchBox />
                    </div>
                </div> */}
          {/* <!-- Filter Block --> */}

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
              <LocationBox />
            </div>

            {/* <p>Radius around selected destination</p>
                    <DestinationRangeSlider /> */}
          </div>
          {/* <!-- Filter Block --> */}

          {/* <div className="filter-block">
                    <h4>Cancers</h4>
                    <div className="form-group">
                        <Categories />
                    </div>
                </div> */}
          {/* <!-- Filter Block --> */}

          {/* <!-- Filter Block --> */}
        
      </div>
      {/* Filter Outer */}
    </div>
  );
};

export default FilterSidebar;
