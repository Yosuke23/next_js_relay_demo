import { useMemo } from 'react';
import createEnvironment from '../lib/createEnvironment'
import {
    Environment,
    RecordSource,
} from 'relay-runtime';

let relayEnvironment: Environment;

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