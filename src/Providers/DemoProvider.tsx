import { createContext, ReactNode, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import createEnvironment from '../lib/createEnvironment'
import repository from '../queries/repository'
import { fetchQuery } from 'react-relay/hooks';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'; // createEnvironmentのtype指定のためインポート
import type {repositoryQuery$data as repositoryQueryType, repositoryQuery} from '../queries/__generated__/repositoryQuery.graphql'; // クエリのtypeをインポート

type Props = {
    children: ReactNode;
}
type githubDemoContext = {
    data: repositoryQueryType | undefined;
}
export async function query() {
    const environment: RelayModernEnvironment = createEnvironment()
    const result = await fetchQuery<repositoryQuery>(environment, repository, {}).toPromise()
    return result
 }

const DemoContext = createContext<githubDemoContext>({ data: undefined });
const DemoProvider: NextPage<Props> = ({ children }) => {
    
const [data, setData] = useState<repositoryQueryType | undefined>(undefined);
    useEffect(() => {
        query()
        .then(data => { setData(data) })
    }, [])
    return (
        <DemoContext.Provider value={{ data }}>
            {children}
        </DemoContext.Provider>
    );
 }

export { DemoProvider, DemoContext  } ;