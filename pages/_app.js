import { useState } from 'react'
import AppContext from '../components/AppContext/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState({
    itemsss: [],
    count: 0,
    index: 0,
  })
  return (
    <AppContext.Provider value={{ session, setSession }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
