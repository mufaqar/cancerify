import { gql } from "graphql-request";

export const GET_ALL_DOCTORS = gql`
  query GetAllDoctors($after: String = "") {
    doctors(after: $after, first: 10) {
      nodes {
        id
        title
        slug
        date
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
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const GET_SINGLE_DOCTOR = gql``;

export const GET_ALL_EXPERTISE = gql`
  query GetExpertiseOfDoctors {
    expertiseOfDoctors(first: 20) {
      nodes {
        id
        name
      }
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts($after: String) {
  posts(after: $after, first: 10) {
    nodes {
      id
      title
      slug
      date
      commentCount
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;

export const GET_SINGLE_POST = gql``;
