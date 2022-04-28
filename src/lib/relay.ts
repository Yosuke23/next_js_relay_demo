import { useMemo } from 'react';
import fetchFunction from '../lib/fetchFunction';
import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

let relayEnvironment: Environment;

const createEnvironment = () => {
    return new Environment({
        network: Network.create(fetchFunction),
        store: new Store(new RecordSource())
    })
}

export const initEnvironment = (initialRecords: RecordSource) => { 
    const environment = relayEnvironment ?? createEnvironment()
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