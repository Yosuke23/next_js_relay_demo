import React, { useState, useEffect } from 'react';
import { PreloadedQuery, useFragment, useMutation, usePreloadedQuery, useQueryLoader } from 'react-relay';
import type {gitHubIssueQueryContext } from '../../Providers/IssueQueryProvider'
import { issueQuery } from '../../queries/issueQuery';
import { removeReactionMutation } from '../../queries/removeReactionMutation';
import { issueQuery as issueQueryType } from '../../queries/__generated__/issueQuery.graphql';
import { issueFragment$key as issueFragmentRef } from '../../queries/__generated__/issueFragment.graphql'
import { issueFragment } from '../../queries/issueFragment';

type Props = {
    gitHubIssueQueryContext?: gitHubIssueQueryContext | null;
    initialIssueQuery?: PreloadedQuery<issueQueryType>;
}
const RemoveReactionButton = ({ gitHubIssueQueryContext, initialIssueQuery }: Props) => {
    const [, issueLoader] = useQueryLoader(issueQuery, initialIssueQuery!);
    const [commit, isFlight] = useMutation(removeReactionMutation);
    
    useEffect(() => {
        issueLoader({});
    },[])

  const issueFragmentContent = useFragment<issueFragmentRef>(issueFragment, gitHubIssueQueryContext?.data?.repository?.issue ?? null);
  console.log(issueFragmentContent?.comments?.edges?.map(edge => { return edge?.node?.id }));
    return (
        <>
        {/* １つ目コメント（Issue)へのリアクション取り消しミューテーションのcommit */}
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
        >{issueFragmentContent?.body}の🚀リアクションを削除</button>
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
            >{issueFragmentContent?.body}の👍リアクションを削除</button><br /> 
        {/* ２つ目以降コメント（一つ目のcommentsで今回はクエリで9件フェッチ）へのリアクション取り消しミューテーションのcommit */}
        {issueFragmentContent?.comments?.edges?.map((edge, index) => {
          return (
          <React.Fragment key={index}> 
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
              >{edge?.node?.bodyText}の🚀リアクションを削除</button>    
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
                  //setData(data)
                  console.log("👍");
                  console.log(data);
                },
                onError(error) {
                  console.log("--- onError ------------------------");
                  console.log(error);
                }
              });
            } }
          >{edge?.node?.bodyText}の👍リアクションを削除</button><br /></React.Fragment>
       ) })}
        </>
    )
}
export default RemoveReactionButton;
