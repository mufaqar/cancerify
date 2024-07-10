import Wrapper from "@/layout/Wrapper";
import Home from "@/components/Home";
import client from "@/lib/ApolloClient";
import { GET_ALL_CANCERS,GET_TESTIMONIALS, GET_ALL_POSTS, GET_PAGE_SEO,GET_HOME_PAGE,GET_MOST_SEARCHED } from "@/lib/Queries";

export async function generateMetadata() {
  const res = await client.request(
    GET_PAGE_SEO,
    // variables are type-checked too!
    { id: 'home' }
  );

  const seo = res?.page?.seo || {};
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

  const resMission = await fetch('https://vni.fe7.mytemp.website/wp-json/wp/v2/pages/39');
  const missionData = await resMission.json();
  const ourMission = missionData?.meta?.ourmissionlists || {};

  const resMostSearch = await client.request(GET_MOST_SEARCHED);
  const mostsearcheds = resMostSearch?.mostsearcheds?.nodes || [];

  

  return (
    <Wrapper>
      <Home 
        cancers={cancers}
        testimonials={testimonials} 
        posts={posts}
        page={page}
        mostsearcheds={mostsearcheds}
        ourMission={ourMission}
      />
    </Wrapper>
  );
}
