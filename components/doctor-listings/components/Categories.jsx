
'use client'
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/candidateFilterSlice";
import { useEffect, useState } from "react";
import {GET_ALL_EXPERTISE} from '@/lib/Queries';
import client from '@/lib/ApolloClient';

const Categories = () => {
    const { category } = useSelector((state) => state.candidate) || {};
    const [getExpertise, setExpertise] = useState([]);

    const { category: getCategory } =
        useSelector((state) => state.candidateFilter) || {};

    const dispatch = useDispatch();

    // category handler
    const categoryHandler = ({name}) => {
        dispatch(addCategory(name));
    };


    useEffect(() => {
        const fetchData = async () => {
            const res = await client.request(GET_ALL_EXPERTISE);
            setExpertise([...res?.expertiseOfDoctors?.nodes]);
        }
        fetchData();
    }, [])


    return (
        <div className="flex tag-list">
            {
                getExpertise?.length ?
                getExpertise?.map((item) => (
                    <li className="rounded-full" key={item?.id}  onClick={() => categoryHandler({name: item.name})}>
                        <a className={`${getCategory === item.name ? 'text-theme-color border-theme-color' : ''} rounded-50 `}  href="#">{item.name}</a>
                    </li>
                ))
                : 
                [0,1,2,3,4,5,6,7,8,9].map((item, index) => (
                    <li className=" tag-sekleton" key={index}></li>
                ))
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
