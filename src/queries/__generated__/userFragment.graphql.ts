/**
 * @generated SignedSource<<1d4981b256efea14ffb92f1b632a0c6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userFragment$data = {
  readonly name: string | null;
  readonly avatarUrl: any;
  readonly createdAt: any;
  readonly " $fragmentType": "userFragment";
};
export type userFragment$key = {
  readonly " $data"?: userFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"userFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "userFragment",
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
      "name": "avatarUrl",
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "198dbb7955dcb677ca0e7f02e305858e";

export default node;
