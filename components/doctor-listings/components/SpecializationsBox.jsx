'use client'



const SpecializationsBox = (props) => {
    const { specialities, SpecializationsHandler, specializations } = props;
    return(
        <div className="flex tag-list custom-tag-list">
        {specialities?.map((item, index) => (
          <li
            key={index}
            className={`rounded-50  ${
              specializations === item?.databaseId
                ? "text-theme-color border-theme-color bg-theme-color text-white"
                : "border"
            } `}
            onClick={() => SpecializationsHandler({ name: item?.databaseId })}
          >
            {item?.name.replace('Oncologists', "")}
          </li>
        ))}
      </div>
    )
}

export default SpecializationsBox;