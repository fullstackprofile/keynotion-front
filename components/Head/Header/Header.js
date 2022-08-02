import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmallButton } from '../../Button/SmallButton'
import { HeaderNavbar } from './HeaderNavbar/HeaderNavbar'
import { MobileMenu } from './HeaderNavbar/MobileMenu'
import { Login } from '../../Login/Login'
import { SignUp } from '../../SignUp/SignUp'
import { ForgotPass } from '../../Login/ForgotPass/ForgotPass'
import { useRouter } from 'next/router'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import styles from './Header.module.css'
import { DropdownMenu } from './HeaderNavbar/dropdownMenu/DropdownMenu'
import { ClickAwayListener } from '@mui/material'
import AppContext from '../../AppContext/AppContext'
import { StyledBadge } from '../../StyledBadge/StyledBadge'
import useIsMobile from '../../../Helpers/helpers'

export const Header = ({ blog }) => {
  const isMobile = useIsMobile()
  function Logout() {
    destroyCookie({}, 'token', { path: '/' })
    router.push('/')
  }
  console.log(isMobile, 'isMobile')
  const [openLogin, setOpenLogin] = React.useState(false)
  const [openSingup, setOpenSingup] = React.useState(false)
  const [openForgot, setOpenForgot] = React.useState(false)

  const handleClickOpenSignup = () => {
    setOpenSingup(true)
  }

  const handleClickCloseSignup = () => {
    setOpenSingup(false)
  }

  const handleClickOpen = () => {
    setOpenLogin(true)
  }

  const handleClose = () => {
    setOpenLogin(false)
  }

  const handleClickOpenForgot = () => {
    setOpenLogin(false)
    setOpenForgot(true)
  }

  const handleCloseForgot = () => {
    setOpenForgot(false)
    setOpenLogin(true)
  }

  const router = useRouter()

  const goCard = () => router.push('/Card')
  const goUserPage = () => router.push('/UserPage')

  const cookie = parseCookies('token')

  const [login, setLogin] = useState()

  useEffect(() => {
    cookie.token ? setLogin(true) : setLogin(false)
  }, [cookie])

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const context = useContext(AppContext)

  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.header_logo}>
          <Image src="/HeaderLogo.png" alt="Logo" width={91} height={64} />
        </div>
      </Link>
      <div className={styles.header_nav_login}>
        {isMobile <= 800 ? (
          <MobileMenu blog={blog && true} />
        ) : (
          <HeaderNavbar blog={blog && true} />
        )}
        <div className={styles.shopingCart} onClick={goCard}>
          <StyledBadge badgeContent={context.session.count}>
            <Image
              src="/shopingCart.svg"
              alt="shopCart"
              width={31}
              height={38}
            />
          </StyledBadge>
        </div>
        {!login ? (
          <div className={styles.header_login_reg}>
            <div>
              <SmallButton
                title="Sign In"
                onClick={handleClickOpen}
                transparent
              />
            </div>
            <div style={{ marginTop: isMobile <= 800 ? '10px' : '0px' }}>
              <SmallButton title="Sign Up" onClick={handleClickOpenSignup} />
            </div>
          </div>
        ) : (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className={styles.userPageIcon} onClick={handleOpen}>
              <Image src="/UserPageIcon.svg" width={38} height={38} />
              {open && (
                <div className={styles.dropedMenu}>
                  <Link href={`/UserPage/Dashboard`}>
                    <div className={styles.dropedMenu_item}>
                      <p className={styles.dropedMenu_item_title}>Dashboard</p>
                    </div>
                  </Link>
                  <Link href={`/UserPage/Orders`}>
                    <div className={styles.dropedMenu_item}>
                      <p className={styles.dropedMenu_item_title}>Orders</p>
                    </div>
                  </Link>
                  <Link href={`/UserPage/Address`}>
                    <div className={styles.dropedMenu_item}>
                      <p className={styles.dropedMenu_item_title}>Address</p>
                    </div>
                  </Link>
                  <Link href={`/UserPage/AccountDetails `}>
                    <div className={styles.dropedMenu_item}>
                      <p className={styles.dropedMenu_item_title}>
                        Account Details
                      </p>
                    </div>
                  </Link>

                  <div className={styles.dropedMenu_item} onClick={Logout}>
                    <p className={styles.dropedMenu_item_title}>Log Out</p>
                  </div>
                </div>
              )}
            </div>
          </ClickAwayListener>
        )}
      </div>
      <Login
        open={openLogin}
        handleClose={handleClose}
        handleClickOpenForgot={handleClickOpenForgot}
      />
      <SignUp open={openSingup} handleClose={handleClickCloseSignup} />
      <ForgotPass open={openForgot} handleClose={handleCloseForgot} />
    </div>
  )
}
