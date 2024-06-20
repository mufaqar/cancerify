
'use client'
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/candidateFilterSlice";

const Categories = (props) => {
    const { cancers } = props;

    const { category: getCategory } =
        useSelector((state) => state.candidateFilter) || {};

    const dispatch = useDispatch();

    // category handler
    const categoryHandler = ({name}) => {
        dispatch(addCategory(name));
    };





    return (
        <div className="flex tag-list">
            {
                cancers?.length ?
                cancers?.sort((a, b) => a.title.localeCompare(b.title))?.map((item) => (
                    <li className="rounded-full" key={item?.id}  onClick={() => categoryHandler({name: item.title})}>
                        <a className={`${getCategory === item.title ? 'text-theme-color border-theme-color' : ''} rounded-50 `}  href="#">{item.title}</a>
                    </li>
                ))
                : 
                <p>No cancers found!</p>
            }


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
