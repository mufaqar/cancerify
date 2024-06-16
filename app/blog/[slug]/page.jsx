import DetailsContent from "@/components/BlogPage/blog-details/details-content";
import dynamic from "next/dynamic";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import Image from "next/image";

import client from "@/lib/ApolloClient";
import { GET_SINGLE_POST, GET_POST_SEO } from "@/lib/Queries";
import moment from "moment";

export async function generateMetadata({ params: { slug } }) {
  const res = await client.request(
    GET_POST_SEO,
    // variables are type-checked too!
    { id: slug }
  );

  const seo = res?.post?.seo || {};
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
    keywords: `${seo.focuskw},${seo?.metaKeywords}`,
    openGraph: {
      images: seo?.opengraphImage?.sourceUrl
        ? [{ url: seo?.opengraphImage?.sourceUrl }]
        : [],
    },
  };
}

const SingleBlog = async ({ params }) => {
  const { slug } = params;

  const resPost = await client.request(GET_SINGLE_POST, { id: slug });

  const post = resPost?.post || {};

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Blog Single --> */}
      <section className="blog-single">
        <div className="auto-container">
          <div className="upper-box">
            <h3>{post?.title}</h3>

            <ul className="post-info">
              <li>
                <span className="thumb">
                  <Image
                    width={30}
                    height={30}
                    src={
                      post?.author?.node?.avatar?.url ||
                      "/images/resource/resource-1.jpg"
                    }
                    alt="resource"
                  />
                </span>
                {post?.author?.node?.name}
              </li>
              <li>{moment(post?.date).format("MMMM DD, YYYY")}</li>
              <li>{post?.commentCount || 0} Comment</li>
            </ul>
            {/* End post info */}
          </div>
        </div>
        {/* End auto-container */}
        {post?.featuredImage?.node?.sourceUrl && (
          <figure className="main-image ">
            <Image
              width="1903"
              height="500"
              src={post?.featuredImage?.node?.sourceUrl}
              alt="resource"
            />
          </figure>
        )}

        <DetailsContent
          categories={post?.categories?.nodes || []}
          postBlocks={post?.blocksJSON}
        />
      </section>
      {/* <!-- End Blog Single --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleBlog), {
  ssr: false,
});
