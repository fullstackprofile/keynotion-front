import React from 'react'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import { EventsHead } from '../components/EventsHead/EventsHead'

const MainLayoutt = ({ children, title = 'Key-Notion', blog }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <EventsHead blog={blog} />

      {children}

      <Footer />
    </div>
  )
}

export default MainLayoutt
