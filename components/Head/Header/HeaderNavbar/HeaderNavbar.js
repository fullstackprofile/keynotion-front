import React from 'react'

import Link from 'next/link'


import styles from "./HeaderNavbar.module.css"

const HeaderNavbarItems=[{title :"Home"},{title :"Events"},{title :"Company"},{title :"Gallery"},{title :"Blog"}]

export const HeaderNavbar = () => {
  return (
    <div className={styles.HeaderNavbar}>
        <ul className={styles.nav_items}>
                {HeaderNavbarItems.map(({title})=> <li  key={title} className={styles.nav_item}>
                  <Link href={title}>
                      
                    <p className={styles.menu_item}>{title}</p>
                  </Link>
                  </li>)}
            </ul>
    </div>
  )
}
