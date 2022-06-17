import { userFragment } from '../../queries/userFragment';
import type { userFragment$key as userFragmentRef } from '../../queries/__generated__/userFragment.graphql';
import React, {useEffect, Suspense} from 'react';
import {
  repositoryFragment$data as repositoryFragmentType,
  repositoryFragment$key as repositoryFragmentRef
} from '../../queries/__generated__/repositoryFragment.graphql';
import { repositoryFragment } from '../../queries/repositoryFragment';
import { PreloadedQuery, useFragment, useQueryLoader, readInlineData } from 'react-relay'
import type { githubDemoContext } from '../../Providers/RepositoryUserProvider';
import {repositoryQuery} from '../../queries/repository';
import type {
  repositoryQuery$data as repositoryQueryResponse,
  repositoryQuery as repositoryQueryType
} from '../../queries/__generated__/repositoryQuery.graphql'; // クエリのtypeをインポート
import Link from 'next/link';
import moment from 'moment';

type Props = {
  githubDemoContext?: githubDemoContext | null;
  initialRepositoryRef?: PreloadedQuery<repositoryQueryType>,
  initialUserQueryRef?: PreloadedQuery<repositoryQueryType>,
};


export const RepositoryUserInfo = ({ githubDemoContext, initialRepositoryRef, initialUserQueryRef }: Props) => {
  //【fragment】useQueryLoaderを使ってクエリをロードして取得したデータでuseFragmentする
  // 結局親側でこれらクエリのデータをuseContextで取得していてもuseFragmentを使用する場合は親、もしくは子であるここでuseQueryLoaderを使用する必要がある
  // repositoryQueryのクエリでrepositoryもuserも取れるので第一引数はrepositoryQueryを指定している
  const [, loadRepositoryQuery] = useQueryLoader(repositoryQuery, initialRepositoryRef!)
  const [, loadUserQuery] = useQueryLoader(repositoryQuery, initialUserQueryRef!)
  useEffect
    (() => {
      loadRepositoryQuery({})
      loadUserQuery({})
    }, [])
  
  // 親コンポーネントでuseContextで取得したデータをpropsで受け取りここでuseFragmentでデータ展開する
  //const githubRepositoryData = useFragment<repositoryFragmentRef>(repositoryFragment, githubDemoContext?.data?.repository ?? null);
  // useFragmentからreadInlineDataを使用してデータを取得する方法に変更
  const githubRepositoryData = readInlineData<repositoryFragmentRef>(repositoryFragment, githubDemoContext?.data?.repository ?? null);


  const userData = useFragment<userFragmentRef>(userFragment, githubDemoContext?.data?.user ?? null);
  console.log(githubDemoContext?.data?.repository);
  if (!githubRepositoryData || !userData) {
    null
  }
  return (
    <>
    <main className="text-center" style={{ backgroundColor: "#0d1117"}}>
        <div className="mt-5 mb-24 ml-10 overflow-hidden rounded-lg w-11/12 h-72" style={{ backgroundColor: "#0d1117", color: "#c9d1d9", border: "2px solid #244d87" }}>
            <h1 className='text-xl font-bold mt-12'>
            My GitHub Personal Data...
            </h1>
            <div className="ml-32">
          </div>
          <div className="mt-10">
            <span className="">
              Repository: 
            </span>
            <Link href={githubRepositoryData != null ? `${githubRepositoryData?.url}` : "#"}  passHref >
              <span className="text-blue-600">
              {githubRepositoryData != null ? ` ${githubRepositoryData?.name}` : "Loading"}
              </span>
            </Link>
          </div>
            <p className="flex-grow">{userData != null ? `name: ${userData?.name}` : "Loading"}({userData!= null ? `since: ${moment(userData?.createdAt).format('YYYY-MM-DD(dddd)')}` : "Loading"}</p>
            <p className="">{githubRepositoryData != null ? `created at: ${ moment(githubRepositoryData?.createdAt).format('YYYY-MM-DD(dddd)')}` : "Loading"}</p>
        </div>
        </main>
    </>
  ) 
}
RepositoryUserInfo.defaultProps = {
  githubDemoContext: null,
  initialRepositoryRef: null,
  initialUserQueryRef: null,
}




