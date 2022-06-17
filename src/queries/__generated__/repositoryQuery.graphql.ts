/**
 * @generated SignedSource<<7d7081775ef2285c907212f39ea27991>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type repositoryQuery$variables = {};
export type repositoryQuery$data = {
  readonly repository: {
    readonly " $fragmentSpreads": FragmentRefs<"repositoryFragment">;
  } | null;
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"userFragment">;
  } | null;
};
export type repositoryQuery = {
  variables: repositoryQuery$variables;
  response: repositoryQuery$data;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "repositoryQuery",
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
            "kind": "InlineDataFragmentSpread",
            "name": "repositoryFragment",
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "userFragment"
          }
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
    "name": "repositoryQuery",
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
          (v5/*: any*/)
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatarUrl",
            "storageKey": null
          },
          (v3/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": "user(login:\"Yosuke23\")"
      }
    ]
  },
  "params": {
    "cacheID": "1a43e1d7f30c82ba5b11240b88b6ba27",
    "id": null,
    "metadata": {},
    "name": "repositoryQuery",
    "operationKind": "query",
    "text": "query repositoryQuery {\n  repository(owner: \"Yosuke23\", name: \"nextjs_relay_demo\") {\n    ...repositoryFragment\n    id\n  }\n  user(login: \"Yosuke23\") {\n    ...userFragment\n    id\n  }\n}\n\nfragment repositoryFragment on Repository {\n  name\n  url\n  createdAt\n}\n\nfragment userFragment on User {\n  name\n  avatarUrl\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "2657bb738ae396bfe9c005907714c9f2";

export default node;
