import React from 'react'
import { ButtonComp } from '../Button/Button'
import { Category } from './Category/Category'


import styles from "./Event.module.css"

// const items = [
//     {
//         id: 1,
//         title: "All categories",
//         categoryItems: []
//     }
// ]


const categorys=[{title: "All Categories"},{title: "Live"},{title: "Virtual"}]
const AllEvents=[{title: 1},{title: 2},{title: 3},{title: 4},{title: 5},{title: 6},{title: 7},{title: 8},{title: 9},{title: 10}]
const LiveEvents=[{title: 1},{title: 3},{title: 5},{title: 6},{title: 8}]
const VirtualEvents=[{title: 2},{title: 4},{title: 7}]


export const Event = () => {
    const [active,setActive] = React.useState("All Categories")




  return (
    <div className={styles.event}>
        <div className={styles.event_category}>
            {
            categorys.map(({title,})=><Category title={title} active={active} onClick={()=> setActive(title)}/>)
            }
        </div>
        <div className={styles.events}>
            {
                active==="All Categories" ? AllEvents.map(({title})=><div className={styles.event_body}>{title}</div>) 
                : (active==="Live" ? LiveEvents.map(({title})=><div className={styles.event_body}>{title}</div>)
                : (active==="Virtual" && VirtualEvents.map(({title})=><div className={styles.event_body}>{title}</div>) )) 
                
            }
        </div>
    </div>
  )
}
