import { graphql } from "relay-runtime";

export const userFragment = graphql`
    fragment userFragment on User {
      name
      avatarUrl
      createdAt
    }
`