import { Title } from '../TItle/Title'
import { GetInformedCart } from './GetInformedCart/GetInformedCart'
import styles from './Getinformed.module.css'

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
