"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addKeyword,
} from "../../../features/filter/candidateFilterSlice";


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
    <div className="flex tag-list custom-tag-list ">
      {cancers?.length ? (
        cancers
          ?.sort((a, b) =>
            a.title.replace(/(<([^>]+)>)/gi, "").localeCompare(b.title.replace(/(<([^>]+)>)/gi, ""))
          )
          ?.map((item) => (
            <li
            className={`${
              keyword === item.title.replace(/(<([^>]+)>)/gi, "")
              ? "text-theme-color border-theme-color bg-theme-color text-white"
              : "border"
          } rounded-50  `}
              key={item?.id}
              onClick={() =>{
                cancerHandler({ name: '' })
                cancerHandler({ name: item.title.replace(/(<([^>]+)>)/gi, "") })
              }

              }
            >
              { item.title.replace(/(<([^>]+)>)/gi, "").replace('Cancer', "")}
            </li>
          ))
      ) : (
        <p>No cancers found!</p>
      )}

    </div>
  );
};

export default Categories;
