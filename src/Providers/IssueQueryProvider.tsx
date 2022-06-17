import { createContext, ReactNode, useState, useCallback } from 'react';
import { fetchQuery, readInlineData } from 'react-relay/hooks';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'; // createEnvironmentのtype指定のためインポート
import { useRouter } from 'next/router';
import createEnvironment from '../lib/createEnvironment'
import { issueQuery } from '../queries/issueQuery'; 
import type { issueQuery$data as issueQueryResponse, issueQuery as issueQueryType } from '../queries/__generated__/issueQuery.graphql'; // クエリのtypeをインポート
import { issueFragment } from '../queries/issueFragment';
import type { issueFragment$key as issueFragmentRef, issueFragment$data as issueFragmentResponse } from '../queries/__generated__/issueFragment.graphql'

let isConnecting = false;
type Props = {
    children: ReactNode;
}
type IssueQueryContext = {
    issueQueryData: issueFragmentResponse | null;
    updateIssueComments: (issueQueryData: issueFragmentResponse | null) => void;
};
export const IssueQueryContext = createContext<IssueQueryContext>({
    issueQueryData: null,
    updateIssueComments: () => {},
});

const useIssueQuery = (): IssueQueryContext => {
    const [issueQueryData, setIssueQuery] = useState<issueFragmentResponse | null>(null);

    const updateIssueComments = useCallback(
        (issueQueryData: issueFragmentResponse | null) => {
            setIssueQuery(issueQueryData);
        }, []
    );
    return {
        issueQueryData,
        updateIssueComments
    }
}

type FetchOrIssueCallbackArgs = {
  onCompleted: (issueQueryData: issueFragmentResponse) => void;
  onError: (error: Error) => void;
};
type FetchIssueArgs = FetchOrIssueCallbackArgs & {
  id: string;
};

const fetchIssue = ({ onCompleted, onError }: FetchIssueArgs) => {
    const environment: RelayModernEnvironment = createEnvironment()
    fetchQuery<issueQueryType>(environment, issueQuery, {
    }).toPromise()
        .then((data?: issueQueryResponse) => {
            if (!data) {
                onError(new Error('No data'));
                return;
            }
            const issueQueryData = readInlineData<issueFragmentRef>(
                issueFragment, data?.repository?.issue ?? null
            );
            if (!issueQueryData) {
                onError(new Error('No data'));
                return;
            }
            onCompleted(issueQueryData);
        })
        .catch(onError);
};

const IssueQueryProvider = ({ children }: Props): JSX.Element => {
    const context = useIssueQuery();
    const router = useRouter();    
    const onCompleted = (issueQueryData: issueFragmentResponse | null) => {
    context.updateIssueComments(issueQueryData)
    isConnecting = false;
    };
    const onError = () => {
        isConnecting = false;
        router.replace('/');
    };
    if (typeof window !== 'undefined' && !context.issueQueryData && !isConnecting) {
        isConnecting = true;
        fetchIssue({ id: "", onCompleted, onError });
    }
    return (
        <IssueQueryContext.Provider value={context}>
            {children}
        </IssueQueryContext.Provider>
    );
 };
export default IssueQueryProvider;