import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { parseCookies, setCookie } from 'nookies'
import { uniqueId } from '../Helpers/help'
import { addCard } from '../store/cardsSlice'
import { addUser } from '../store/userSlice'
import { addAddress } from '../store/addressSlice'

const InitialComponent = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const cart_id = parseCookies('cart_id')
  const cookie = parseCookies('token')
  const newUniqueId = uniqueId()
  const config = {
    headers: { Authorization: `Bearer ${cookie.token}` },
  }
  useEffect(() => {
    if (!cart_id.cart_id || !cart_id) {
      setCookie(null, 'cart_id', newUniqueId)
    }
  }, [])
  const getCard = async () => {
    const { data } = await axios.get(
      `http://laratest.key-notion.com/api/cart?cart_id=${
        user ? user.id : cart_id.cart_id
      }`
    )
    if (user?.id || cart_id) {
      dispatch(addCard(data))
    }
  }
  useEffect(() => {
    getCard()
  }, [user?.id, cart_id])

  const getUser = async () => {
    const user = await axios.get(
      'http://laratest.key-notion.com/api/profile',
      config
    )
    dispatch(addUser(user.data))
  }

  useEffect(() => {
    getUser()
  }, [])

  const getAddress = async () => {
    if (user) {
      const { data } = await axios.get(
        `http://laratest.key-notion.com/api/billing?user_id=${user.id}`,
        config
      )
      dispatch(addAddress(data))
    }
  }

  useEffect(() => {
    getAddress()
  }, [user])

  return <></>
}
export default InitialComponent
