import React from 'react'
import styles from './AllNews.module.css'
import { Masonry } from '@mui/lab'
import { NewsComp } from './NewsComp/NewsComp'
import { convertMountName } from '../../Helpers/help'

export const AllNews = ({ title_, data }) => {
  const length = data.length
  return (
    <div className={styles.allNews}>
      <div className={styles.newsss}>
        <Masonry columns={4} spacing={2}>
          {data.map(({ title, date, category, id, cover }, index) =>
            title_ == 'LatestNews' ? (
              <NewsComp
                key={index}
                title_={title_}
                index={index}
                length={length}
                date={convertMountName(date)}
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
