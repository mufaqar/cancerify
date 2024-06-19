'use client'
import Link from "next/link";

const TypesOfCancers = (props) => {

  const {cancers,isError, isLoading} = props;

  return (
    <>

      {
      isLoading ?(
        [...Array(20)].map((_, i) => (
          <div
          className=" category-block col-lg-3 col-md-6 col-sm-12"
          key={i}
        >
          <div className="inner-box cancers_lists_skeleton">
            
          </div>
        </div>
        ))
      ) : isError ? (
        <p>Error</p>
      ) : (
        cancers?.map((item) => (
          <div
            className="category-block col-lg-3 col-md-6 col-sm-12"
            key={item.id}
          >
            <div className="inner-box">
              <Link href={`/cancers/${item?.slug}`} className="content cancers ">
                {/* <span className={`icon ${item.icon}`}></span> */}
                <h4>
                  {item?.title}
                </h4>
                {/* <p>({item.jobNumber} open positions)</p> */}
              </Link>
            </div>
          </div>
        ))
      )
      

      
      }
    </>
  );
};

export default TypesOfCancers;
