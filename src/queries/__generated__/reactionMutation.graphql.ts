/**
 * @generated SignedSource<<4c47c490f0cc0e85941de2245cf9f6c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ReactionContent = "THUMBS_UP" | "THUMBS_DOWN" | "LAUGH" | "HOORAY" | "CONFUSED" | "HEART" | "ROCKET" | "EYES" | "%future added value";
export type AddReactionInput = {
  subjectId: string;
  content: ReactionContent;
  clientMutationId?: string | null;
};
export type reactionMutation$variables = {
  input: AddReactionInput;
};
export type reactionMutation$data = {
  readonly addReaction: {
    readonly reaction: {
      readonly content: ReactionContent;
    } | null;
  } | null;
};
export type reactionMutation = {
  variables: reactionMutation$variables;
  response: reactionMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "reactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddReactionPayload",
        "kind": "LinkedField",
        "name": "addReaction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Reaction",
            "kind": "LinkedField",
            "name": "reaction",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "reactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddReactionPayload",
        "kind": "LinkedField",
        "name": "addReaction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Reaction",
            "kind": "LinkedField",
            "name": "reaction",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "15ae80c79900f0360ecaa94a48059336",
    "id": null,
    "metadata": {},
    "name": "reactionMutation",
    "operationKind": "mutation",
    "text": "mutation reactionMutation(\n  $input: AddReactionInput!\n) {\n  addReaction(input: $input) {\n    reaction {\n      content\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1790cb863e0d796c45684ac10d7d99d4";

export default node;
