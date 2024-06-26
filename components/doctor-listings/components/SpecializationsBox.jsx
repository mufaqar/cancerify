'use client'
import { isDesktop } from "react-device-detect";
import dynamic from "next/dynamic";


const SpecializationsBox = (props) => {
    const { specialities, SpecializationsHandler, specializations } = props;
    return(
        <div className="flex tag-list custom-tag-list">
        {specialities?.map((item, index) => (
          <li
            key={index}
            className={`rounded-50  ${
              specializations === item?.name
                ? "text-theme-color border-theme-color bg-theme-color text-white"
                : "border"
            } `}
            onClick={() => SpecializationsHandler({ name: item?.name })}
          >
            {isDesktop ?  item?.name : item?.name.replace('Oncologists', "")}
          </li>
        ))}
      </div>
    )
}

export default dynamic(() => Promise.resolve(SpecializationsBox), { ssr: false });