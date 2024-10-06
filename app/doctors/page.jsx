import client from "@/lib/ApolloClient";
import { GET_ALL_DOCTORS,GET_PAGE_SEO, GET_ALL_CANCERS, GET_LOCATIONS, GET_ALL_SPECIALIZATIONS,GET_DOCTORS_PAGE } from "@/lib/Queries";
import DoctorLists from "@/components/doctor-listings/doctors-list";
import dynamic from "next/dynamic";

export async function generateMetadata() {
  const res = await client.request(
    GET_PAGE_SEO,
    // variables are type-checked too!
    { id: 'doctors' }
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


const page = async () => {

  // get doctors
  const res = await client.request(GET_ALL_DOCTORS,{ after: ''});
  const doctors = res?.doctors?.nodes ||[];

  // get cancers
  const resCan = await client.request(GET_ALL_CANCERS);
  const cancers = resCan?.cancers?.nodes || [];
  // get locations
  const resLocations = await client.request(GET_LOCATIONS);
  const locations = resLocations?.locations?.nodes || [];

  // get specialities
  const resSpecialities = await client.request(GET_ALL_SPECIALIZATIONS);
  const specialities = resSpecialities?.specializations?.nodes || [];

  const docPage = await client.request(GET_DOCTORS_PAGE);
  const {filter} = docPage?.page?.doctorsOptions || {};


  return (
    <>
      
      <DoctorLists filter={filter} locations={locations} cancers={cancers} doctors={doctors} specialities={specialities}/>
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
