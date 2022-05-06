import React, {useContext} from 'react';
import Link from 'next/link';
import moment from 'moment';
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer';
import { DemoContext } from '../Providers/DemoProvider';

export default function Home() {
  const githubDemoContext = useContext(DemoContext);
  if (!githubDemoContext.data) { 
    return null;
  }
  return (
    <>
      <Header avatarImagePath={githubDemoContext.data != null ? `${githubDemoContext.data?.user?.avatarUrl}` : ""} />
        <main className="text-center">
          <div className="mt-10 ml-10 overflow-hidden rounded-lg w-11/12 h-96 bg-gray-50 border border-gray-200">
            <h1 className='text-xl font-bold text-gray-700 mt-12'>
            My GitHub Personal Data...
            </h1>
            <div className=" ml-32">
          </div>
          <div className="mt-10">
            <span className="text-gray-700">
              Repository: 
            </span>
            <Link href={githubDemoContext.data != null ? `${githubDemoContext.data.repository?.url}` : "Loading"}  passHref >
              <span className="text-blue-600">
              {githubDemoContext.data != null ? ` ${githubDemoContext.data.repository?.name}` : "Loading"}
              </span>
            </Link>
          </div>
            <p className="text-gray-700 flex-grow">{githubDemoContext.data != null ? `name: ${githubDemoContext.data.user?.name}` : "Loading"}({githubDemoContext.data != null ? `since: ${moment(githubDemoContext.data.user?.createdAt).format('YYYY-MM-DD(dddd)')}` : "Loading"}</p>
            <p className="text-gray-700">{githubDemoContext.data != null ? `created at: ${ moment(githubDemoContext.data.repository?.createdAt).format('YYYY-MM-DD(dddd)')}` : "Loading"}</p>
          </div>
        </main>
      <Footer/>
    </>
  )
}