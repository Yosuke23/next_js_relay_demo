import React, {Suspense, useContext, useEffect, useState} from 'react';
import { userFragment } from '../queries/userFragment';
import type { userFragment$key as userFragmentRef } from '../queries/__generated__/userFragment.graphql';
import {
  repositoryFragment$data as repositoryFragmentType,
  repositoryFragment$key as repositoryFragmentRef,
} from '../queries/__generated__/repositoryFragment.graphql';
import { repositoryFragment } from '../queries/repositoryFragment';
import { PreloadedQuery, useMutation } from 'react-relay/hooks';
import { useQueryLoader, usePreloadedQuery, useFragment, useLazyLoadQuery } from 'react-relay'
import { RepositoryViewUserInfo } from '../components/atoms/RepositoryViewUserInfo';

import { viewerUserQuery } from '../queries/viewerUserQuery';
import type {
  viewerUserQuery as viewerUserQueryType,
  viewerUserQuery$data as viewerUserQueryResponse,
  viewerUserQuery$variables as viewerUserQueryVariables,
} from '../queries/__generated__/viewerUserQuery.graphql';

import {repositoryQuery} from '../queries/repository';
import type {
  repositoryQuery$data as repositoryQueryResponse,
  repositoryQuery as repositoryQueryType
} from '../queries/__generated__/repositoryQuery.graphql'; // クエリのtypeをインポート

type Props = {
  repositoryRef: repositoryFragmentRef;
  userRef: userFragmentRef;
  initialQueryRef: PreloadedQuery<viewerUserQueryType>,
  initialRepositoryRef: PreloadedQuery<repositoryQueryType>,
};

export default function Top({ repositoryRef, userRef, initialQueryRef, initialRepositoryRef }: Props) {
  //【fragment】useQueryLoaderを使ってクエリをロードして取得したデータでuseFragmentするパターン
  const [queryReference, loadQuery] = useQueryLoader(viewerUserQuery, initialQueryRef)
  const [repositoryReference, loadRepository] = useQueryLoader(repositoryQuery, initialRepositoryRef)
  //【fragment】これでuserFragmentが子に渡される
  useFragment<userFragmentRef>(userFragment, userRef);
  useFragment<repositoryFragmentRef>(repositoryFragment, repositoryRef);

  useEffect(() => {
    //クエリをロードだけ
    loadQuery({})
    loadRepository({})
  }, [])

  if (!queryReference || !repositoryReference) { 
    return null;
  }
  return (
    <>      
      <main className="text-center ml-56">
        <RepositoryViewUserInfo queryReference={queryReference} repositoryReference={repositoryReference} />
      </main>
    </>
  )
}