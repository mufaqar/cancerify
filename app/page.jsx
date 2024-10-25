import Wrapper from "@/layout/Wrapper";
import Home from "@/components/Home";
import client from "@/lib/ApolloClient";
import { GET_ALL_CANCERS,GET_TESTIMONIALS, GET_ALL_POSTS, GET_PAGE_SEO,GET_HOME_PAGE,GET_MOST_SEARCHED, GET_FAQS } from "@/lib/Queries";

export async function generateMetadata() {
  const res = await client.request(
    GET_PAGE_SEO,
    { id: 'home' }
  );

  const seo = res?.page?.seo || {};
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
    keywords: `${seo.focuskw},${seo?.metaKeywords}`,
    alternates: {
      canonical: `https://www.cancerify.com`,
    },
    openGraph: {
      images: seo?.opengraphImage?.sourceUrl
        ? [{ url: seo?.opengraphImage?.sourceUrl }]
        : [],
    },
  };
}

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

  // Get page
  const resPage = await client.request(GET_HOME_PAGE, { id: 'home' });
  const page = resPage?.page || [];

  const resMission = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages/39`);
  const missionData = await resMission.json();
  const ourMission = missionData?.meta?.ourmissionlists || {};

  const resMostSearch = await client.request(GET_MOST_SEARCHED);
  const mostsearcheds = resMostSearch?.mostsearcheds?.nodes || [];

  // #Faqs 
  const faqs = await client.request(GET_FAQS);

  return (
    <Wrapper>
      <Home 
        cancers={cancers}
        testimonials={testimonials} 
        posts={posts}
        page={page}
        mostsearcheds={mostsearcheds}
        ourMission={ourMission}
        faqs={faqs?.faqs?.nodes}
      />
    </Wrapper>
  );
}
