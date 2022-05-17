/**
 * @generated SignedSource<<07a84d8333835c194ca6394e5c1005d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type repositoryFragment$data = {
  readonly name: string;
  readonly url: any;
  readonly createdAt: any;
  readonly " $fragmentType": "repositoryFragment";
};
export type repositoryFragment$key = {
  readonly " $data"?: repositoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"repositoryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "repositoryFragment",
  "selections": [
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
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "d1a2fbe848d80a785b32f3f1f08c0a07";

export default node;
