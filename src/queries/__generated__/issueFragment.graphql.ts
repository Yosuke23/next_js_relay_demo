/**
 * @generated SignedSource<<e31eeeedc3f65ac661676b49f25eaaf0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type ReactionContent = "THUMBS_UP" | "THUMBS_DOWN" | "LAUGH" | "HOORAY" | "CONFUSED" | "HEART" | "ROCKET" | "EYES" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type issueFragment$data = {
  readonly id: string;
  readonly publishedAt: any | null;
  readonly title: string;
  readonly body: string;
  readonly url: any;
  readonly reactions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly content: ReactionContent;
        readonly id: string;
        readonly databaseId: number | null;
      } | null;
    } | null> | null;
  };
  readonly comments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly bodyText: string;
        readonly url: any;
        readonly reactions: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly content: ReactionContent;
              readonly id: string;
              readonly databaseId: number | null;
            } | null;
          } | null> | null;
        };
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "issueFragment";
};
export type issueFragment$key = {
  readonly " $data"?: issueFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"issueFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "issueFragment"
};

(node as any).hash = "1fb3954edab4f11b8c3654a60c60f6c2";

export default node;
