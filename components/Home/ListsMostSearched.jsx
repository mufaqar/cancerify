"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addCategory,
  addLocation,
  addKeyword,
} from "@/features/filter/candidateFilterSlice";

export default function MostSearched(props) {
  const {mostsearcheds} = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const keywordHandler = ({ value }) => {
    dispatch(addKeyword(value));
  };


  // const mostsearcheds = data?.mostsearcheds?.nodes || [];



  return (
    <ul>
      {mostsearcheds?.map((item) => (
        <li
          onClick={() => {
            keywordHandler({ value: item.title });
            router.push("/doctors");
          }}
          key={item.id}
        >
          {item.title?.replace(/(<([^>]+)>)/gi, "")}
        </li>
      ))}
    </ul>
  );
}
