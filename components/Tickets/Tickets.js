import React from 'react'

import { Title } from '../TItle/Title'
import { Ticket } from './Ticket/Ticket'

import styles from './Tickets.module.css'

//  const data= [
//     {
//     "id": 1,
//     "slug": "vO4jP",
//     "price": 1999,
//     "sale": 799,
//     "currency": "€",
//     "items": [
//         {
//             "id": 1,
//             "slug": "test",
//             "title": "test"
//         },
//         {
//             "id": 2,
//             "slug": "geafdsf",
//             "title": "geafdsf"
//         }
//     ],
//     "event_id": 1,
//     "type": "test",
//     "other_type": "test",

// },
// {
//     "id": 2,
//     "slug": "vO4jP",
//     "price": 2500,
//     "sale": 799,
//     "currency": "€",
//     "items": [
//         {
//             "id": 1,
//             "slug": "test",
//             "title": "test"
//         },
//         {
//             "id": 2,
//             "slug": "geafdsf",
//             "title": "geafdsf"
//         },
//         {
//             "id": 3,
//             "slug": "safsafsafasfsafsafsa",
//             "title": "geaffsafasfsafsadsf"
//         }
//     ],
//     "event_id": 1,
//     "type": "test2",
//     "other_type": "test2",
//     "attractive" : true
// },
// {
//   "id": 2,
//   "slug": "vO4jP",
//   "price": 2500,
//   "sale": 799,
//   "currency": "€",
//   "items": [
//       {
//           "id": 1,
//           "slug": "test",
//           "title": "test"
//       },
//       {
//           "id": 2,
//           "slug": "geafdsf",
//           "title": "geafdsf"
//       },
//       {
//           "id": 3,
//           "slug": "safsafsafasfsafsafsa",
//           "title": "geaffsafasfsafsadsf"
//       }
//   ],
//   "event_id": 1,
//   "type": "test2",
//   "other_type": "test2",
//   "attractive" : true
// },
// {
//   "id": 2,
//   "slug": "vO4jP",
//   "price": 2500,
//   "sale": 799,
//   "currency": "€",
//   "items": [
//       {
//           "id": 1,
//           "slug": "test",
//           "title": "test"
//       },
//       {
//           "id": 2,
//           "slug": "geafdsf",
//           "title": "geafdsf"
//       },
//       {
//           "id": 3,
//           "slug": "safsafsafasfsafsafsa",
//           "title": "geaffsafasfsafsadsf"
//       }
//   ],
//   "event_id": 1,
//   "type": "test2",
//   "other_type": "test6546542",
//   "attractive" : true
// },
// ]

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
