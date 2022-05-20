import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactRelayContext } from 'react-relay'
import useEnvironment from '../lib/relay'
import 'tailwindcss/tailwind.css';
import '@tailwindcss/forms';
import { RepositoryUserProvider } from '../Providers/RepositoryUserProvider';
import { RepositoryUserNotUsingFragmentProvider } from '../Providers/RepositoryUserNotUsingFragmentProvider';
import { IssueQueryProvider } from '../Providers/IssueQueryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps)
  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <RepositoryUserProvider>
        <RepositoryUserNotUsingFragmentProvider>
          <IssueQueryProvider>
            <Component {...pageProps} />
            </IssueQueryProvider>
        </RepositoryUserNotUsingFragmentProvider>
      </RepositoryUserProvider>
    </ReactRelayContext.Provider>
  )}

export default MyApp
