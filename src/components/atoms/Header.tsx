import styled from 'styled-components';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { githubDemoContext } from '../../Providers/RepositoryUserProvider';
import { PreloadedQuery, useFragment, useQueryLoader } from 'react-relay';
import { repositoryQuery } from '../../queries/repository';
import { userFragment } from '../../queries/userFragment';
import { AiOutlineGithub } from 'react-icons/ai';
import type { userFragment$key as userFragmentRef } from '../../queries/__generated__/userFragment.graphql';
import type {
  repositoryQuery$data as repositoryQueryResponse,
  repositoryQuery as repositoryQueryType
} from '../../queries/__generated__/repositoryQuery.graphql'; // クエリのtypeをインポート

type Props = {
  avatarImagePath: string;
  githubDemoContext?: githubDemoContext | null;
  initialUserQueryRef?: PreloadedQuery<repositoryQueryType>,
};

const Header = ({avatarImagePath, githubDemoContext, initialUserQueryRef}: Props) => {
  // const { data } = useSession();
  // const isLoggedIn = data?.accessToken !== null;

  const [, loadUserQuery] = useQueryLoader(repositoryQuery, initialUserQueryRef)
  useEffect
    (() => {
      loadUserQuery({})
    }, [])

  const userData = useFragment<userFragmentRef>(userFragment, githubDemoContext?.data?.user ?? null);
  console.log(userData);

  if (!userData) {
    null
  }

  return (
    <HeaderStyle>
      <header>
        <div className='relative'>
          <div
            className='absolute inset-0 shadow z-30 pointer-events-none'
            aria-hidden='true'
          />
          <div className='relative z-20'>
            <div className='max-w-10xl flex justify-between items-center px-4 py-5 sm:px-6 sm:py-3 lg:px-8 md:justify-start md:space-x-10'>
              <div>
                <Link href='https://github.com/Yosuke23/nextjs_relay_demo' passHref>
                  <span className='flex'>
                    <h1 className="text-4xl p-2">
                    <AiOutlineGithub style={{color: "#f0f6fc"}} />
                    </h1>
                    <LogoText className='ml-1 mt-3 text-xl font-bold'>nextjs_relay_demo</LogoText>
                  </span>
                </Link>
              </div>
              <div className='-mr-2 -my-2 md:hidden'>
                <button
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  aria-expanded='false'
                >
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
              <div className='hidden md:flex-1 md:flex md:items-center md:justify-end'>
                <Link href='#' passHref>
                  <Text className='flex items-center md:ml-12 mr-2'>
                    <span className='text-sm font-semibold'>nextjs_relay_demo</span>
                  </Text>
                </Link>
                <span className="ml-3">
                  <img src={userData?.avatarUrl ?? avatarImagePath} className="flex rounded-full w-10 h-10" />
                </span>

                {/* {isLoggedIn ? (
                  <Link href='#' passHref>
                    <Text className='flex items-center md:ml-12 mr-2'>
                      <span className='text-sm font-semibold'>マイページ</span>
                    </Text>
                  </Link>
                ) : (
                  <Link href='#' passHref>
                    <Text className='flex items-center md:ml-12 mr-2'>
                      <span className='text-sm font-semibold'>サインイン</span>
                    </Text>
                  </Link>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderStyle>
  );
};

const LogoText = styled.p`
  font: sans-selif;
  color: #58A6FF;
`;
const Text = styled.p`
  font: sans-selif;
  color: #c9d1d9;
`;
const HeaderStyle = styled.header`
  background-color: #161b22;
`;
Header.defaultProps = {
  avatarImagePath: '',
  githubDemoContext: null,
  initialUserQueryRef: null,
};
export default Header;
