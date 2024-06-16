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

export const GET_SINGLE_POST = gql`
  query GetPost($id: ID!) {
    post(idType: SLUG, id: $id) {
      title
      slug
      date
      excerpt
      commentCount
      categories {
        nodes {
          id
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      blocksJSON
    }
  }
`;

export const GET_ALL_POSTS_CATEGORY = gql`
  query GetAllPostsCategories {
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export const GET_ALL_POSTS_TAGS = gql`
  query GetAllPostsTags {
    tags {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export const GET_POST_SEO = gql`
  query GetPostSeo($id: ID!) {
    post(idType: SLUG, id: $id) {
      seo {
        metaDesc
        title
        readingTime
        focuskw
        metaKeywords
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;
