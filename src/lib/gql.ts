import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries($codes: [String!]) {
    countries(filter: { code: { in: $codes } }) {
      name
      code
      continent {
        name
      }
      capital
      currency
      emoji
      native
    }
  }
`;


export const QUERY = `
  query {
    countries {
      code
      name
      capital
    }
  }
`;
