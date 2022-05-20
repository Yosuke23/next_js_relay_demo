/**
 * @generated SignedSource<<ea20587a8921464bea4fd8b4a2af323b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type issueQuery$variables = {};
export type issueQuery$data = {
  readonly repository: {
    readonly issue: {
      readonly " $fragmentSpreads": FragmentRefs<"issueFragment">;
    } | null;
  } | null;
};
export type issueQuery = {
  variables: issueQuery$variables;
  response: issueQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "nextjs_relay_demo"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "Yosuke23"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "number",
    "value": 1
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "issueQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "issueFragment"
              }
            ],
            "storageKey": "issue(number:1)"
          }
        ],
        "storageKey": "repository(name:\"nextjs_relay_demo\",owner:\"Yosuke23\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "issueQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "publishedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "body",
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10
                  }
                ],
                "concreteType": "IssueCommentConnection",
                "kind": "LinkedField",
                "name": "comments",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IssueCommentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "IssueComment",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "bodyText",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "comments(first:10)"
              }
            ],
            "storageKey": "issue(number:1)"
          },
          (v2/*: any*/)
        ],
        "storageKey": "repository(name:\"nextjs_relay_demo\",owner:\"Yosuke23\")"
      }
    ]
  },
  "params": {
    "cacheID": "f1a796a7f78156c0c2f10c579a83c518",
    "id": null,
    "metadata": {},
    "name": "issueQuery",
    "operationKind": "query",
    "text": "query issueQuery {\n  repository(owner: \"Yosuke23\", name: \"nextjs_relay_demo\") {\n    issue(number: 1) {\n      ...issueFragment\n      id\n    }\n    id\n  }\n}\n\nfragment issueFragment on Issue {\n  id\n  publishedAt\n  title\n  body\n  url\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        bodyText\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1f72f77e70227f73103ca1221c892016";

export default node;
