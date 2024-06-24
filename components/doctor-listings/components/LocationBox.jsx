"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../../features/filter/candidateFilterSlice";

const LocationBox = (props) => {
  const {locations} = props;
  const { location } = useSelector((state) => state.candidateFilter) || {};
  const [getLocation, setLocation] = useState(location);
  const dispath = useDispatch();

  // location handler
  const locationHandler = ({name}) => {
    setLocation(name);
  };

  // location dispatch
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, addLocation, getLocation]);

  return (
    <div className="flex tag-list custom-tag-list">
      {
        locations.map((item, index) => (
          <li
            key={index}
            className={`rounded-50  ${location === item?.title ? 'text-theme-color border-theme-color bg-theme-color text-white' : 'border'} `}
            onClick={() => locationHandler({ name: item?.title })}
          >
            {item?.title}

          </li>
        ))
      }
 
      {/* <select
        onChange={locationHandler}
        value={location}
        className="form-select"
      >
        <option value="">Choose a location</option>
        <option value="New york">
            New york
        </option>
        <option value="California">
            California 
        </option>
        <option value="Florida">
            Florida
        </option>
      </select>
      <span className="icon flaticon-map-locator"></span> */}
    </div>
  );
};

export default LocationBox;
