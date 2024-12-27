// src/lib/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
  query GetProperties {
    properties {
      id
      name
      address
    }
  }
`;
