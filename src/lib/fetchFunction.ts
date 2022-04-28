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

export default async (
  operation: RequestParameters,
  valiables: Variables,
) => {
     const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;
    return fetch(`${process.env.NEXT_PUBLIC_RELAY_ENDPOINT}`, {
        method: 'POST',
        headers: {
            Authorization: `bearer ${Token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            valiables
        }),
    }).then((response) => response.json())
}