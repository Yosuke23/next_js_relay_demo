import { graphql } from "relay-runtime";

export const repositoryFragment = graphql`
    fragment repositoryFragment on Repository {
         name
         url
         createdAt
    }
`