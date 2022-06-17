/**
 * @generated SignedSource<<837ce4678ea4f04ce33857cd00235d3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReactionContent = "THUMBS_UP" | "THUMBS_DOWN" | "LAUGH" | "HOORAY" | "CONFUSED" | "HEART" | "ROCKET" | "EYES" | "%future added value";
export type AddReactionInput = {
  subjectId: string;
  content: ReactionContent;
  clientMutationId?: string | null;
};
export type ReopenIssueInput = {
  issueId: string;
  clientMutationId?: string | null;
};
export type reactionMutation$variables = {
  reactionInput: AddReactionInput;
  reopenIssueInput: ReopenIssueInput;
};
export type reactionMutation$data = {
  readonly addReaction: {
    readonly reaction: {
      readonly content: ReactionContent;
      readonly id: string;
      readonly databaseId: number | null;
    } | null;
  } | null;
  readonly reopenIssue: {
    readonly issue: {
      readonly " $fragmentSpreads": FragmentRefs<"issueFragment">;
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
    "name": "reactionInput"
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
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  },
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "databaseId",
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "reactionInput"
    }
  ],
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
      "selections": (v2/*: any*/),
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
          "selections": (v2/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "reactions(first:5)"
},
v7 = [
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
              (v1/*: any*/),
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
    "name": "reactionMutation",
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
    "name": "reactionMutation",
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
    "cacheID": "cde94b5427db57cfa6f4899cdea7cf0d",
    "id": null,
    "metadata": {},
    "name": "reactionMutation",
    "operationKind": "mutation",
    "text": "mutation reactionMutation(\n  $reactionInput: AddReactionInput!\n  $reopenIssueInput: ReopenIssueInput!\n) {\n  addReaction(input: $reactionInput) {\n    reaction {\n      content\n      id\n      databaseId\n    }\n  }\n  reopenIssue(input: $reopenIssueInput) {\n    issue {\n      ...issueFragment\n      id\n    }\n  }\n}\n\nfragment issueFragment on Issue {\n  id\n  publishedAt\n  title\n  body\n  url\n  reactions(first: 5) {\n    edges {\n      node {\n        content\n        id\n        databaseId\n      }\n    }\n  }\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        bodyText\n        url\n        reactions(first: 5) {\n          edges {\n            node {\n              content\n              id\n              databaseId\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "71d9b23a42dfc8b0e474865f08622a7d";

export default node;
