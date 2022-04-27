import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import '@tailwindcss/forms';
import { ReactRelayContext } from 'react-relay'
import useEnvironment from '../lib/relay'

function MyApp({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.initialRecords)
  return (
  <ReactRelayContext.Provider value={{ environment }}>
    <Component {...pageProps} />
  </ReactRelayContext.Provider>
  )}

export default MyApp
