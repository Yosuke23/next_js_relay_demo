/**
 * @generated SignedSource<<7ccfa546a8af1d717992bdfa9ff456ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReactionContent = "THUMBS_UP" | "THUMBS_DOWN" | "LAUGH" | "HOORAY" | "CONFUSED" | "HEART" | "ROCKET" | "EYES" | "%future added value";
export type RemoveReactionInput = {
  subjectId: string;
  content: ReactionContent;
  clientMutationId?: string | null;
};
export type ReopenIssueInput = {
  issueId: string;
  clientMutationId?: string | null;
};
export type removeReactionMutation$variables = {
  removeReactionInput: RemoveReactionInput;
  reopenIssueInput: ReopenIssueInput;
};
export type removeReactionMutation$data = {
  readonly removeReaction: {
    readonly reaction: {
      readonly content: ReactionContent;
      readonly id: string;
    } | null;
  } | null;
  readonly reopenIssue: {
    readonly issue: {
      readonly " $fragmentSpreads": FragmentRefs<"issueFragment">;
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
    "name": "removeReactionInput"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "reopenIssueInput"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "removeReactionInput"
    }
  ],
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
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "reopenIssueInput"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 5
    }
  ],
  "concreteType": "ReactionConnection",
  "kind": "LinkedField",
  "name": "reactions",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ReactionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Reaction",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "databaseId",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "reactions(first:5)"
},
v7 = [
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
  (v5/*: any*/),
  (v6/*: any*/),
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
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "comments(first:10)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "removeReactionMutation",
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ReopenIssuePayload",
        "kind": "LinkedField",
        "name": "reopenIssue",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              {
                "kind": "InlineDataFragmentSpread",
                "name": "issueFragment",
                "selections": (v7/*: any*/)
              }
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
      (v3/*: any*/),
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ReopenIssuePayload",
        "kind": "LinkedField",
        "name": "reopenIssue",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f6448e1cbe9cf4827a575bd1cc3ee5b8",
    "id": null,
    "metadata": {},
    "name": "removeReactionMutation",
    "operationKind": "mutation",
    "text": "mutation removeReactionMutation(\n  $removeReactionInput: RemoveReactionInput!\n  $reopenIssueInput: ReopenIssueInput!\n) {\n  removeReaction(input: $removeReactionInput) {\n    reaction {\n      content\n      id\n    }\n  }\n  reopenIssue(input: $reopenIssueInput) {\n    issue {\n      ...issueFragment\n      id\n    }\n  }\n}\n\nfragment issueFragment on Issue {\n  id\n  publishedAt\n  title\n  body\n  url\n  reactions(first: 5) {\n    edges {\n      node {\n        content\n        id\n        databaseId\n      }\n    }\n  }\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        bodyText\n        url\n        reactions(first: 5) {\n          edges {\n            node {\n              content\n              id\n              databaseId\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f0c0b1b9f79f00c9d8da0f2777133344";

export default node;
