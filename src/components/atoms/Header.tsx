import styled from 'styled-components';
import Link from 'next/link';

type Props = {
  avatarImagePath: string;
}

const Header = ({avatarImagePath}: Props) => {
  // const { data } = useSession();
  // const isLoggedIn = data?.accessToken !== null;

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
                <Link href='/' passHref>
                  <span className='flex'>
                    <LogoText className='text-xl font-bold'>demo</LogoText>
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
                    <span className='text-sm font-semibold'>demo</span>
                  </Text>
                </Link>
                <span className="ml-3">
                  <img src={avatarImagePath} className="flex rounded-full w-10 h-10" />
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
  color: #fff;
`;
const Text = styled.p`
  font: sans-selif;
  color: #fff;
`;
const HeaderStyle = styled.header`
  background-color: #999999;
`;
Header.defaultProps = {
  avatarImagePath: '',
};
export default Header;
