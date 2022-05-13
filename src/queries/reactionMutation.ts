import { graphql, commitMutation } from 'react-relay'
import createEnvironment from '../lib/createEnvironment';
import type {
  AddReactionInput,
  ReactionContent,
  reactionMutation as reactionMutationType,
reactionMutation$data as reactionMutationResponse,
} from '../queries/__generated__/reactionMutation.graphql';
// src/queries/issueQuery.tsで取得した issueのIDをここに渡せる様な実装を目標にする、、まだできてない
export const reactionMutations = graphql`
 mutation reactionMutation($input:AddReactionInput!){ 
   addReaction(input:$input) { 
    reaction{
     content
    }
   } 
  }
`


// ここは現状つかってない
export const commitReactionMutation = (): Promise<reactionMutationResponse> =>
  new Promise((resolve, reject) => {
    const environment = createEnvironment()
    if (!environment) {
      reject(new Error('No environment'));
      return;
    }
    commitMutation<reactionMutationType>(environment, {
      mutation: reactionMutations,
      variables: {
        input: <AddReactionInput>{},
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