

'use client'

import Link from "next/link";
import ListingShowing from "../components/ListingShowing";
import companyData from "../../../data/topCompany";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addDestination,
  addFoundationDate,
  addKeyword,
  addLocation,
  addPerPage,
  addSort,
} from "../../../features/filter/employerFilterSlice";
import Image from "next/image";

const FilterTopBox = (props) => {

  const {cancers} = props;

  const {
    keyword,
    location,
    destination,
    category,
    foundationDate,
    sort,
    perPage,
  } = useSelector((state) => state.employerFilter) || {};
  const dispatch = useDispatch();

  // keyword filter
  const keywordFilter = (item) =>
    keyword !== ""
      ? item?.name?.toLowerCase().includes(keyword?.toLowerCase()) && item
      : item;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item?.location?.toLowerCase().includes(location?.toLowerCase())
      : item;

  // destination filter
  const destinationFilter = (item) =>
    item?.destination?.min >= destination?.min &&
    item?.destination?.max <= destination?.max;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // foundation date filter
  const foundationDataFilter = (item) =>
    item?.foundationDate?.min >= foundationDate?.min &&
    item?.foundationDate?.max <= foundationDate?.max;

  // sort filter
  const sortFilter = (a, b) =>
    sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

  let content = companyData
    ?.slice(perPage.start !== 0 && 12, perPage.end !== 0 ? perPage.end : 20)
    ?.filter(keywordFilter)
    ?.filter(locationFilter)
    ?.filter(destinationFilter)
    ?.filter(categoryFilter)
    ?.filter(foundationDataFilter)
    ?.sort(sortFilter)
    ?.map((company) => (
      <div className="company-block-three" key={company.id}>
        <div className="inner-box">
          <div className="content">
            <div className="content-inner">
              <span className="company-logo">
                <Image
                  width={50}
                  height={50}
                  src={company.img}
                  alt="company brand"
                />
              </span>
              <h4>
                <Link href={`/employers-single-v1/${company.id}`}>
                  {company.name}
                </Link>
              </h4>
              <ul className="job-info">
                <li>
                  <span className="icon flaticon-map-locator"></span>{" "}
                  {company.location}
                </li>
                <li>
                  <span className="icon flaticon-briefcase"></span>{" "}
                  {company.jobType}
                </li>
              </ul>
            </div>

            <ul className="job-other-info">
              {company.isFeatured ? <li className="privacy">Featured</li> : ""}

              <li className="time">Open Jobs – {company.jobNumber}</li>
            </ul>
          </div>

          <div className="text">{company.jobDetails}</div>

          <button className="bookmark-btn">
            <span className="flaticon-bookmark"></span>
          </button>
        </div>
      </div>
    ));

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // clear handler
  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(addFoundationDate({ min: 1900, max: 2028 }));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };

  console.log(cancers)

  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="text">
            <strong>{cancers?.length}</strong> Cancers
          </div>
        </div>
        {/* End showing-result */}

       
      </div>
      {/* End top filter bar box */}
      {
        cancers?.map((cancer) => (
          <div className="company-block-three" key={cancer.id}>
          <div className="inner-box">
            <div className="content">
              <div className="content-inner">
                {/* <span className="company-logo">
                  <Image
                    width={50}
                    height={50}
                    src={company.img}
                    alt="company brand"
                  />
                </span> */}
                <h4>
                  <Link href={`/cancers/${cancer?.slug}`}>
                    {cancer.title}
                  </Link>
                </h4>
                {/* <ul className="job-info">
                  <li>
                    <span className="icon flaticon-map-locator"></span>{" "}
                    {company.location}
                  </li>
                  <li>
                    <span className="icon flaticon-briefcase"></span>{" "}
                    {company.jobType}
                  </li>
                </ul> */}
              </div>
  
          
            </div>
  
            {/* <div className="text">{company.jobDetails}</div> */}
  
            {/* <button className="bookmark-btn">
              <span className="flaticon-bookmark"></span>
            </button> */}
          </div>
        </div>
        ))
      }

    

      <ListingShowing />
      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
