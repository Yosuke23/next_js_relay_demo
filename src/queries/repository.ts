import { graphql } from 'react-relay'

export const repositoryQuery = graphql`
  query repositoryQuery {
    repository(owner: "Yosuke23" name: "nextjs_relay_demo") {
      ...repositoryFragment
    },
    user(login: "Yosuke23") {
      ...userFragment
    }
  }
`