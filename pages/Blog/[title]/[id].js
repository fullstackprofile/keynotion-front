import React from 'react'
import axios from 'axios'
// import { useRouter } from 'next/router'
import { BlogNewsHeading } from '../../../components/BlogNewsHeading/BlogNewsHeading'
import { News } from '../../../components/News/News'
import { LeaveReply } from '../../../components/LeaveReply/LeaveReply'
import MainLayoutt from '../../../layouts/MainLayoutt'
import Comments from '../../../components/Commnets/Comments'

const BlogNews = ({ data }) => {
  // const {query} = useRouter()
  // const id = query.id
  return (
    <MainLayoutt>
      <div>
        <BlogNewsHeading />
        <News data={data.data} />
        <Comments data={data.dataComment} />
        <LeaveReply id={data.data.id} />
      </div>
    </MainLayoutt>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const { data: data } = await axios.get(
    `http://laratest.key-notion.com/api/news/${params.id}`
  )
  const { data: dataComment } = await axios.get(
    `http://laratest.key-notion.com/api/comments?news_id=${params.id}`
  )
  return {
    props: {
      data: {
        data: data.data,
        dataComment: dataComment.data,
      },
    },
  }
}

export default BlogNews
