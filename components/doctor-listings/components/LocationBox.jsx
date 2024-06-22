"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../../features/filter/candidateFilterSlice";

const LocationBox = () => {
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
    <div className="flex tag-list">
      <li
          className="rounded-full"
          onClick={() => locationHandler({ name: 'New york' })}
        >
          <a className={`rounded-50  ${location === "New york" ? 'text-theme-color border-theme-color' : 'border'} `} href="#">New york</a>
        </li>
        <li
          className="rounded-full"
          onClick={() => locationHandler({ name: 'California' })}
        >
          <a className={`rounded-50  ${location === "California" ? 'text-theme-color border-theme-color' : 'border'} `} href="#">California</a>
        </li>
        <li
          className="rounded-full"
          onClick={() => locationHandler({ name: 'Florida' })}
        >
          <a className={`rounded-50  ${location === "Florida" ? 'text-theme-color border-theme-color' : 'border'} `} href="#">Florida</a>
        </li>
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
