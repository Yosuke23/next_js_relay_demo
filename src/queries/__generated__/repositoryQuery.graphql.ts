/**
 * @generated SignedSource<<f6364ea76a7c3a7cec940bc375e0b604>>
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
    "value": "snowwshiro"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "snowwshiro"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"snowwshiro\",owner:\"snowwshiro\")"
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"snowwshiro\",owner:\"snowwshiro\")"
      }
    ]
  },
  "params": {
    "cacheID": "040c23e52477344d0efcabcf714c8593",
    "id": null,
    "metadata": {},
    "name": "repositoryQuery",
    "operationKind": "query",
    "text": "query repositoryQuery {\n  repository(owner: \"snowwshiro\", name: \"snowwshiro\") {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3b75dbb9a72142f335872f9804b9bfad";

export default node;
