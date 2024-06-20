"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addLocation,
  addKeyword
} from "@/features/filter/candidateFilterSlice";


import { useRouter } from "next/navigation";

const SearchForm4 = (props) => {
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
  const keywordHandler = ({value}) => {
    dispatch(addKeyword(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const location = event.target.location.value;
    const cancers = event.target.cancers.value;
    const name = event.target.name.value;


    if (location === "Locations" && cancers === "All Cancers") {
      alert("Please select location and cancer type");
    } else {
      keywordHandler({ value: name });
      locationHandler({ name: location });
      categoryHandler({ name: cancers });
      router.push("/doctors");
    }
  };

  const { cancers } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <label>Search by keywords?</label>
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="name"
            placeholder="Type of cancer, location or Doctors name"
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <label>Location?</label>
          <span className="icon flaticon-map-locator"></span>
          <select id="location" className="chosen-single form-select">
            <option defaultValue="">Locations</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
            <option value="Florida">Florida</option>
          </select>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
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
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right ">
          <button type="submit" className="theme-btn btn-style-two rounded-50">
            Find Jobs
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm4;
