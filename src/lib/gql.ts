import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
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
