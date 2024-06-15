import dynamic from "next/dynamic";
import BlogList from "@/components/BlogPage/blog-list";
import client from "@/lib/ApolloClient";
import { GET_ALL_POSTS, GET_ALL_DOCTORS } from "@/lib/Queries";

export const metadata = {
    title: "Blog List V1 || Superio - Job Borad React NextJS Template",
    description: "Superio - Job Borad React NextJS Template",
  };


const page = async () => {

  const res = await client.request(GET_ALL_POSTS,{ after: ""});

  const posts = res?.posts?.nodes || [];

    return (
        <>
        <BlogList pageInfo={ res?.posts?.pageInfo} posts={posts} />
      </>
    )
}

export default dynamic(() => Promise.resolve(page), { ssr: false });