import Image from 'next/image'
import React from 'react'

import styles from './AllNews.module.css'

import { Masonry } from '@mui/lab'
import Link from 'next/link'
import { NewsComp } from './NewsComp/NewsComp'

const news = [
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.28',
    height: 256,
    id: 1,
    category: 'Healthcare',
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 2,
    category: 'Healthcare',
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 256,
    id: 3,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 4,
    category: 'Healthcare',
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 5,
    category: 'Healthcare',
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 6,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 256,
    id: 7,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 256,
    id: 8,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 256,
    id: 9,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 10,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 256,
    id: 11,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 12,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 13,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 400,
    id: 14,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 256,
    id: 15,
  },
  {
    src: '/newsImg.jpg',
    name: 'Lorem Ispum',
    date: 'Nov.30',
    height: 256,
    id: 16,
  },
]

export const AllNews = ({ title_, data }) => {
  const length = data[0].length
  return (
    <div className={styles.allNews}>
      <div className={styles.newsss}>
        <Masonry columns={4} spacing={2}>
          {data[0].map(({ title, date, category, id, cover }, index) =>
            title_ == 'LatestNews' ? (
              <NewsComp
                key={index}
                title_={title_}
                index={index}
                length={length}
                date={date}
                title={title}
                category={category}
                id={id}
                cover={cover}
              />
            ) : (
              category === title_ && (
                <NewsComp
                  key={index}
                  title_={title_}
                  index={index}
                  length={length}
                  date={date}
                  title={title}
                  category={category}
                  id={id}
                  cover={cover}
                />
              )
            )
          )}
        </Masonry>
      </div>
    </div>
  )
}

// "data": [
//     [
//         {
//             "id": 1,
//             "title": "test",
//             "category_id": 4,
//             "category": "Healthcare",
//             "date": "2013-07-22 00:00:00",
//             "cover": "http://localhost:8000/storage/45/UE-Thumbnails20-1.jpg"
//         }
//     ],
//     [
//         {
//             "id": 2,
//             "title": "Test",
//             "category_id": 1,
//             "category": "Technology",
//             "date": "2014-07-22 00:00:00",
//             "cover": "http://localhost:8000/storage/46/Healthcare-webinar-tittle2-1024x506.png"
//         }
//     ]
// ],
