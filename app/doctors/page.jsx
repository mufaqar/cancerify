import client from "@/lib/ApolloClient";
import { GET_ALL_DOCTORS,GET_ALL_CANCERS, GET_LOCATIONS } from "@/lib/Queries";
import DoctorLists from "@/components/doctor-listings/doctors-list";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Doctors || Cancerify Find Cancer doctors",
  description: "Cancerify - Find Cancer doctors",
};


const page = async ({searchParams}) => {
  const {endCursor} = searchParams;
  // get doctors
  // const res = await client.request(GET_ALL_DOCTORS,{ after: ""});
  // const doctors = res?.doctors?.nodes ||[];

  // get cancers
  const resCan = await client.request(GET_ALL_CANCERS);
  const cancers = resCan?.cancers?.nodes || [];
  // get locations
  const resLocations = await client.request(GET_LOCATIONS);
  const locations = resLocations?.locations?.nodes || [];

  return (
    <>
      
      <DoctorLists locations={locations} cancers={cancers} />
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
