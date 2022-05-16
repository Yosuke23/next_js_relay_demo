import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import moment from 'moment';
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer';
import { DemoContext } from '../Providers/DemoProvider';
import issueQuery from '../queries/issueQuery';
import { fetchQuery, graphql, OperationType } from 'relay-runtime';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import createEnvironment from '../lib/createEnvironment';
import { commitReactionMutation, reactionMutations } from '../queries/reactionMutation';
import { removeReactionMutation } from '../queries/removeReactionMutation';
import { useMutation } from 'react-relay/hooks';
// import type {
//   AddReactionInput,
//   reactionMutation as reactionMutationType,
// reactionMutation$data as reactionMutationResponse,
// } from '../queries/__generated__/reactionMutation.graphql';
import type {
  issueQuery$data as issueQueryType,
  issueQuery$variables as issueQueryVariables,
} from '../queries/__generated__/issueQuery.graphql';

export default function Home() {
  const githubDemoContext = useContext(DemoContext);
  const [issueData, setIssueData] = useState<issueQueryType>();

  async function executeIssueQuery() {
    const environment: RelayModernEnvironment = createEnvironment()
    const result = await fetchQuery(environment, issueQuery, {}).toPromise()
    return result as issueQueryType //これがないとレスポンスデータdata?.repository?.issueのdataがunknownになる
 }

  useEffect(() => {
      executeIssueQuery()
        .then(data => setIssueData(data))
  }, [])
  console.log(issueData) 

  const [commit, isFlight] = useMutation(reactionMutations);
  const [removeCommit] = useMutation(removeReactionMutation);

  if (!githubDemoContext.data) { 
    return null;
  }

  return (
    <>
      <Header avatarImagePath={githubDemoContext.data != null ? `${githubDemoContext.data?.user?.avatarUrl}` : ""} />
        <main className="text-center">
        <div className="mt-10 -mb-24 ml-10 overflow-hidden rounded-lg w-11/12 h-96 bg-gray-50 border border-gray-200">
            <h1 className='text-xl font-bold text-gray-700 mt-12'>
            My GitHub Personal Data...
            </h1>
            <div className="ml-32">
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
          {/* リアクションミューテーションのcommit */}
                <button
                  className="mr-10"
                onClick={() => {
                  console.log("button onClick")
                  commit({
                    variables: {
                      input: {
                        subjectId: issueData?.repository?.issue?.id,
                        content: 'ROCKET',
                      }
                    },
                    onCompleted(data) {
                      console.log("--- onCompleted ------------------------")
                      console.log(data);
                    },
                    onError(error) { 
                      console.log("--- onError ------------------------")
                      console.log(error);
                    }
                  });
                }}
              >🚀</button>
                    <button
                onClick={() => {
                  console.log("button onClick")
                  commit({
                    variables: {
                      input: {
                        subjectId: issueData?.repository?.issue?.id,
                        content: 'THUMBS_UP',
                      }
                    },
                    onCompleted(data) {
                      //setData(data)
                      console.log("--- onCompleted ------------------------")
                      console.log(data);
                    },
                    onError(error) { 
                      console.log("--- onError ------------------------")
                      console.log(error);
                    }
                  });
            }}
          >👍</button><br />
          {/* リアクションミューテーションのcommit */}


             {/* リアクションremoveミューテーションのcommit */}
              <button
                className="mr-10"
              onClick={() => {
                console.log("button onClick")
                removeCommit({
                  variables: {
                    input: {
                      subjectId: issueData?.repository?.issue?.id,
                      content: 'ROCKET',
                    }
                  },
                  onCompleted(data) {
                    console.log("--- onCompleted ------------------------")
                    console.log(data);
                  },
                  onError(error) { 
                    console.log("--- onError ------------------------")
                    console.log(error);
                  }
                });
              }}
            >🚀取り消し</button>
                  <button
              onClick={() => {
                console.log("button onClick")
                removeCommit({
                  variables: {
                    input: {
                      subjectId: issueData?.repository?.issue?.id,
                      content: 'THUMBS_UP',
                    }
                  },
                  onCompleted(data) {
                    //setData(data)
                    console.log("--- onCompleted ------------------------")
                    console.log(data);
                  },
                  onError(error) { 
                    console.log("--- onError ------------------------")
                    console.log(error);
                  }
                });
          }}
        >👍取り消し</button>
        {/* リアクションremoveミューテーションのcommit */}
        </main>
      <Footer/>
    </>
  )
}