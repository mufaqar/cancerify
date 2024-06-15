
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
    const categoryHandler = (e) => {
        dispatch(addCategory(e.target.value));
    };


    useEffect(() => {
        const fetchData = async () => {
            const res = await client.request(GET_ALL_EXPERTISE);
            setExpertise([...res.expertiseOfDoctors.nodes]);
        }
        fetchData();
    }, [])

    console.log(getExpertise);

    return (
        <>
            <select
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
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
