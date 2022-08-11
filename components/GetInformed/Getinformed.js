import { Title } from '../TItle/Title'
import { GetInformedCart } from './GetInformedCart/GetInformedCart'

import styles from './Getinformed.module.css'

const GetinformedItems = [
  { title: 'World Consumer Good', dateTitle: 'Nov. 15', id: 1 },
  { title: 'Bioprocessing Summit Interview', dateTitle: 'Nov. 10', id: 2 },
  { title: 'Smart Manufacturing World', dateTitle: 'Nov. 30', id: 3 },
]

export const Getinformed = ({ data }) => {
  return (
    <div className={styles.getinformed}>
      <Title title="GET" title_2="INFORMED" />
      <div className={styles.heading}>
        <p className={styles.title}>Latest News And Blog Event</p>
      </div>
      <div className={styles.GetInformedCarts}>
        {data?.map(({ title, id, cover, category, date }) => (
          <GetInformedCart
            key={id}
            cover={cover}
            title={title}
            id={id}
            dateTitle={date}
            category={category}
          />
        ))}
      </div>
    </div>
  )
}
