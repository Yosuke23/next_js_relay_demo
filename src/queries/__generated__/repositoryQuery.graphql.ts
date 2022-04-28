/**
 * @generated SignedSource<<c521152f695b1f3d797312b30d85322b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type repositoryQuery$variables = {};
export type repositoryQuery$data = {
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
export type repositoryQuery = {
  variables: repositoryQuery$variables;
  response: repositoryQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "rerec"
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
          (v3/*: any*/)
        ],
        "storageKey": "repository(name:\"rerec\",owner:\"Yosuke23\")"
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
          (v6/*: any*/)
        ],
        "storageKey": "repository(name:\"rerec\",owner:\"Yosuke23\")"
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
    "cacheID": "92cf251f223d89340533de3328ca98a8",
    "id": null,
    "metadata": {},
    "name": "repositoryQuery",
    "operationKind": "query",
    "text": "query repositoryQuery {\n  repository(owner: \"Yosuke23\", name: \"rerec\") {\n    name\n    url\n    createdAt\n    id\n  }\n  user(login: \"Yosuke23\") {\n    name\n    avatarUrl\n    createdAt\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9bf9d98150c5cc6b62117a9d4c00a36f";

export default node;
