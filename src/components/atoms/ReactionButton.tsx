import React, { useState, useEffect, useRef } from 'react';
import { PreloadedQuery, useFragment, useMutation, useQueryLoader } from 'react-relay';
import type { gitHubIssueQueryContext } from '../../Providers/IssueQueryProvider'
import { issueQuery } from '../../queries/issueQuery';
import { reactionMutations } from '../../queries/reactionMutation';
import { issueQuery as issueQueryType } from '../../queries/__generated__/issueQuery.graphql';
import { issueFragment$key as issueFragmentRef } from '../../queries/__generated__/issueFragment.graphql'
import { issueFragment } from '../../queries/issueFragment';

type Props = {
  gitHubIssueQueryContext?: gitHubIssueQueryContext | null;
  initialIssueQuery?: PreloadedQuery<issueQueryType>;
}
const ReactionButton = ({ gitHubIssueQueryContext, initialIssueQuery }: Props) => {
  const [, issueLoader] = useQueryLoader(issueQuery, initialIssueQuery!);
  const [commit, isFlight] = useMutation(reactionMutations);

    useEffect(() => {
      issueLoader({});
    },[])

  const issueFragmentContent = useFragment<issueFragmentRef>(issueFragment, gitHubIssueQueryContext?.data?.repository?.issue ?? null);
  console.log(issueFragmentContent?.comments?.edges?.map(edge => { return edge?.node?.id }));
    return (
        <>
        {/* １つ目コメント（Issue)へのリアクションミューテーションのcommit */}
            {issueFragmentContent?.body}への
            <button
                  className="mr-10"
                onClick={() => {
                  console.log("button onClick")
                  commit({
                    variables: {
                      input: {
                        subjectId: issueFragmentContent?.id,
                        content: 'ROCKET',
                      }
                    },
                    onCompleted(data) {
                      console.log("🚀")
                      console.log(data);
                    },
                    onError(error) { 
                      console.log("--- onError ------------------------")
                      console.log(error);
                    }
                  });
                }}
        >🚀リアクション</button>

 
        {issueFragmentContent?.body}への
        <button
                onClick={() => {
                  console.log("button onClick")
                  commit({
                    variables: {
                      input: {
                        subjectId:  issueFragmentContent?.id,
                        content: 'THUMBS_UP',
                      }
                    },
                    onCompleted(data) {
                      //setData(data)
                      console.log("👍")
                      console.log(data);
                    },
                    onError(error) { 
                      console.log("--- onError ------------------------")
                      console.log(error);
                    }
                  });
            }}
        >👍リアクション</button><br /> 
  
  
        {/* ------------------------{ document.getElementById('item-0') } */}
        {/* ２つ目以降コメント（一つ目のcommentsで今回はクエリで9件フェッチ）へのリアクションミューテーションのcommit */}
        {issueFragmentContent?.comments?.edges?.map((edge, index) => {return(      
          <React.Fragment key={index}>
             {edge?.node?.bodyText}への
            <button
            className="mr-10"
            onClick={() => {
              console.log("button onClick");
              commit({
                variables: {
                  input: {
                    subjectId: edge?.node?.id,
                    content: 'ROCKET',
                  }
                },
                onCompleted(data) {
                  console.log("🚀");
                  console.log(data);
                },
                onError(error) {
                  console.log("--- onError ------------------------");
                  console.log(error);
                }
              });
            } }
            >🚀リアクション</button>
            

              { edge?.node?.bodyText}への        
            <button
            onClick={() => {
              console.log("button onClick");
              commit({
                variables: {
                  input: {
                    subjectId: edge?.node?.id,
                    content: 'THUMBS_UP',
                  }
                },
                onCompleted(data) {
                  console.log("👍");
                  console.log(data);
                },
                onError(error) {
                  console.log("--- onError ------------------------");
                  console.log(error);
                }
              });
            } }
          >👍リアクション</button><br /></React.Fragment>
       ) })}
        </>
    )
}
export default ReactionButton;
