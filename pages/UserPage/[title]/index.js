import Head from 'next/head'
import { UserPageBody } from '../../../components/UserPageBody/UserPageBody'
import { EventsHead } from '../../../components/EventsHead/EventsHead'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import { addOrdersDetails } from '../../../store/ordersDetails'

export default function UserPage() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const [newOrders, setNewOrders] = useState()

  const cookie = parseCookies('token')
  const router = useRouter()
  const config = {
    headers: { Authorization: `Bearer ${cookie.token}` },
  }
  const {
    query: { title },
  } = useRouter()

  const getOrders = async () => {
    const { data } = await axios.get(
      `http://laratest.key-notion.com/api/order?user_id=${user.id}`,
      config
    )
    if (data) {
      dispatch(addOrdersDetails(data))
      setNewOrders(data)
    }
  }

  useEffect(() => {
    getOrders()
  }, [])
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
          <UserPageBody newOrders={newOrders} title={title} />
        </>
      )}
    </div>
  )
}
