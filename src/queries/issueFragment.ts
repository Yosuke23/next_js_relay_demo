import { graphql } from 'react-relay'
  
export const issueFragment  = graphql`
fragment issueFragment on Issue @inline{
      id
      publishedAt
      title
      body
      url
      reactions(first: 5) {
            edges {
                  node {
                        content
                        id
                        databaseId
                  }
            }
      }
      comments(first: 10) {
            edges {
                  node {
                    id
                    bodyText
                    url
                    reactions(first: 5)  {
                          edges {
                                node {
                                      content
                                      id
                                      databaseId
                                    }
                              }
                        }
                  }
            }
      }

}
`
