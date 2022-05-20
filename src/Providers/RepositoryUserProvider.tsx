import { createContext, ReactNode, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import createEnvironment from '../lib/createEnvironment'
import {repositoryQuery} from '../queries/repository';
import { fetchQuery } from 'react-relay/hooks';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'; // createEnvironmentのtype指定のためインポート
import type {repositoryQuery$data as repositoryQueryType, repositoryQuery as repositoryQueryResponse} from '../queries/__generated__/repositoryQuery.graphql'; // クエリのtypeをインポート

// fragmentを使わず生のクエリを実行してデータ共有をするcontext
type Props = {
    children: ReactNode;
}
export type githubDemoContext = {
    data: repositoryQueryType | undefined;
}
export async function query() {
    const environment: RelayModernEnvironment = createEnvironment()
    const result = await fetchQuery<repositoryQueryResponse>(environment, repositoryQuery, {}).toPromise()
    return result
 }

const RepositoryUserContext = createContext<githubDemoContext>({ data: {} as repositoryQueryType | undefined});
const RepositoryUserProvider: NextPage<Props> = ({ children }) => {
    
const [data, setData] = useState<repositoryQueryType | undefined>(undefined);
    useEffect(() => {
        query()
            .then(data => { setData(data) })
    }, [])
    return (
        <RepositoryUserContext.Provider value={{ data }}>
            {children}
        </RepositoryUserContext.Provider>
    );
 }

export { RepositoryUserProvider, RepositoryUserContext  } ;