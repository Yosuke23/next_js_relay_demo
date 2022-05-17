import { graphql } from "relay-runtime";

export const viewerUserQuery = graphql`
    query viewerUserQuery {
        viewer {
            ...userFragment
        }

        user(login: "Yosuke23") {
            ...userFragment
        }
    }
`