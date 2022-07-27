import React from 'react'

import axios from "axios"

import { useRouter } from 'next/router'


import { BlogHeading } from '../../../components/BlogHeading/BlogHeading'
import { AllNews } from '../../../components/AllNews/AllNews'

import MainLayoutt from '../../../layouts/MainLayoutt'

const TitlePage = ({data}) => {

    const {query: {title}} = useRouter()

    return (
      <MainLayoutt blog>
        <div>
        <BlogHeading />
        <AllNews title_={title} data={data} />
        </div>
      </MainLayoutt>
    )
}

export async function getServerSideProps(context) {

  const {params} = context

  console.log(params.title);

  const {data} = await axios.get(`http://laratest.key-notion.com/api/news`)

  return {
    props: {data: data.data}
  }
}

export default TitlePage
