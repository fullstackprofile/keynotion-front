import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { SmallButton } from '../../Button/SmallButton'
import { HeaderNavbar } from './HeaderNavbar/HeaderNavbar'
import { Login } from '../../Login/Login'
import { SignUp } from '../../SignUp/SignUp'

import styles from "./Header.module.css"

export const Header = () => {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSingup, setOpenSingup] = React.useState(false);

  const handleClickOpenSignup = () => {
    setOpenSingup(true);
  };

  const handleClickCloseSignup = () => {
    setOpenSingup(false);
  };

  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
  };








  return (
    <div className={styles.header}>
        <Link href="/">
        <div className={styles.header_logo}>
            <Image src="/HeaderLogo.png" alt="Logo" width={91} height={64} />
        </div>
        </Link>
        <div className={styles.header_nav_login}>
        <HeaderNavbar />
        <div className={styles.shopingCart}>
            <Image src="/shopingCart.svg" alt="shopCart" width={31} height={38} />
        </div>
        <div className={styles.header_login_reg}>
            <div>
            <SmallButton title="Log In" onClick={handleClickOpen}  transparent/>
            </div>
            <div>
            <SmallButton title="Sign Up" onClick={handleClickOpenSignup} />
            </div>

        </div>
        </div>
        <Login open={openLogin} handleClose={handleClose} />
        <SignUp open={openSingup} handleClose={handleClickCloseSignup}/>
        
      
    </div>
  )
}





