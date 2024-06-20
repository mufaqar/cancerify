import Wrapper from "@/layout/Wrapper";
import Home from "@/components/Home";
import client from "@/lib/ApolloClient";
import { GET_ALL_CANCERS,GET_TESTIMONIALS, GET_ALL_POSTS } from "@/lib/Queries";

export const metadata = {
  title: "Cancerify || Find Cancer doctors",
  description: "Cancerify || Find Cancer doctors",
};

export default async function page() {


  const res = await client.request(
    GET_ALL_CANCERS
  )
  const cancers = res?.cancers?.nodes || [];

  // get all testimonial
  const resTesti = await client.request(GET_TESTIMONIALS);

  const testimonials = resTesti?.testimonials?.nodes || [];

  // get blogs
  const resPos = await client.request(GET_ALL_POSTS, { after: "", first: 3});
  const posts = resPos?.posts?.nodes || [];



  return (
    <Wrapper>
      <Home testimonials={testimonials} cancers={cancers} posts={posts}/>
    </Wrapper>
  );
}
