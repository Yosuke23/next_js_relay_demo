import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactRelayContext } from 'react-relay'
import useEnvironment from '../lib/relay'
import 'tailwindcss/tailwind.css';
import '@tailwindcss/forms';
import { DemoProvider }  from '../Providers/DemoProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps)
  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <DemoProvider>
        <Component {...pageProps} />
      </DemoProvider>
    </ReactRelayContext.Provider>
  )}

export default MyApp
