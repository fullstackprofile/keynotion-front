import React from 'react'
import { Title } from '../TItle/Title'
import styles from './Comments.module.css'
import Image from 'next/image'

const Comments = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.commnets}>
      <Title center={false} title_2="Comments" full />
      {data.map((item) => (
        <div key={item.id} style={{ marginTop: '20px' }}>
          <div className={styles.commnetsAvatar}>
            <Image src="/UserPageIcon.svg" width={83} height={83} />
            <div className={styles.users_nameComment}>
              <p className={styles.user}>{item.name}</p>
              <p className={styles.date}>{item.date}</p>
            </div>
          </div>
          <p className={styles.comment}>{item.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments
