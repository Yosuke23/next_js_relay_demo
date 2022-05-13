import {
  RequestParameters,
  Variables,
  // CacheConfig,
  // UploadableMap,
  // GraphQLResponse,
  // QueryResponseCache,
} from 'relay-runtime';

//const cacheExpiry = 60 * 1000 * 5;
//const cache = new QueryResponseCache({ size: 250, ttl: cacheExpiry });

const fetchFunction = async (
  operation: RequestParameters,
  variables: Variables,
) => {  
  const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;  
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
  return result.json();
}

export default fetchFunction;