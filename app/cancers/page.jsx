import CancerList from '@/components/Cancers-listing/cancers-list'
import {GET_ALL_CANCERS} from '@/lib/Queries'
import client from '@/lib/ApolloClient';



export const metadata = {
    title: "Cancers || Cancerify Find Cancer doctors",
    description: "Cancerify - Find Cancer doctors",
  };
export default async function Page() {

    const res = await client.request(GET_ALL_CANCERS);

    const cancers = res?.cancers?.nodes || [];


    return (
        <>
            <CancerList cancers={cancers}/>
        </>
    );
}