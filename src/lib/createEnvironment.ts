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

export default createEnvironment;