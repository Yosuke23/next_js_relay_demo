import { withHydrateDatetime } from 'relay-nextjs/date';
import {
  RequestParameters,
  Variables,
  CacheConfig,
  GraphQLResponse,
  QueryResponseCache,
} from 'relay-runtime';

const cacheExpiry = 60 * 1000 * 5;
const cache = new QueryResponseCache({ size: 250, ttl: cacheExpiry });
//const cacheExpiry = 60 * 1000 * 5;
//const cache = new QueryResponseCache({ size: 250, ttl: cacheExpiry });

const fetchFunction = async (
  operation: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
) => {  
  const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;  
  const forceFetch = cacheConfig && cacheConfig.force;
  const isQuery = operation.operationKind === 'query';
  const queryID = operation.text ?? '';
  const fromCache = cache.get(queryID, variables);
  const isMutation = operation.operationKind === 'mutation';
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }
  const result = await fetch(`${process.env.NEXT_PUBLIC_RELAY_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${Token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables:variables
    }),
  })
  const responseText = await result.text();
  const json = JSON.parse(responseText, withHydrateDatetime) as GraphQLResponse;
  if (isQuery && json) {
    cache.set(queryID, variables, json);
  }
  if (isMutation) {
    cache.clear();
  }
  return json;
}

export default fetchFunction;