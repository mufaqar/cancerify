import { GET_NEWS_FEEDS } from "@/lib/Queries";
import client from "@/lib/ApolloClient";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import Breadcrumb from "@/components/common/Breadcrumb";
import MobileMenu from "@/components/header/MobileMenu";
import NewsFeedItem from "@/components/NewsFeeds/NewsFeedItem";

export const metadata = {
  title: "News Feed || Cancerify Find Cancer doctors",
  description: "Cancerify - Find Cancer doctors",
};

export default async function Page() {
  const res = await client.request(GET_NEWS_FEEDS);

  const newsFeeds = res?.newsFeeds?.nodes || [];

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="News Feed" meta="News feed" />
      {/* <!--End Page Title--> */}
      <div className="news_feed_wraper auto-container mt-5">
        {newsFeeds?.length ? (
          <div className="news_feed_lists">
            {newsFeeds?.map((newsFeed) => (
              <NewsFeedItem key={newsFeed.id} item={newsFeed} />
            ))}
          </div>
        ) : (
          <p>No news feed found</p>
        )}
      </div>

      {/* End .row */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
}
