/**
 * @generated SignedSource<<0e764f4d0a9dbdebb54bff03f912d26a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type repositoryToRetrieveDataWithFetchQuery$variables = {};
export type repositoryToRetrieveDataWithFetchQuery$data = {
  readonly repository: {
    readonly name: string;
    readonly url: any;
    readonly createdAt: any;
  } | null;
  readonly user: {
    readonly name: string | null;
    readonly avatarUrl: any;
    readonly createdAt: any;
  } | null;
};
export type repositoryToRetrieveDataWithFetchQuery = {
  variables: repositoryToRetrieveDataWithFetchQuery$variables;
  response: repositoryToRetrieveDataWithFetchQuery$data;
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "Yosuke23"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "repositoryToRetrieveDataWithFetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "repository(name:\"nextjs_relay_demo\",owner:\"Yosuke23\")"
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v5/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "user(login:\"Yosuke23\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "repositoryToRetrieveDataWithFetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": "repository(name:\"nextjs_relay_demo\",owner:\"Yosuke23\")"
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v5/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": "user(login:\"Yosuke23\")"
      }
    ]
  },
  "params": {
    "cacheID": "909fd4a4591f6c712f9a5805ef49b395",
    "id": null,
    "metadata": {},
    "name": "repositoryToRetrieveDataWithFetchQuery",
    "operationKind": "query",
    "text": "query repositoryToRetrieveDataWithFetchQuery {\n  repository(owner: \"Yosuke23\", name: \"nextjs_relay_demo\") {\n    name\n    url\n    createdAt\n    id\n  }\n  user(login: \"Yosuke23\") {\n    name\n    avatarUrl\n    createdAt\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d3be5f93c7a11559e819c28054120800";

export default node;
