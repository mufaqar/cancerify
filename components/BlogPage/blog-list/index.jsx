'use client'
import Blog6 from "../../blog/Blog6";
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import BlogPagination from "../blog-sidebar/BlogPagination";
import BlogSidebar from "../blog-sidebar";
import Breadcrumb from "../../common/Breadcrumb";
import { useEffect } from "react";
import client from "@/lib/ApolloClient";
import { GET_ALL_POSTS } from "@/lib/Queries";
const index = (props) => {

  const {posts, pageInfo}= props;

  console.log(posts);
  // useEffect(() => {

  //   const handelFetch = async () => {
  //     const res = await client.request(GET_ALL_POSTS);
  //     console.log(res);
  //   }
  //   handelFetch();
  // } , [])


  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="News Feed" meta="News" />
      {/* <!--End Page Title--> */}

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                  <Blog6 pageInfo={pageInfo} posts={posts} />
                </div>
                {/* End .row */}
                {
                  pageInfo?.hasNextPage && <BlogPagination />
                }
                
                {/* End blog pagination */}
              </div>
              {/* End blog-grid */}
            </div>
            {/* <!--End Content Side--> */}

            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <BlogSidebar />
            </div>
            {/* <!--End Sidebar Side--> */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- End Sidebar Container --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
