import { InstrumentsContextProvider } from '../hooks/InstrumentContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <InstrumentsContextProvider>
      <Component {...pageProps} />
    </InstrumentsContextProvider>
      )
}
