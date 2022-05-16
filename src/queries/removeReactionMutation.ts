import { graphql, commitMutation } from 'react-relay'
import createEnvironment from '../lib/createEnvironment';
import type {
  RemoveReactionInput,
  removeReactionMutation as removeReactionMutationType,
removeReactionMutation$data as removeReactionMutationResponse,
} from '../queries/__generated__/removeReactionMutation.graphql';
// src/queries/issueQuery.tsで取得した issueのIDをここに渡せる様な実装を目標にする、、まだできてない
export const removeReactionMutation = graphql`
  mutation removeReactionMutation($input:RemoveReactionInput!) {
    removeReaction(input:$input) {
      reaction {
        content
      }
    }
  }
`
      
// ここは現状つかってない
export const commitRemoveReactionMutation = (): Promise<removeReactionMutationResponse> =>
  new Promise((resolve, reject) => {
    const environment = createEnvironment()
    if (!environment) {
      reject(new Error('No environment'));
      return;
    }
    commitMutation<removeReactionMutationType>(environment, {
      mutation: removeReactionMutation,
      variables: {
        input: <RemoveReactionInput>{},
      },
      onCompleted: (response) => {
        resolve(response);
        console.log(response)
      },
      onError: (error) => {
        reject(error);
      },
    });
  }  );