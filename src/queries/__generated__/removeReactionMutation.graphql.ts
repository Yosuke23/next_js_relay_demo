/**
 * @generated SignedSource<<cdc18b821a5fcb2b053567571793cf41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ReactionContent = "THUMBS_UP" | "THUMBS_DOWN" | "LAUGH" | "HOORAY" | "CONFUSED" | "HEART" | "ROCKET" | "EYES" | "%future added value";
export type RemoveReactionInput = {
  subjectId: string;
  content: ReactionContent;
  clientMutationId?: string | null;
};
export type removeReactionMutation$variables = {
  input: RemoveReactionInput;
};
export type removeReactionMutation$data = {
  readonly removeReaction: {
    readonly reaction: {
      readonly content: ReactionContent;
    } | null;
  } | null;
};
export type removeReactionMutation = {
  variables: removeReactionMutation$variables;
  response: removeReactionMutation$data;
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
    "name": "removeReactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveReactionPayload",
        "kind": "LinkedField",
        "name": "removeReaction",
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
    "name": "removeReactionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveReactionPayload",
        "kind": "LinkedField",
        "name": "removeReaction",
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
    "cacheID": "dd3e9012362a1ea4f49bd2b4deffc2aa",
    "id": null,
    "metadata": {},
    "name": "removeReactionMutation",
    "operationKind": "mutation",
    "text": "mutation removeReactionMutation(\n  $input: RemoveReactionInput!\n) {\n  removeReaction(input: $input) {\n    reaction {\n      content\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d67b64aa7ed743ed91fe61102b51b6f";

export default node;
