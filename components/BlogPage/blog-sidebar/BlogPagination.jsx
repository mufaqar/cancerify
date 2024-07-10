'use client'

import { useRouter } from "next/navigation";
const BlogPagination = (props) => {
  const {pageInfo} = props;
  const router = useRouter();
  return (
    <nav className="ls-pagination">
      <ul>
        {
          pageInfo?.hasPreviousPage && (
            <li className="prev">
              <button onClick={() => router.push(`/blog?endCursor=${pageInfo?.startCursor}`, {scroll: false})}>
                <i className="fa fa-arrow-left"></i>
              </button>
            </li>
          )
        }
        {/* End li */}

        {
          pageInfo?.hasNextPage && (
            <li className="next">
              <button onClick={() => router.push(`/blog?endCursor=${pageInfo?.endCursor}`,{scroll: false})}>
                <i className="fa fa-arrow-right"></i>
              </button>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default BlogPagination;
