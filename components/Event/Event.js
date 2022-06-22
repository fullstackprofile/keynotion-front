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



export const Event = ({All,Live,Virtual}) => {
    const [active,setActive] = React.useState("All Categories")




  return (
    <div className={styles.event}>
        <div className={styles.event_category}>
            {
            categorys.map(({title,})=><Category key={title} title={title} active={active} onClick={()=> setActive(title)}/>)
            }
        </div>
        <div className={styles.events}>
            {
                active==="All Categories" ? All.map(({title})=><div key={title} className={styles.event_body}>{title}</div>) 
                : (active==="Live" ? Live.map(({title})=><div key={title} className={styles.event_body}>{title}</div>)
                : (active==="Virtual" && Virtual.map(({title})=><div key={title} className={styles.event_body}>{title}</div>) )) 
                
            }
        </div>
    </div>
  )
}
