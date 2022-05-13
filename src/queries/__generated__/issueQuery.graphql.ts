/**
 * @generated SignedSource<<8cc74888448b2430cc4f4ec646b7981d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type issueQuery$variables = {};
export type issueQuery$data = {
  readonly repository: {
    readonly issue: {
      readonly id: string;
      readonly publishedAt: any | null;
      readonly title: string;
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "number",
      "value": 1
    }
  ],
  "concreteType": "Issue",
  "kind": "LinkedField",
  "name": "issue",
  "plural": false,
  "selections": [
    (v1/*: any*/),
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
    }
  ],
  "storageKey": "issue(number:1)"
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
          (v2/*: any*/)
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
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"nextjs_relay_demo\",owner:\"Yosuke23\")"
      }
    ]
  },
  "params": {
    "cacheID": "c4d04cc6afcfec879fd932466f8c2c99",
    "id": null,
    "metadata": {},
    "name": "issueQuery",
    "operationKind": "query",
    "text": "query issueQuery {\n  repository(owner: \"Yosuke23\", name: \"nextjs_relay_demo\") {\n    issue(number: 1) {\n      id\n      publishedAt\n      title\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "595ad045ce26d2253ab63695e8a29955";

export default node;
