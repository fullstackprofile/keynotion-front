import { useState, useEffect } from 'react'
import AppContext from '../components/AppContext/AppContext'
import '../styles/globals.css'
import axios from 'axios'
import { parseCookies } from 'nookies'

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState({
    items: [],
    count: 0,
  })
  const { card_id } = parseCookies('card_id')
  const getCard = async () => {
    const { data } = await axios.get(
      `http://laratest.key-notion.com/api/cart?cart_id=${card_id}`
    )
    setSession((prev) => ({
      ...prev,
      ...session.items.push(data),
    }))
  }
  useEffect(() => {
    getCard()
  }, [])

  console.log(session, 'ccccccccccc')
  return (
    <AppContext.Provider value={{ session, setSession }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
