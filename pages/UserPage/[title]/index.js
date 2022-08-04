import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { UserPageBody } from '../../../components/UserPageBody/UserPageBody'
import { EventsHead } from '../../../components/EventsHead/EventsHead'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import axios from 'axios'

export default function UserPage() {
  const cookie = parseCookies('token')
  const config = {
    headers: { Authorization: `Bearer ${cookie.token}` },
  }

  const onSubmit = async () => {
    const user = await axios.get(
      'http://laratest.key-notion.com/api/profile',
      config
    )
    setUser(user.data)
  }

  const [user, setUser] = useState()

  useEffect(() => {
    onSubmit()
  }, [])

  const {
    query: { title },
  } = useRouter()
  console.log(title)

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

// export const getServerSideProps = async (ctx) => {

//   const {data}= await instance.get("/profile")

//   // console.log(data);
//   // if (data.instanceOf(AxiosError)) {
//   //   console.log(123);
//   // }else{
//   //   console.log(456);
//   // }

//   return {
//     ...(data?.email ? {props: {data: data}} : {redirect: {
//       permanent: false,
//       destination: "/",
//     }})

//   }
// }
