import {gql} from 'graphql-request';

export const GET_ALL_DOCTORS = gql`
    query GetAllDoctors {
  doctors {
    nodes {
      id
      title
      slug
      expertiseOfDoctors {
        nodes {
          id
          name
        }
      }
      doctorsoptions {
        address
        phoneNumber
      }
    }
  }
}
`;

export const GET_SINGLE_DOCTOR = gql`
  
`;