import React from 'react';
import { fetchQuery } from 'react-relay'
import initEnvironment from '../lib/relay'
import {repository} from '../queries/repository'

export async function getServerSideProps() {
  const environment: any = initEnvironment
  const queryProps: any = await fetchQuery(environment, repository, {}).toPromise()
  return {
    props: {
      ...queryProps,
    },
  }
}

export default function Home(props: any) {
  return (
    <p>{props != null ? `Repository: ${props.repository.name}` : "Loading"}</p>
  )
}