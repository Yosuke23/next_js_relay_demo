import React, {Suspense, useContext, useEffect, useState} from 'react';
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer';
import { IssueQueryContext } from '../Providers/IssueQueryProvider';
import { RepositoryUserContext } from '../Providers/RepositoryUserProvider';
import { RepositoryUserInfo } from '../components/atoms/RepositoryUserInfo';
import ReactionButton from '../components/atoms/ReactionButton';
import RemoveReactionButton from '../components/atoms/RemoveReactionButton';

const myPage = () => {
  // userFragmentとRepositoryFragmentをスプレット設置したrepositoryクエリを実行したcontext
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const githubDemoContext = useContext(RepositoryUserContext);
  // issueFragmentをスプレット設置したissueクエリを実行したcontext（issueFragment内に子テーブルのcomments10件の取得クエリあり）
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const githubIssueQueryContext = useContext(IssueQueryContext);

  if (!githubDemoContext) { 
    return null;
  }
  if (!githubIssueQueryContext) {
    return null;
  }
  console.log(githubIssueQueryContext.data?.repository?.issue)
  return (
    <>
      <Header githubDemoContext={githubDemoContext}/>
      <main className="text-center">
        <RepositoryUserInfo githubDemoContext={githubDemoContext} />
        <ReactionButton
          gitHubIssueQueryContext={githubIssueQueryContext}
        />
        <hr /> 
        <RemoveReactionButton
          gitHubIssueQueryContext={githubIssueQueryContext}
        />
        </main>
        <Footer />
    </>
  )
}
export default myPage