import { graphql } from 'react-relay'
// issueのIDを取得
export default graphql`
query issueQuery {
  repository(owner: "Yosuke23", name: "nextjs_relay_demo") {
    issue(number: 1) {
      id
      publishedAt
      title
    }
  }
}
`
