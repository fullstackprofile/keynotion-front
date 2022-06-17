import React from 'react'

import Link from 'next/link'

import {DropdownMenu} from "./dropdownMenu/DropdownMenu"

import styles from "./HeaderNavbar.module.css"
import Image from 'next/image'

const HeaderNavbarItems=[
  {title :"Home"},
  {title :"Events", modal : [{modalTitle:"Upcoming Events",href: "Events"},{modalTitle:"Past Events"},{modalTitle:"Sponsorship",}] },
  {title :"Company",modal : [{modalTitle:"About Us"},{modalTitle:"Careers"},{modalTitle:"Contact Us"},{modalTitle:"Data Privacy"}]},
  {title :"Gallery"},
  {title :"Blog",modal : [{modalTitle:"Home"},{modalTitle:"Latest News"},{modalTitle:"Technology"},{modalTitle:"Buisness"},{modalTitle:"Finance"},{modalTitle:"Healthcare"},{modalTitle:"Retail"},{modalTitle:"Consumer Goods"}]}]

export const HeaderNavbar = () => {

 

  return (
    <div className={styles.HeaderNavbar}>
        <ul className={styles.nav_items}>
                {HeaderNavbarItems.map(({title,modal,})=> <li  key={title} className={styles.nav_item}>
                  {
                    modal ? 
                   
                      <DropdownMenu  title={title} modal={modal}  />
                    
                      
                    :
                  <Link href={title}>
                      
                    <p className={styles.menu_item}>{title}</p>
                  </Link>
                        }
                  </li>)}
                
                
            </ul>
    </div>
  )
}
