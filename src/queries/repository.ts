import { graphql } from 'react-relay'

export default graphql`
  query repositoryQuery {
    repository(owner: "Yosuke23" name: "nextjs_relay_demo") {
      name
      url
      createdAt
    },
    user(login: "Yosuke23") {
      name
      avatarUrl
      createdAt
    }
  }
`