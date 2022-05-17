/**
 * @generated SignedSource<<f16325d322db15a38aac06189c54c09d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type viewerUserQuery$variables = {};
export type viewerUserQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"userFragment">;
  };
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"userFragment">;
  } | null;
};
export type viewerUserQuery = {
  variables: viewerUserQuery$variables;
  response: viewerUserQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "userFragment"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "Yosuke23"
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "avatarUrl",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "createdAt",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewerUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": (v0/*: any*/),
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
    "name": "viewerUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": "user(login:\"Yosuke23\")"
      }
    ]
  },
  "params": {
    "cacheID": "47b6a254e5aadaf39ac0e3eb064e0e15",
    "id": null,
    "metadata": {},
    "name": "viewerUserQuery",
    "operationKind": "query",
    "text": "query viewerUserQuery {\n  viewer {\n    ...userFragment\n    id\n  }\n  user(login: \"Yosuke23\") {\n    ...userFragment\n    id\n  }\n}\n\nfragment userFragment on User {\n  name\n  avatarUrl\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "062f6040edd04e5fa0f7ddc02ea932ab";

export default node;
