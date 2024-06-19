import CancerList from '@/components/Cancers-listing/cancers-list'
import {GET_ALL_CANCERS} from '@/lib/Queries'
import client from '@/lib/ApolloClient';
import dynamic from "next/dynamic";


export const metadata = {
    title: "Cancers || Cancerify Find Cancer doctors",
    description: "Cancerify - Find Cancer doctors",
  };
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