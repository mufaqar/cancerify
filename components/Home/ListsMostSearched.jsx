"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addCategory,
  addLocation,
  addKeyword,
} from "@/features/filter/candidateFilterSlice";
import Highlighter from "react-highlight-words";

export default function MostSearched(props) {
  const { mostsearcheds, cancerSearch } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const keywordHandler = ({ value }) => {
    dispatch(addKeyword(value));
  };

  const Highlight = ({ children, highlightIndex }) => (
    <strong className="highlighted-text">{children}</strong>
  );
  // const mostsearcheds = data?.mostsearcheds?.nodes || [];


  return (
    <ul>
      {mostsearcheds?.map((item) => (
        <li
          onClick={() => {
            keywordHandler({ value: item.title.replace(/(<([^>]+)>)/gi, "") });
            router.push("/doctors");
          }}
          key={item.id}
        >

          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[cancerSearch]}
            autoEscape={true}
            textToHighlight={item.title?.replace(/(<([^>]+)>)/gi, "")}
            highlightTag={Highlight}
          />

        </li>
      ))}
    </ul>
  );
}
