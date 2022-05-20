import { createContext, ReactNode, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import createEnvironment from '../lib/createEnvironment'
import { issueQuery } from '../queries/issueQuery'; 
import { fetchQuery } from 'react-relay/hooks';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'; // createEnvironmentのtype指定のためインポート
import type {issueQuery$data as issueQueryType, issueQuery as issueQueryResponse} from '../queries/__generated__/issueQuery.graphql'; // クエリのtypeをインポート

// fragmentを使わず生のクエリを実行してデータ共有をするcontext
type Props = {
    children: ReactNode;
}
export type gitHubIssueQueryContext = {
    data: issueQueryType | undefined;
}
export async function query() {
    const environment: RelayModernEnvironment = createEnvironment()
    const result = await fetchQuery<issueQueryResponse>(environment, issueQuery, {}).toPromise()
    return result
 }

const IssueQueryContext = createContext<gitHubIssueQueryContext>({ data: {} as issueQueryType | undefined});
const IssueQueryProvider: NextPage<Props> = ({ children }) => {
    
const [data, setData] = useState<issueQueryType | undefined>(undefined);
    useEffect(() => {
        query()
            .then(data => { setData(data) })
    }, [])
    return (
        <IssueQueryContext.Provider value={{ data }}>
            {children}
        </IssueQueryContext.Provider>
    );
 }

export { IssueQueryProvider, IssueQueryContext  } ;