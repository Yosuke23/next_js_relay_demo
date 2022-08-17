import { atom } from "recoil";
import { issueFragment$data as IssueFragmentResponse } from '../queries/__generated__/issueFragment.graphql'
const ISSUE_QUERY = "ISSUE_QUERY";
export const IssueQueryState = atom<IssueFragmentResponse>({
    key: ISSUE_QUERY,
    default: undefined,
});