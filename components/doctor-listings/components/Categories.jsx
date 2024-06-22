"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addKeyword,
} from "../../../features/filter/candidateFilterSlice";
import Link from "next/link";

const Categories = (props) => {
  const { cancers } = props;

  const { category: getCategory, keyword } =
    useSelector((state) => state.candidateFilter) || {};

  const dispatch = useDispatch();

  // category handler
  const cancerHandler = ({ name }) => {
    dispatch(addKeyword(name));
  };

  return (
    <div className="flex tag-list">
      {cancers?.length ? (
        cancers
          ?.sort((a, b) =>
            a.title.replace(/(<([^>]+)>)/gi, "").localeCompare(b.title.replace(/(<([^>]+)>)/gi, ""))
          )
          ?.map((item) => (
            <li
              className="rounded-full"
              key={item?.id}
              onClick={() =>
                cancerHandler({ name: item.title.replace(/(<([^>]+)>)/gi, "") })
              }
            >
              <Link
                className={`${
                    keyword === item.title.replace(/(<([^>]+)>)/gi, "")
                    ? "text-theme-color border-theme-color "
                    : "border"
                } rounded-50  `}
                href="#"
              >
                {item.title.replace(/(<([^>]+)>)/gi, "")}
              </Link>
            </li>
          ))
      ) : (
        <p>No cancers found!</p>
      )}

      {/* <select
                onChange={categoryHandler}
                value={getCategory}
                className="form-select"
            >
                <option value="">Choose a cencer</option>
                {getExpertise?.map((item) => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <span className="icon flaticon-briefcase"></span> */}
    </div>
  );
};

export default Categories;
