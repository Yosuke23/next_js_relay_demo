import { graphql } from 'react-relay'
  
export const issueFragment  = graphql`
fragment issueFragment on Issue {
      id
      publishedAt
      title
      body
      url
      comments(first: 10) {
            edges {
                  node {
                    id
                    bodyText
                    url 
                  }
            }
      }
}
`
