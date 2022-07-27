import React from 'react'

import axios from 'axios'

// import { useRouter } from 'next/router'

import { BlogNewsHeading } from '../../../components/BlogNewsHeading/BlogNewsHeading'
import { News } from '../../../components/News/News'
import { LeaveReply } from '../../../components/LeaveReply/LeaveReply'

import MainLayoutt from '../../../layouts/MainLayoutt'

const BlogNews = ({ data }) => {
  // const {query} = useRouter()
  // const id = query.id

  return (
    <MainLayoutt>
      <div>
        <BlogNewsHeading />
        <News data={data} />
        <LeaveReply />
      </div>
    </MainLayoutt>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const { data } = await axios.get(
    `http://laratest.key-notion.com/api/news/${params.id}`
  )

  return {
    props: { data: data.data },
  }
}

export default BlogNews
