import { atom } from "recoil";
import { issueFragment$key as issueFragmentRef, issueFragment$data as issueFragmentResponse } from '../queries/__generated__/issueFragment.graphql'

export const IssueQueryState = atom<issueFragmentResponse>({
    key: "issue Query",
    default: undefined,
});