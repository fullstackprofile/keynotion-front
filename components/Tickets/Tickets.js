import React from 'react'
import { Title } from '../TItle/Title'
import { Ticket } from './Ticket/Ticket'
import styles from './Tickets.module.css'

export const Tickets = ({ data, event }) => {
  return (
    <div className={styles.tickets}>
      <Title title_2="Tickets" />
      <div className={styles.tickets_block}>
        {data.map(
          (
            { price, sale, currency, items, type, other_type, attractive, id },
            index
          ) => (
            <div className={styles.ticket_} key={index}>
              <Ticket
                price={price}
                sale={sale}
                id={id}
                event={event}
                currency={currency}
                items={items}
                type={type}
                other_type={other_type}
                attractive={Number(attractive)}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}
