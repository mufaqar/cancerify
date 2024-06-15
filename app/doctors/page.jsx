import client from "@/lib/ApolloClient";
import { GET_ALL_DOCTORS } from "@/lib/Queries";
import DoctorLists from "@/components/doctor-listings/doctors-list";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Doctors || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const page = async () => {
  const res = await client.request(GET_ALL_DOCTORS);

  const doctors = res.doctors.nodes;

  console.log(doctors);
  return (
    <>
      
      <DoctorLists doctors={doctors} />
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
