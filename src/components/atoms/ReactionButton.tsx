import React, { useState, useEffect, useCallback, useContext } from 'react';
import { PreloadedQuery, useFragment, useMutation, useQueryLoader, readInlineData, fetchQuery } from 'react-relay';
import { IssueQueryContext } from '../../Providers/IssueQueryProvider'
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
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from "recoil"; // for Recoil
import { IssueQueryState } from "../../RecoilAtoms/IssueQueryAtom"; // for Recoil
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';  // for Recoil
import createEnvironment from '../../lib/createEnvironment' // for Recoil

type Props = {
  initialIssueQuery?: PreloadedQuery<issueQueryType>;
}

const ReactionButton = ({ initialIssueQuery }: Props) => {
  //const [data, setData] = useState<boolean>(false)
  const [commit, isFlight] = useMutation<reactionMutationType>(reactionMutations);
  const [removeCommit, isInFlight] = useMutation<removeReactionMutationType>(removeReactionMutation);
  const [allReactionsNumber, setAllReactionNumber] = useState<number[]>([]);
  const [newIssueFragment, setNewIssueFragment] = useState<issueFragmentResponse | null>(null);
  //const {updateData, data} = useContext(IssueQueryContext as unknown as React.Context<gitHubIssueQueryContext>);
  const { issueQueryData, updateIssueComments } = useContext(IssueQueryContext); // for Provider



  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ///////【 Recoilでデータフェッチしたパターン（issueAtomState）】//////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
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
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  


  

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ///////【Providerでデータフェッチしたパターン（issueQueryData）】/////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  // const newIssuesIds = issueQueryData?.comments?.edges?.map((edge, index) => {
  //   return {
  //     id: index, issuesId: edge?.node?.id,
  //   }
  // })
  // const selectedReactionIds = newIssuesIds?.filter(newIssues => allReactionsNumber.includes(newIssues.id)).map(newIssues => newIssues.issuesId)
  // const defaultCommentsData = issueQueryData?.comments?.edges?.map((edge, index) => {
  //   return {
  //     id: index, commentsId: edge?.node?.id, content: edge?.node?.reactions?.edges?.map(edge => { return edge?.node?.content }),
  //     removeReactionContent: [""],
  //     commentsContent: edge?.node?.bodyText
  //   }
  // })
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  
  // onCompleted後のcomments data
  console.log(newIssueFragment?.comments)
  // onCompleted前のcomments data
  console.log(issueQueryData?.comments)
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////

  // 今日一の学び mutationの更新を待ってくれるためのものがisFlight！
  //これをセットすることでmutationが完了してqueryが更新される。
  // これを入れないとmutationでデータ更新したものが反映されない。

  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////


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
      {/*　リアクションボタン押下で表示されるリアクション削除ボタン。押すと非表示になる  */}
      {/* 左式はonCompleteで更新内容そのものの値　右式はmutationでリロード後実際に更新されたクエリレスポンスデータ内にnCompleteで更新内容があるかないかの */}
      {/* {thumbsUpReaction?.addReaction?.reaction?.content === 'THUMBS_UP' ||
          issueFragmentContent?.reactions?.edges?.map(edge => { return edge?.node?.content }).includes("THUMBS_UP") ?
          <button
            style={{ visibility: thumbsUpReactionVisible ? 'visible' : 'hidden' }} // setVisible(false)によってvisibleがfalseになり、hiddenが判定されこの消える
            className="mr-20 -mt-20"
                onClick={() => {
                  console.log("button onClick")
                  removeCommit({
                    variables: {
                      input: {
                        subjectId: issueFragmentContent?.id ?? "",
                        content: 'THUMBS_UP',
                      }
                    },
                    onCompleted(data: removeReactionMutationResponse) {
                      setThumbsUpReactionVisible(false)
                      console.log("👍")
                      console.log(issueFragmentContent?.id);
                    },
                    onError(error) { 
                      console.log("--- onError ------------------------")
                      console.log(error);
                    }
                  });
                }}
        >👍</button>
          : "" }
            */}
      
      <div style={{ border: "2px solid #244d87", borderRadius: "7px", padding: "10px", backgroundColor: "#0d1117", width: "500px", height: "100px", margin: "30px 0 -20px 200px" }}>
        <p style={{ color: "#c9d1d9", margin: "0 0 29px -200px" }}>{issueAtomState?.body}</p>{/* providerの場合はissueQueryData recoilの場合はissueAtomStateが親データ */}
        
        {/* providerの場合はissueQueryData recoilの場合はissueAtomStateが親データ */}
        {issueAtomState?.reactions?.edges?.map(edge => { return edge?.node?.content }).includes("ROCKET") ?
          <button
          style={{ margin: "0 0 0 -400px", border: "1.5px solid #244d87", borderRadius: "15px", padding: "0px 5px 24px 3px", backgroundColor: "#0d1117", width: "41px", height: "20px" }}
            className="mr-10"
                onClick={() => {
                  console.log("button onClick")
                  removeCommit({
                    variables: {
                            removeReactionInput: {
                              subjectId: issueAtomState.id?? "", // issueAtomStateはrecoilで取得したデータ issueQueryDataはProviderで取得したデータ
                              content: 'ROCKET',
                            },
                            reopenIssueInput: {
                              issueId: issueAtomState.id ?? "", // issueAtomStateはrecoilで取得したデータ issueQueryDataはProviderで取得したデータ
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
                      subjectId: issueAtomState.id ?? "", // issueAtomStateはrecoilで取得したデータ issueQueryDataはProviderで取得したデータ
                      content: 'ROCKET',
                    },
                    reopenIssueInput: {
                      issueId: issueAtomState.id ?? "", // issueAtomStateはrecoilで取得したデータ issueQueryDataはProviderで取得したデータ
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
      
        {/* {issueFragmentContent?.body}への
        <button
          onClick={() => {
              console.log("button onClick")
               commit({
                variables: {
                  input: {
                    subjectId: issueFragmentContent?.id ?? "",
                    content: 'THUMBS_UP',
                  }
                },
                onCompleted: (data) =>  {
                  console.log("👍")
                  setThumbsUpReactionVisible(true)
                  setThumbsUpReaction(data)
                  console.log(data);
                },
                onError(error) {
                  console.log("--- onError ------------------------")
                  console.log(error);  
                }
              });
          }}
        >👍リアクション</button><br />
        <Input type="text">
        </Input>  */}
      {/*　リアクションボタン。押下で表示されるリアクション削除ボタン。押すと非表示になる  */}

      {/* ２つ目以降コメント（一つ目のcommentsで今回はクエリで9件フェッチ）へのリアクションミューテーションのcommit */}

      {/*       
        {issueFragmentContent?.comments?.edges?.map((edge, index) => {
          return (
            <React.Fragment key={index}>
              { 
                
                edge?.node?.reactions?.edges?.map((edge) => { return edge?.node?.content }).includes("ROCKET") ?
                    
                  <><button
                    //style={{ visibility: edge?.node?.reactions?.edges.at(index)?.node?.content.includes("ROCKET") ?  "visible" : "hidden"}} // setVisible(false)によってvisibleがfalseになり、hiddenが判定されこの消える
                    className="mr-10"
                    id={`${index}`}
                    ref={el.current[index]}
                    onClick={() => {
                      console.log("button onClick");
                      removeCommit({
                        variables: {
                          input: {
                            subjectId: edge?.node?.id ?? "",
                            content: 'ROCKET',
                          }
                        },
                        onCompleted(data: removeReactionMutationResponse) {
                          //setRocketReactionVisible2(false)                      
                          removeEl(index);
                          setAaa(el.current[index])
                          console.log(el.current[index]);

                        },
                        onError(error) {
                          console.log("--- onError ------------------------");
                          console.log(error);
                        }
                      });
                    }}
                  >🚀{index}</button><br/></> : ""}
            </React.Fragment>
          )
        }
        )} */}

      {/* providerもrecoilの場合もdefaultCommentsDataでOK（変数内でissueAtomState（recoil取得）/issueQueryData(Provider取得)で差し替えているので） */}
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
                              issueId: issueAtomState?.id ?? "", // issueAtomStateはrecoilで取得したデータ issueQueryDataはProviderで取得したデータ
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
                            // 【Provider】👇Providerの場合Providerで定義の状態更新関数を使って削除実行された最新のデータ（reopenで最新に更新されたデータ）に上書きする
                            // updateIssueComments(newIssueComments); 
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
                      issueId: issueAtomState?.id ?? "", // issueAtomStateはrecoilで取得したデータ issueQueryDataはProviderで取得したデータ
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

            {/* { edge?.node?.bodyText}への        
            <button
            onClick={() => {
              console.log("button onClick");
              commit({
                variables: {
                  input: {
                    subjectId: edge?.node?.id ?? "",
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
            >👍リアクション</button><br /> */}


          </React.Fragment>
        )
      })}
    </>
  )
}
export default ReactionButton;
