import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

export const Event = ({All,Past}) => {
    const [active,setActive] = React.useState("All Categories")

    

  return (
    <div className={styles.event}>
        {
            !Past && <div className={styles.event_category}>
            {
            categorys.map(({title,})=><Category key={title} title={title} active={active} onClick={()=> setActive(title)}/>)
            }
        </div>
        }
        <div className={styles.events}>
            {
                active==="All Categories" ? All.map(({title,id,cover},index)=>
                <Link key={index} href={Past ? `PastEvents/${id}` :`Events/${id}`}>
                <div key={title} className={styles.event_body}> 
                <Image src={cover} width={432} height={236} /> 
                </div></Link>) 
                : (active==="Live" ? All.map(({title,id,category,cover},index)=>
                    category==="Live" &&
                <Link key={index} href={Past ? `PastEvents/${id}` :`Events/${id}`}><div key={title} className={styles.event_body}><Image src={cover} width={432} height={236} /> </div></Link>)
                : (active==="Virtual" && All.map(({title,id,category,cover},index)=>
                category==="Virtual" &&
                <Link key={index} href={Past ? `PastEvents/${id}` :`Events/${id}`}><div key={title} className={styles.event_body}><Image src={cover} width={432} height={236} /> </div></Link>) )) 
            }
        </div>
    </div>
  )
}
