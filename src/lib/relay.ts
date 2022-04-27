import { useMemo } from 'react';
import fetchQuery from './fetchFunction';
import {
    Environment,
    Network,
    RecordSource,
    Store,
    RequestParameters,
    Variables, // 型のimport
    CacheConfig, // 型のimport
    UploadableMap, // 型のimport
    GraphQLResponse, // 型のimport
    QueryResponseCache, // 型のimport
} from 'relay-runtime';

let relayEnvironment: Environment;

// const fetchQuery = (operation: RequestParameters, valiables: Variables, chcheConfig: CacheConfig, uploadables: UploadableMap) => {
//     const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
//     return fetch(`${process.env.NEXT_PUBLIC_RELAY_ENDPOINT}`, {
//         method: 'POST',
//         headers: {
//             Authorization: `bearer ${Token}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             query: operation.text,
//             valiables
//         }),
//     }).then((response) => response.json())
// }

const createEnvironment = (initialRecords: RecordSource) => {
    return new Environment({
        network: Network.create(fetchQuery),
        store: new Store(new RecordSource())

    })
}

export const initEnvironment = (initialRecords: RecordSource) => { 
    const environment = relayEnvironment ?? createEnvironment(initialRecords)
    if (initialRecords) {
        environment.getStore().publish(new RecordSource());
    }
    if (typeof window === 'undefined') return environment
    if (!relayEnvironment) relayEnvironment = environment

    return relayEnvironment
}

const useEnvironment = (initialRecords: RecordSource) => {
    const store = useMemo(() => initEnvironment(initialRecords), [initialRecords])
    return store
}
export default useEnvironment