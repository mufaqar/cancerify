import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://vni.fe7.mytemp.website/graphql'

const client = new GraphQLClient(endpoint);


export default client;