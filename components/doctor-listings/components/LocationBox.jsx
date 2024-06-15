"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../../features/filter/candidateFilterSlice";

const LocationBox = () => {
  const { location } = useSelector((state) => state.candidateFilter) || {};
  const [getLocation, setLocation] = useState(location);
  const dispath = useDispatch();

  // location handler
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };

  // location dispatch
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, addLocation, getLocation]);

  return (
    <>
      <select
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
      <span className="icon flaticon-map-locator"></span>
    </>
  );
};

export default LocationBox;
