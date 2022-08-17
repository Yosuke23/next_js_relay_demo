import React, {Suspense, useContext, useEffect, useState} from 'react';
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer';
import { IssueQueryContext } from '../Providers/IssueQueryProvider';
import { RepositoryUserContext } from '../Providers/RepositoryUserProvider';
import { RepositoryUserInfo } from '../components/atoms/RepositoryUserInfo';
import RecoilReactionButton from '../components/atoms/RecoilReactionButton';
import ProviderReactionButton from '../components/atoms/ProviderReactionButton';

const myPage = () => {
  // userFragmentとRepositoryFragmentをスプレット設置したrepositoryクエリを実行したcontext
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const githubDemoContext = useContext(RepositoryUserContext);
  // issueFragmentをスプレット設置したissueクエリを実行したcontext（issueFragment内に子テーブルのcomments10件の取得クエリあり）
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const issueQueryContext = useContext(IssueQueryContext);

  if (!githubDemoContext) { 
    return <div style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}>Loading...</div>;
  }
  // if (!issueQueryContext) {
  //   return <div style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}>Loading...</div>;
  // }
  return (
    <>
      <Header githubDemoContext={githubDemoContext} />
      <main className="text-center" style={{ backgroundColor: "#0d1117" }}>
        <h3 style={{color: "#c9d1d9", textAlign: "left", margin: "0 0 0 200px"}}>
        Recoilで状態管理
        </h3>
        <RecoilReactionButton />
        <h3 style={{color: "#c9d1d9", textAlign: "left", margin: "0 0 0 200px"}}>
        Providerで状態管理
        </h3>
        <ProviderReactionButton />
        {/* ここでbuttonをループする実装に変えるまでコメントアウト */}
        {/* <RepositoryUserInfo githubDemoContext={githubDemoContext} /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
export default myPage