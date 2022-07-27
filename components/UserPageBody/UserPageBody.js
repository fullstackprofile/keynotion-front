import React, { useEffect, useState } from 'react'

import Image from "next/image"


import { destroyCookie, parseCookies } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'



;

import styles from "./UserPageBody.module.css"

import { Dashboard } from '../Dashboard/Dashboard'
import { AccountDetails } from '../AccountDetails/AccountDetails'
import { BilingAddress } from '../BilingAddress/BilingAddress'

export const UserPageBody = ({title}) => {

  const router =useRouter()

  function handleClick() {
    destroyCookie({}, 'token',{path: '/'})
    router.push("/")
  }

  const cookie=parseCookies("token")

  const onSubmita = async () => {
      const users = await axios.get('http://laratest.key-notion.com/api/profile', {headers : {Authorization: `Bearer ${cookie.token}`}});
      setUser (users.data)
    }
    
    const[user,setUser]= useState()
    
    useEffect( () => {

      onSubmita()

    }, [])

    

  return (
    <div className={styles.userPageBody}>
        <div className={styles.body}>
            <div className={styles.usersMenu}>
                <div className={styles.avatar}>
                <Image src="/UserPageIcon.svg" width={120} height={120} />
                <div className={styles.users_name}>
                <p className={styles.first_name}>{user?.first_name}</p>
                
                <p className={styles.last_name}>{user?.last_name}</p>
                </div>
                </div>
                <div className={styles.usersMenu_block}>
                    <Link href="/UserPage/Dashboard">
                    <div className={styles.usersMenu_item_block}>
                        <div className={styles.usersMenu_item_}>
                        <p className={styles.usersMenu_item}>Dashboard</p>
                        <Image src={title== "Dashboard" ?  "/DashboardActive.png" : "/Dashboard.png"} width={30} height={30}/>
                        </div>
                    </div>
                    </Link>
                    <Link href="/UserPage/Orders">
                    <div className={styles.usersMenu_item_block}>
                        <div className={styles.usersMenu_item_}>
                            <p className={styles.usersMenu_item}>Orders</p>
                            <Image src={title=="Orders"? "/OrderActive.png" : "/ordersIcon.png"} width={30} height={30}/>
                        </div>
                    </div>
                    </Link>
                    <Link href="/UserPage/Address">
                    <div className={styles.usersMenu_item_block} >
                    <div className={styles.usersMenu_item_}>
                            <p className={styles.usersMenu_item}>Address</p>
                            <Image src="/Address.png" width={30} height={30}/>
                        </div>
                    </div>
                    </Link>
                    <Link href="/UserPage/AccountDetails">
                    <div className={styles.usersMenu_item_block} >
                    <div className={styles.usersMenu_item_}>
                            <p className={styles.usersMenu_item}>Account Details</p>
                            <Image src={title == "AccountDetails" ? "/AccountDetActive.png" :"/AccountDet.png"} width={30} height={30}/>
                        </div>
                    </div>
                    </Link>
                    <div className={styles.usersMenu_item_block} onClick={handleClick}>
                    <div className={styles.usersMenu_item_}>
                            <p className={styles.usersMenu_item}>Log Out</p>
                            <Image src="/LogoutIcon.png" width={30} height={25}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.usersdetails}>
                {
                    title == "Dashboard" && 
                    <Dashboard first_name={user?.first_name} last_name={user?.last_name}/>
                }
                {
                    title == "AccountDetails" && 
                    <AccountDetails user={user}/>  
                }
                 {
                    title == "Address" && 
                    <BilingAddress user={user}/>
                }
            </div>
        </div>
    </div>
  )
}
