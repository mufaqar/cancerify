"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
import { isDesktop} from "react-device-detect";
// const {isDesktop} = dynamic(() => import('react-device-detect'), { ssr: false })
const TypesOfCancers = (props) => {
  const { cancers } = props;
  const [seeMore, setSeeMore] = useState(false);
  const [cancersToShow, setCancersToShow] = useState(10);
  const isDesk = isDesktop;
  // add functionality to see more cancers by clicking on a button to load more 10 cancers

  useEffect(() => {
    if (isDesk) {
      setCancersToShow(cancers.length);
    } else {
      if (seeMore) {
        setCancersToShow(cancers.length);
      } else {
        setCancersToShow(10);
      }
    }
  }, [cancers, seeMore, isDesk]);


  return isDesk ? (
    <>
      {
        cancers?.length ? (
          cancers
            .slice(0, cancersToShow)
            ?.sort((a, b) => a.title.localeCompare(b.title))
            ?.map((item) => (
              // sort the cancers by alphabetical order
              <div
                className="category-block custom-category-block col-lg-3 col-w-20 col-md-3 col-sm-3 col-xs-4 col-xss-6"
                key={item.id}
              >
                {/* inner-box  */}
                <Link
                  href={`/cancers/${item?.slug}`}
                  className="cancer_item flex items-center justify-center"
                >
                  {item?.cancersOptions?.cancerIcon?.sourceUrl && (
                    <div className="cancer_icons ">
                      <Image
                        width={50}
                        height={50}
                        src={item?.cancersOptions?.cancerIcon?.sourceUrl}
                        alt="item brand"
                      />
                    </div>
                  )}
    
                  {/* <h4 className="cancer_text"><strong >{item?.title}</strong> <span className="pl-1">Cancer</span></h4> */}
                  <h4
                    className="cancer_text"
                    dangerouslySetInnerHTML={{ __html: `${item?.title}` }}
                  />
                </Link>
              </div>
            ))
        ) : (
          <p>No cancers found!</p>
        )
      }
    </>
  ) : (
    <>
      {cancers?.length ? (
        cancers
          .slice(0, cancersToShow)
          ?.sort((a, b) => a.title.localeCompare(b.title))
          ?.map((item) => (
            // sort the cancers by alphabetical order
            <div
              className="category-block custom-category-block col-lg-3 col-w-20 col-md-3 col-sm-3 col-xs-4 col-xss-6"
              key={item.id}
            >
              {/* inner-box  */}
              <Link
                href={`/cancers/${item?.slug}`}
                className="cancer_item flex items-center justify-center"
              >
                {item?.cancersOptions?.cancerIcon?.sourceUrl && (
                  <div className="cancer_icons ">
                    <Image
                      width={50}
                      height={50}
                      src={item?.cancersOptions?.cancerIcon?.sourceUrl}
                      alt="item brand"
                    />
                  </div>
                )}

                {/* <h4 className="cancer_text"><strong >{item?.title}</strong> <span className="pl-1">Cancer</span></h4> */}
                <h4
                  className="cancer_text"
                  dangerouslySetInnerHTML={{ __html: `${item?.title}` }}
                />
              </Link>
            </div>
          ))
      ) : (
        <p>No cancers found!</p>
      )}
      <div className=" flex justify-center items-center pt-3 w-full bg-white">
        <button onClick={() => setSeeMore(!seeMore)} className="">
          <span className="pr-2">
            {cancersToShow === cancers.length ? "See Less" : "See More"}
          </span>
        </button>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(TypesOfCancers), { ssr: false });
