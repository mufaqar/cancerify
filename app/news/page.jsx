import { GET_NEWS_FEEDS } from "@/lib/Queries";
import client from "@/lib/ApolloClient";
import MobileMenu from "@/components/header/MobileMenu";
import NewsFeedItem from "@/components/NewsFeeds/NewsFeedItem";
import dynamic from "next/dynamic";
import Header from "@/components/Home/Header";
import Disclaimer from "@/components/Home/Disclaimer";

export const metadata = {
  title: "News Feed || Cancerify Find Cancer doctors",
  description: "Cancerify - Find Cancer doctors",
};

const Page = async () => {
  const res = await client.request(GET_NEWS_FEEDS);

  const newsFeeds = res?.newsFeeds?.nodes || [];

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

 
      {/* <!--End Page Title--> */}
      <div className="news_feed_wraper auto-container  my-5">
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
        <Disclaimer />

    </>
  );
}
export default dynamic(() => Promise.resolve(Page), { ssr: false });