'use client';
import { useRouter } from "next/navigation";


const ListingShowing = (props) => {
  const {pageInfo, isLoading} = props;
  const router = useRouter();

  // const {endCursor, hasNextPage, hasPreviousPage, startCursor} = pageInfo;

  const handleShowMore = (endCursor) => {
    // handle show more
    router.push(`/doctors?endCursor=${endCursor}`, { scroll: false });
  }

  

  return (
    <div className="ls-show-more">
      {/* <p>Showing 36 of 497 Jobs</p>
      <div className="bar">
        <span className="bar-inner" style={{ width: "40%" }}></span>
      </div> */}
      {
        isLoading ? <p>Loading...</p> : <button onClick={() => handleShowMore(pageInfo.endCursor)} className="show-more">Show More</button>
      }
      
    </div>
  );
};

export default ListingShowing;
