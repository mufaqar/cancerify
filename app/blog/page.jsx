import dynamic from "next/dynamic";
import BlogList from "@/components/BlogPage/blog-list";
import client from "@/lib/ApolloClient";
import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_CATEGORY,
  GET_ALL_POSTS_TAGS,
} from "@/lib/Queries";

export const metadata = {
  title: "Blog || Cancerify Find Cancer doctors",
  description: "Cancerify - Find Cancer doctors",
};

const page = async () => {
  // Get all posts
  const res = await client.request(GET_ALL_POSTS, { after: "" });
  const posts = res?.posts?.nodes || [];
  // get all categories

  const resCate = await client.request(GET_ALL_POSTS_CATEGORY);
  const categories = resCate?.categories?.nodes || [];

  // get all tags
  const resTags = await client.request(GET_ALL_POSTS_TAGS);
  const tags = resTags?.tags?.nodes || [];

  return (
    <>
      <BlogList
        pageInfo={res?.posts?.pageInfo}
        posts={posts}
        categories={categories}
        tags={tags}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
