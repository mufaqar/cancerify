import { gql } from "graphql-request";

export const GET_ALL_DOCTORS = gql`
  query GetAllDoctors($after: String = "") {
    doctors(after: $after, first: 10) {
      nodes {
        id
        title
        slug
        date
        specializations {
          nodes {
            id
            name
          }
        }
        doctorsoptions {
          location {
          ... on Location {
              id
              title
            }
          }
          cancerTreated {
            ... on Cancer {
              id
              title
            }
          }
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

export const GET_DOCTOR = gql`
  query GetDoctor($id: ID!) {
    doctor(id: $id, idType: SLUG) {
      id
      databaseId
      title
      slug
      specializations {
        nodes {
          id
          name
        }
      }
      doctorsoptions {
        cancerTreated {
          ... on Cancer {
            id
            title
          }
        }
        aboutDoctor
        address
        bookAppointmentLink
        phoneNumber
        socialMedias {
          facebook
          instagram
          twitter
          linkedin
        }
      }
    }
  }
`;

export const GET_DOCTORS_SEO = gql`
  query GetDoctorSeo($id: ID!) {
    doctor(id: $id, idType: SLUG) {
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
  query GetAllPosts($after: String, $first: Int) {
    posts(after: $after, first: $first) {
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

export const GET_NEWS_FEEDS = gql`
  query GetNewsFeed {
    newsFeeds {
      nodes {
        id
        title
        newsFeedOptions {
          videoUrl
        }
      }
    }
  }
`;

export const GET_ALL_CANCERS = gql`
  query GetCancers($after: String) {
    cancers(first: 20, after: $after) {
      nodes {
        id
        slug
        title
        cancersOptions {
          disableFromUser
          cancerIcon {
            sourceUrl
          }
        }
      }
    }
  }
`;
export const GET_CANCER = gql`
  query GetCancer($id: ID!) {
    cancer(id: $id, idType: URI) {
      blocksJSON
      title
      databaseId
      cancersOptions {
        cancerIcon {
          sourceUrl
        }
        supportGroups
        financialSupportOrganizations
        trustedInstitutions
      }
    }
  }
`;

export const GET_CANCER_SEO = gql`
  query GetCancer($id: ID!) {
    cancer(id: $id, idType: URI) {
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

export const GET_ALL_SYMTOMS = gql`
  query Getsymptoms {
    symptoms(first: 40) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;
export const GET_ALL_RISKS = gql`
  query GetRiskFactors {
    riskFactors(first: 40) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials(first: 40) {
      nodes {
        id
        title
        content
        testimonialOptions {
          authorName
          avatar {
            sourceUrl
          }
          designation
        }
      }
    }
  }
`;

export const GET_PAGE_SEO = gql`
  query GetPageSeo($id: ID!, $idType: PageIdType = URI) {
    page(id: $id, idType: $idType) {
      id
      seo {
        title
        focuskw
        metaDesc
        metaKeywords
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_PAGE = gql`
  query GetPage($id: ID!) {
    page(id: $id, idType: URI) {
      id
      homeOptions {
        ourMission {
          description
          heading
          image {
            sourceUrl
          }
          lists {
            itemOne
            descriptionOne
            itemTwo
            descriptionTwo
            itemThree
            descriptionThree
          }
        }
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations(where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        id
        title
      }
    }
  }
`;

export const GET_ALL_SPECIALIZATIONS = gql`
  query GetSpecializations {
    specializations {
      nodes {
        id
        name
      }
    }
  }
`;

export const GET_MOST_SEARCHED = gql`
  query GetMostsearcheds {
  mostsearcheds {
    nodes {
      id
      title
    }
  }
}
`;

export const GET_CANCER_SEARCH = gql`
  query GetCancerSearch($search: String = "p") {
  cancers(where: {search: $search}) {
    nodes {
      id
      title
    }
  }
}
`;