import React from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import { UserPageBody } from '../../../components/UserPageBody/UserPageBody'
import { EventsHead } from '../../../components/EventsHead/EventsHead'
import { useRouter } from 'next/router'

export default function UserPage() {
  const user = useSelector((state) => state.user.user)

  const {
    query: { title },
  } = useRouter()

  return (
    <div>
      <Head>
        <title>Key-Notion</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {user && (
        <>
          <EventsHead />
          <UserPageBody title={title} />
        </>
      )}
    </div>
  )
}
