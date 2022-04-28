import React from 'react';
import { fetchQuery } from 'react-relay/hooks';
import createEnvironment from '../lib/createEnvironment'
import repository from '../queries/repository'
import Link from 'next/link';
import moment from 'moment';
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer';

export async function getServerSideProps() {
  const environment: any = createEnvironment()  
  console.log(environment)
  console.log(repository)
  const queryProps: any = await fetchQuery(environment, repository, {}).toPromise()
  return {
    props: {
      ...queryProps,
    },
  }
}

export default function Home(props: any, id: string) {
  console.log(props.repository.name)
  console.log(props.user.name)
  return (
    <>
      <Header avatarImagePath={props != null ? `${props.user.avatarUrl}` : ""} />
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
            <Link href={props != null ? `${props.repository.url}` : "Loading"}  passHref >
              <span className="text-blue-600">
              {props != null ? ` ${props.repository.name}` : "Loading"}
              </span>
            </Link>
          </div>       
            <p className="text-gray-700 flex-grow">{props != null ? `name: ${props.user.name}` : "Loading"}({props != null ? `since: ${moment(props.user.createdAt).format('YYYY-MM-DD(dddd)')}` : "Loading"}</p>
            <p className="text-gray-700">{props != null ? `created at: ${ moment(props.repository.createdAt).format('YYYY-MM-DD(dddd)')}` : "Loading"}</p>
          </div>
        </main>
      <Footer/>
    </>
  )
}