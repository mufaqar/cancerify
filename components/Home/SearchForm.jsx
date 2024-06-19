'use client'
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addLocation,
} from "@/features/filter/candidateFilterSlice";

import { useRouter } from "next/navigation";



const SearchForm4 = (props) => {
  const router = useRouter()
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const location= event.target.location.value;
    const cancers= event.target.cancers.value;

    console.log(location,cancers);

    if(location === "Locations" && cancers === "All Cancers"){
      alert("Please select location and cancer type");
    }else{

      locationHandler({name:location});
      categoryHandler({name:cancers});
      router.push("/doctors");
    }




  };

  const {cancers}= props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-center">


        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-5 col-md-12 col-sm-12 location">
          <label>Location?</label>
          <span className="icon flaticon-map-locator"></span>
          <select id="location" className="chosen-single form-select">
            <option defaultValue="">Locations</option>
            <option  value="New York">New York</option>
            <option  value="California">California</option>
            <option  value="Florida">Florida</option>
          </select>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-5 col-md-12 col-sm-12 category">
          <label>Types of Cancer</label>
          <span className="icon flaticon-briefcase"></span>
          <select id="cancers" className="chosen-single form-select">
            <option defaultValue="">All Cancers</option>
            {
              cancers?.map((item) => (
                <option key={item.id} value={item.title}>{item.title}</option>
              ))
            }

          </select>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right ">
          <button
            type="submit"
            className="theme-btn btn-style-two rounded-50"
          >
            Find Jobs
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm4;
