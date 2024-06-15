import client from "@/lib/ApolloClient";
import { GET_ALL_DOCTORS } from "@/lib/Queries";
import DoctorLists from "@/components/doctor-listings/doctors-list";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Doctors || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const page = async ({searchParams}) => {
  const {endCursor} = searchParams;
  const res = await client.request(GET_ALL_DOCTORS,{ after: ""});

  const doctors = res?.doctors?.nodes ||[];

    
  return (
    <>
      
      <DoctorLists pageInfo={res?.doctors?.pageInfo} doctors={doctors} />
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
