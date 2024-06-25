"use client";
import { useState, useEffect } from "react";
import { isDesktop } from "react-device-detect";
import parseHtml from "@/lib/Parser";
import dynamic from "next/dynamic";

const JobSkills = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const [show, setShow] = useState(5);
  const { insurances } = props;


  useEffect(() => {
    if (isDesktop) {
      setShow(insurances?.length);
    } else {
      if (seeMore) {
        setShow(insurances?.length);
      } else {
        setShow(5);
      }
    }
  }, [insurances, seeMore, isDesktop]);



  return (
    <>
      <ul className="job-skills">
        {insurances?.slice(0, show).map((skill, i) => (
          <li className="custom-isurance" key={i}>
            {parseHtml(skill?.title)}
          </li>
        ))}
      </ul>

      <button onClick={() => setSeeMore(!seeMore)} className="text-theme-color pt-2 underline"> 
        {seeMore ? "Show Less" : "Show More"}
      </button>
    </>
  );
};

export default dynamic(() => Promise.resolve(JobSkills), {
  ssr: false,
});
