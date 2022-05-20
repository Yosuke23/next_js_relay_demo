import { createContext, ReactNode, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import createEnvironment from '../lib/createEnvironment'
import { repositoryToRetrieveDataWithFetchQuery } from '../queries/repositoryToRetrieveDataWithFetchQuery';
import { fetchQuery } from 'react-relay/hooks';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'; // createEnvironmentのtype指定のためインポート
import type {repositoryToRetrieveDataWithFetchQuery$data as repositoryToRetrieveDataWithFetchQueryType, repositoryToRetrieveDataWithFetchQuery as repositoryToRetrieveDataWithFetchQueryResponse} from '../queries/__generated__/repositoryToRetrieveDataWithFetchQuery.graphql'; // クエリのtypeをインポート

// fragmentを使わず生のクエリを実行してデータ共有をするcontext
type Props = {
    children: ReactNode;
}
export type githubDemoContext = {
    data: repositoryToRetrieveDataWithFetchQueryType | undefined;
}
export async function query() {
    const environment: RelayModernEnvironment = createEnvironment()
    const result = await fetchQuery<repositoryToRetrieveDataWithFetchQueryResponse>(environment, repositoryToRetrieveDataWithFetchQuery, {}).toPromise()
    return result
 }

const RepositoryUserNotUsingFragmentContext = createContext<githubDemoContext>({ data: {} as repositoryToRetrieveDataWithFetchQueryType | undefined});
const RepositoryUserNotUsingFragmentProvider: NextPage<Props> = ({ children }) => {
    
const [data, setData] = useState<repositoryToRetrieveDataWithFetchQueryType | undefined>(undefined);
    useEffect(() => {
        query()
            .then(data => { setData(data) })
    }, [])
    return (
        <RepositoryUserNotUsingFragmentContext.Provider value={{ data }}>
            {children}
        </RepositoryUserNotUsingFragmentContext.Provider>
    );
 }

export { RepositoryUserNotUsingFragmentProvider, RepositoryUserNotUsingFragmentContext  } ;