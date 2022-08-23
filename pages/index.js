import { useEffect } from 'react'
import axios from 'axios'
import { AboutEvants } from '../components/AboutEvants/AboutEvants'
import { AboutKeyNation } from '../components/AboutKeyNation/AboutKeyNation'
import { SeamlessService } from '../components/SeamlessService/SeamlessService'
import { TestiMonials } from '../components/TestiMonials/TestiMonials'
import { Sections } from '../components/Sections/Sections'
import { WhyAtted } from '../components/WhyAtted/WhyAtted'
import { Getinformed } from '../components/GetInformed/Getinformed'
import { Subscribe } from '../components/Subscribe/Subscribe'
import MainLayout from '../layouts/MainLayout'
import { parseCookies, setCookie } from 'nookies'
import { addCard } from '../store/cardsSlice'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'
import { useSelector } from 'react-redux'
import { uniqueId } from '../Helpers/help'

export default function Home({ data }) {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
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
    if (user.id || cart_id) {
      dispatch(addCard(data))
    }
  }

  const getUser = async () => {
    const user = await axios.get(
      'http://laratest.key-notion.com/api/profile',
      config
    )
    dispatch(addUser(user.data))
  }

  useEffect(() => {
    getCard()
  }, [user.id, cart_id])

  useEffect(() => {
    getUser()
  }, [])

  return (
    <MainLayout>
      <div>
        <AboutEvants />
        <Sections />
        <AboutKeyNation />
        <WhyAtted />
        <SeamlessService />
        <TestiMonials data={data.testiMonialsData} />
        <Getinformed data={data.getinformedData} />
        <Subscribe />
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async () => {
  const { data: testiMonialsData } = await axios.get(
    'http://laratest.key-notion.com/api/testimonials'
  )
  const { data: getinformedData } = await axios.get(
    `http://laratest.key-notion.com/api/news_home`
  )

  return {
    props: {
      data: {
        testiMonialsData: testiMonialsData.data,
        getinformedData: getinformedData.data,
      },
    },
  }
}
