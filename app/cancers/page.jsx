import CancerList from '@/components/Cancers-listing/cancers-list'
import {GET_ALL_CANCERS, GET_PAGE_SEO} from '@/lib/Queries'
import client from '@/lib/ApolloClient';
import dynamic from "next/dynamic";


export async function generateMetadata() {
    const res = await client.request(
      GET_PAGE_SEO,
      // variables are type-checked too!
      { id: 'cancers-seo' }
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

const Page = async () => {

    const res = await client.request(GET_ALL_CANCERS);

    const cancers = res?.cancers?.nodes || [];


    return (
        <>
            <CancerList cancers={cancers}/>
        </>
    );
}

export default dynamic(() => Promise.resolve(Page), { ssr: false });