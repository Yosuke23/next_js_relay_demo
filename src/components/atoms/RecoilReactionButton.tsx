import React, { useState, useEffect, useCallback, useContext } from 'react';
import { PreloadedQuery, useFragment, useMutation, useQueryLoader, readInlineData, fetchQuery } from 'react-relay';
import { issueQuery } from '../../queries/issueQuery';
import { reactionMutations } from '../../queries/reactionMutation';
import type { reactionMutation$data as reactionMutationResponse, reactionMutation as reactionMutationType } from '../../queries/__generated__/reactionMutation.graphql';
import { issueQuery$data as issueQueryResponse, issueQuery as issueQueryType } from '../../queries/__generated__/issueQuery.graphql';
import { issueFragment$key as issueFragmentRef, issueFragment$data as issueFragmentResponse } from '../../queries/__generated__/issueFragment.graphql'
import { issueFragment } from '../../queries/issueFragment';
import { removeReactionMutation } from '../../queries/removeReactionMutation';
import type {
  removeReactionMutation$data as removeReactionMutationResponse,
  removeReactionMutation as removeReactionMutationType,
  removeReactionMutation$variables as removeReactionMutationVariables,
} from '../../queries/__generated__/removeReactionMutation.graphql';
import { useRecoilState } from "recoil"; // for Recoil
import { IssueQueryState } from "../../RecoilAtoms/IssueQueryAtom"; // for Recoil
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';  // for Recoil
import createEnvironment from '../../lib/createEnvironment' // for Recoil

type Props = {
  initialIssueQuery?: PreloadedQuery<issueQueryType>;
}

const RecoilReactionButton = () => {
  const [commit, isFlight] = useMutation<reactionMutationType>(reactionMutations);
  const [removeCommit, isInFlight] = useMutation<removeReactionMutationType>(removeReactionMutation);
  const [allReactionsNumber, setAllReactionNumber] = useState<number[]>([]);
  const [newIssueFragment, setNewIssueFragment] = useState<issueFragmentResponse | null>(null);

  ///////【 Recoilでデータフェッチしたパターン（issueAtomState）】//////////
  useEffect(() => {
    (async () => {
      const environment: RelayModernEnvironment = createEnvironment()
      await fetchQuery<issueQueryType>(environment, issueQuery, {})
        .toPromise()
        .then((data: issueQueryResponse | undefined) => {
          const issueQueryData = readInlineData<issueFragmentRef>(
                issueFragment, data?.repository?.issue ?? null
            );
          setIssueAtomState(issueQueryData as issueFragmentResponse);
        })
    }
    )();
  }, [])
  const [issueAtomState, setIssueAtomState] = useRecoilState<issueFragmentResponse>(IssueQueryState);
  console.log(issueAtomState);
 
  const newIssuesIds = issueAtomState?.comments?.edges?.map((edge, index) => {
    return {
      id: index, issuesId: edge?.node?.id,
    }
  })
  const selectedReactionIds = newIssuesIds?.filter(newIssues => allReactionsNumber.includes(newIssues.id)).map(newIssues => newIssues.issuesId)
   const defaultCommentsData = issueAtomState?.comments?.edges?.map((edge, index) => {
    return {
      id: index, commentsId: edge?.node?.id, content: edge?.node?.reactions?.edges?.map(edge => { return edge?.node?.content }),
      removeReactionContent: [""],
      commentsContent: edge?.node?.bodyText
    }
   })
  // recoilでデータ管理を試してみる　ここまで（とりあえずデータはフェッチできた）
  // 👆recoilStateでとった変数をuseStateにいれると動くがコンソールエラーになるのでやらない、
  // つまりissueAtomStateをそのままuseStateのsetXXX(issueAtomState)みたいなのはアンチパターン
  ////////////////////////////////////////////////////////////////////

  // onCompleted後のcomments data
  console.log(newIssueFragment?.comments)
  // if (isFlight) {
  //   return <div style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}>Loading...</div>;
  // }
  // if (isInFlight) {
  //   return <div style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}>Loading...</div>;
  // }
  // if (!data) {
  //   return <div style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}>Loading...</div>;
  // }
  return (
    <>
      <div style={{ border: "2px solid #244d87", borderRadius: "7px", padding: "10px", backgroundColor: "#0d1117", width: "500px", height: "100px", margin: "30px 0 -20px 200px" }}>
        <p style={{ color: "#c9d1d9", margin: "0 0 29px -200px" }}>{issueAtomState?.body}</p>{/* providerの場合はissueQueryData recoilの場合はissueAtomStateが親データ */}
         {issueAtomState?.reactions?.edges?.map(edge => { return edge?.node?.content }).includes("ROCKET") ?
          <button
          style={{ margin: "0 0 0 -400px", border: "1.5px solid #244d87", borderRadius: "15px", padding: "0px 5px 24px 3px", backgroundColor: "#0d1117", width: "41px", height: "20px" }}
            className="mr-10"
                onClick={() => {
                  console.log("button onClick")
                  removeCommit({
                    variables: {
                            removeReactionInput: {
                              subjectId: issueAtomState.id?? "", 
                              content: 'ROCKET',
                            },
                            reopenIssueInput: {
                              issueId: issueAtomState.id ?? "", 
                            }
                          },
                    onCompleted(data: removeReactionMutationResponse) {
                      //【Recoil】👇Recoilの場合このコンポーネントで定義のuseRecoilStateの状態をここでreopenで最新に更新されたデータに更新する
                      //こっちもreopenIssue追加してreactionも都度更新
                      const removeExecutedIssueComments = readInlineData<issueFragmentRef>(issueFragment, data.reopenIssue?.issue ?? null)
                      setIssueAtomState(removeExecutedIssueComments as issueFragmentResponse);                
                    },
                    onError(error) { 
                      console.log("--- onError ------------------------")
                      console.log(error);
                    }
                  });
                }}
        >🚀</button> : ""}
      </div>
      {/*　リアクションボタン押下で表示されるリアクション削除ボタン。押すと非表示になる  */}

      <br />
      {/* １つ目コメント（Issue)へのリアクションミューテーションのcommit */}
      {/*　リアクションボタン。押下で表示されるリアクション削除ボタン。押すと非表示になる  */}
        <button
          className="mr-10"
          onClick={() => {
            commit({
              variables: {
                    reactionInput: {
                      subjectId: issueAtomState.id ?? "", 
                      content: 'ROCKET',
                    },
                    reopenIssueInput: {
                      issueId: issueAtomState.id ?? "", 
                    }
              },
              onCompleted: (data: reactionMutationResponse) => {
                //【Recoilのみ】👇Recoilの場合このコンポーネントで定義のuseRecoilStateの状態をここでreopenで最新に更新されたデータに更新する
                //こっちもreopenIssue追加してreactionも都度更新
                const reactionExecutedIssueComments = readInlineData<issueFragmentRef>(issueFragment, data.reopenIssue?.issue ?? null)
                setIssueAtomState(reactionExecutedIssueComments as issueFragmentResponse);
              },
              onError(error) { 
                console.log("--- onError ------------------------")
                console.log(error);
              }
            });
          }}
        >🚀</button>
      

      {defaultCommentsData?.map((edge, index) => {
        return (
          <React.Fragment key={index}>
            <div style={{ border: "2px solid #244d87", borderRadius: "7px", padding: "10px", backgroundColor: "#0d1117", width: "500px", height: "100px", margin: "0 0 0 200px" }}>
              <p style={{ color: "#c9d1d9", margin: "0 0 29px -200px" }}>{edge?.commentsContent}</p>
              {// ✨✨✨✨メモポイント✨✨✨✨✨
                selectedReactionIds?.includes(edge?.commentsId) ||
                  edge?.content?.map((content) => { return content }).includes("ROCKET") ?
                  <>
                    <button
                      style={{ margin: "0 0 0 -400px", border: "1.5px solid #244d87", borderRadius: "15px", padding: "0px 5px 24px 3px", backgroundColor: "#0d1117", width: "41px", height: "20px" }}
                      className="mr-10"
                      onClick={() => {
                        removeCommit({
                          variables: {
                            removeReactionInput: {
                              subjectId: edge?.commentsId ?? "",
                              content: 'ROCKET',
                            },
                            reopenIssueInput: {
                              issueId: issueAtomState?.id ?? "", 
                            }
                          },
                          onCompleted(data: removeReactionMutationResponse) {
                            // 見た目上の表示を変えるために、allReactionsNumberに追加する（recoil provider共通）
                            //allReactionsNumberからremove成功のindex番号を削除
                            // removeReactionされたindexの配列の番号に該当するreactionされたindexの配列に含まれる番号を削除する
                            setAllReactionNumber(allReactionsNumber.filter(function (reactionNumber) {
                              return ![index].includes(reactionNumber);
                            }))
                             // recoil provider共通
                            const newIssueComments = readInlineData<issueFragmentRef>(issueFragment, data.reopenIssue?.issue ?? null)
                            // 【Recoil】👇Recoilの場合このコンポーネントで定義のuseRecoilStateの状態をここでreopenで最新に更新されたデータに更新する
                            setIssueAtomState(newIssueComments as issueFragmentResponse);
                          },
                          onError(error) {
                            console.log(error);
                          }
                        });
                      }}
                    >🚀</button></> : ""}
            </div>
            <button
              className="mr-10"
              onClick={() => {
                commit({
                  variables: {
                    reactionInput: {
                      subjectId: edge.commentsId ?? "",
                      content: 'ROCKET',
                    },
                    reopenIssueInput: {
                      issueId: issueAtomState?.id ?? "", 
                    }
                  },
                  onCompleted(data: reactionMutationResponse) {
                    // 見た目上の表示を変えるために、allReactionsNumberに追加する（recoil provider共通）
                    setAllReactionNumber([...allReactionsNumber, index])
                    //【Recoil】👇Recoilの場合このコンポーネントで定義のuseRecoilStateの状態をここでreopenで最新に更新されたデータに更新する
                    //こっちもreopenIssue追加してreactionも都度更新
                    const issueComments = readInlineData<issueFragmentRef>(issueFragment, data.reopenIssue?.issue ?? null)
                    setIssueAtomState(issueComments as issueFragmentResponse);
                    
                  },
                  onError(error) {
                    console.log(error);
                  }
                });
              }}
            >🚀</button><br />
          </React.Fragment>
        )
      })}
    </>
  )
}
export default RecoilReactionButton;
