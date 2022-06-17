/**
 * @generated SignedSource<<2fdee9c394b053bb23fdb3633391fb77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
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

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "repositoryFragment"
};

(node as any).hash = "66116baba83f11ac5815da0cdb3673b8";

export default node;
