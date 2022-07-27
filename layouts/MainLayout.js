import React from 'react'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import { Heade } from '../components/Head/Head'

const MainLayout = ({ children, title = 'Key-Notion' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Heade />

      {children}

      <Footer />
    </div>
  )
}

export default MainLayout
