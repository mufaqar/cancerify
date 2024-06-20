import client from "@/lib/ApolloClient";
import { GET_ALL_DOCTORS,GET_ALL_CANCERS } from "@/lib/Queries";
import DoctorLists from "@/components/doctor-listings/doctors-list";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Doctors || Cancerify Find Cancer doctors",
  description: "Cancerify - Find Cancer doctors",
};


const page = async ({searchParams}) => {
  const {endCursor} = searchParams;
  // get doctors
  const res = await client.request(GET_ALL_DOCTORS,{ after: ""});
  const doctors = res?.doctors?.nodes ||[];

  // get cancers
  const resCan = await client.request(GET_ALL_CANCERS);
  const cancers = resCan?.cancers?.nodes || [];


  return (
    <>
      
      <DoctorLists cancers={cancers} pageInfo={res?.doctors?.pageInfo} doctors={doctors} />
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
