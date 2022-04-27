import styled from 'styled-components';
import Link from 'next/link';

const FooterPosition = styled.footer`
  position: fixed;
  width: 100%;
  height: 66px;
  bottom: 0;
  text-align: center;
  z-index: 1000;
  background-color: #333333;
`;

const Line = styled.span`
  border-left: 1px solid #dddddd;
  padding: 0px 3px;
`;

const Footer = () => (
  <FooterPosition>
    <footer className='flex justify-center px-4 text-gray-100'>
      <div className='container py-6'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div>&copy; demo</div>
          <div className='flex mt-4 md:m-0'>
            <div className='-mx-4'>
              <Link href='#' passHref>
                <span className='px-4 text-sm'>demo</span>
              </Link>
              <Link href='#' passHref>
                <Line>
                  <span className='px-4 text-sm'>demo</span>
                </Line>
              </Link>
              <Link href='#' passHref>
                <Line>
                  <span className='px-4 text-sm'>demo</span>
                </Line>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </FooterPosition>
);
export default Footer;
