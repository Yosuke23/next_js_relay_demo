import { viewerUserQuery } from '../../queries/viewerUserQuery';
import { userFragment } from '../../queries/userFragment';
import type { userFragment$key as userFragmentRef } from '../../queries/__generated__/userFragment.graphql';
import {
  repositoryFragment$data as repositoryFragmentType,
  repositoryFragment$key as repositoryFragmentRef
} from '../../queries/__generated__/repositoryFragment.graphql';
import { repositoryFragment } from '../../queries/repositoryFragment';
import { PreloadedQuery, useMutation } from 'react-relay/hooks';
import { useFragment, usePreloadedQuery } from 'react-relay'

import type {
  viewerUserQuery as viewerUserQueryType,
  viewerUserQuery$data as viewerUserQueryResponse,
  viewerUserQuery$variables as viewerUserQueryVariables,
} from '../../queries/__generated__/viewerUserQuery.graphql';
import type {
  repositoryQuery as repositoryQueryType,
} from '../../queries/__generated__/repositoryQuery.graphql';
import {repositoryQuery} from '../../queries/repository';

type Props = {
  queryReference?: PreloadedQuery<viewerUserQueryType> | null;
  repositoryReference?: PreloadedQuery<repositoryQueryType> | null;
};

export const RepositoryViewUserInfo = ({ queryReference, repositoryReference }: Props) => {
  const viewUser = usePreloadedQuery<viewerUserQueryType>(viewerUserQuery, queryReference!)
  const repository = usePreloadedQuery<repositoryQueryType>(repositoryQuery, repositoryReference!)
  //親でuseQueryLoader関数内で大元のデータをロードして子コンポーネントに渡してそれをusePreloadedQueryでpreloadしてデータ展開

  const userData = useFragment<userFragmentRef>(userFragment, viewUser.user);
  const viewerData = useFragment<userFragmentRef>(userFragment, viewUser.viewer);
  const repositoryData = useFragment<repositoryFragmentRef>(repositoryFragment, repository.repository);  
  return (
    <>
      <main className="text-center">
        <div className="mt-24 -mb-4 ml-10 overflow-hidden rounded-lg w-8/12 h-56 bg-gray-50 border border-gray-200">
          <h2 className="mt-10 -mb-10 text-gray-800 font-bold">RepositoryViewUserInfo</h2>
          <p className="pt-14 text-gray-700">repositoryのname : {repositoryData?.name ?? ""}</p>
          <p className="text-gray-700">userのname（viewUserQuery）: {userData?.name ?? ""}</p>
          <p className="text-gray-700">viewerのname（viewerUserQuery）: {viewerData?.name ?? ""}</p>         
        </div>
      </main>
    </>
  ) 
}
RepositoryViewUserInfo.defaultProps = {
  queryReference: null,
  repositoryReference: null,
}