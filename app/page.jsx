import Wrapper from "@/layout/Wrapper";
import Home from "@/components/Home";
import client from "@/lib/ApolloClient";
import { GET_ALL_CANCERS,GET_TESTIMONIALS, GET_ALL_POSTS, GET_PAGE_SEO,GET_HOME_PAGE,GET_MOST_SEARCHED, GET_FAQS } from "@/lib/Queries";

const data = [
  {
      title: "What is Cancerify's mission?",
      excerpt: "<p>Cancerify is dedicated to eliminating the fear associated with cancer by empowering individuals with the tools and resources needed to access top-quality care. Our mission is to ensure that everyone has the opportunity to receive superior cancer treatment, guidance, and support, helping them navigate their journey with confidence and hope.</p>"
  },
  {
      title: "How does Cancerify help patients find top cancer doctors?",
      excerpt: "<p>We provide a curated list of the top 10% of oncologists worldwide. By searching by cancer type on our platform, patients can connect with leading specialists who have a proven track record in treating specific cancers, ensuring they receive the highest standard of care.</p>"
  },
  {
      title: "What makes Cancerify's news feed unique?",
      excerpt: "<p>Our news feed delivers the latest science-backed cancer research and breakthroughs through unique video content. Sourced from leading doctors and researchers globally, it keeps patients and caregivers informed about new treatments, clinical trials, and advancements in cancer care.</p>"
  },
  {
      title: "Is Cancerify affiliated with any external organizations or companies?",
      excerpt: "<p>No, Cancerify is a self-funded platform committed to advancing cancer care without any outside interference. Our independence ensures that the information and resources we provide are unbiased and solely focused on benefiting patients.</p>"
  },
  {
      title: "How does Cancerify ensure the authenticity of its content and resources?",
      excerpt: "<p>We recognize the challenges within the healthcare industry and prioritize authenticity. All information on our platform is thoroughly vetted by medical professionals to ensure accuracy and reliability, providing users with trustworthy resources.</p>"
  },
  {
      title: "Can anyone access Cancerify's services, and is there a cost involved?",
      excerpt: "<p>Yes, our platform is accessible to everyone, and there is no cost to use our services. We believe that access to top-quality cancer care and information should be available to all, regardless of financial circumstances.</p>"
  },
  {
      title: "What sets Cancerify apart from other cancer resource websites?",
      excerpt: "<p>Cancerify stands out by offering a curated list of top oncologists, unique video news feeds with the latest research, and a commitment to authenticity through our self-funded model. We focus on providing unbiased, high-quality resources without external influences, ensuring users receive the best support possible.</p>"
  },
  {
      title: "What types of cancer does Cancerify provide information and resources for?",
      excerpt: "<p>We cover a comprehensive list of cancer types, including but not limited to bladder, brain, breast, cervical, colorectal, endometrial, esophageal, kidney, laryngeal, leukemia, liver, lung, melanoma, non-Hodgkin lymphoma, oral, ovarian, pancreatic, prostate, stomach, and thyroid cancers.</p>"
  },
  {
      title: "How frequently is the information on Cancerify updated?",
      excerpt: "<p>We regularly update our platform with the latest research findings, news, and doctor listings to ensure users have access to current information. Our video news feeds and articles are continually refreshed to reflect the newest developments in cancer care.</p>"
  },
  {
      title: "How can I get involved or support Cancerify's mission?",
      excerpt: "<p>You can support us by sharing our platform on social media and spreading the word to friends and family who may benefit from our resources. By increasing awareness, you help us reach more people in need of top-quality cancer care and information.</p>"
  }
];



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
    //const faqs = await client.request(GET_FAQS);

  return (
    <Wrapper>
      <Home 
        cancers={cancers}
        testimonials={testimonials} 
        posts={posts}
        page={page}
        mostsearcheds={mostsearcheds}
        ourMission={ourMission}
       faqs={data}
      />
    </Wrapper>
  );
}
