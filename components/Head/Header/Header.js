import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmallButton } from '../../Button/SmallButton'
import { HeaderNavbar } from './HeaderNavbar/HeaderNavbar'
import { MobileMenu } from './HeaderNavbar/MobileMenu'
import { Login } from '../../Login/Login'
import { SignUp } from '../../SignUp/SignUp'
import { ForgotPass } from '../../Login/ForgotPass/ForgotPass'
import { useRouter } from 'next/router'
import { parseCookies, destroyCookie } from 'nookies'
import styles from './Header.module.css'
import { DropdownMenu } from './HeaderNavbar/dropdownMenu/DropdownMenu'
import { ClickAwayListener } from '@mui/material'
import { StyledBadge } from '../../StyledBadge/StyledBadge'
import useIsMobile from '../../../Helpers/helpers'
import { useSelector } from 'react-redux'
// import { useMediaQuery } from 'use-hooks'
// import useMediaQuery from '../../../Helpers/helpers'

export const Header = ({ blog }) => {
  // const matches = useMediaQuery('(max-width: 768px)')
  const data = useSelector((state) => state.cards.card)
  const isMobile = useIsMobile()
  const [openLogin, setOpenLogin] = useState(false)
  const [openSingup, setOpenSingup] = useState(false)
  const [openForgot, setOpenForgot] = useState(false)
  const [login, setLogin] = useState()
  const [open, setOpen] = useState(false)
  const cookie = parseCookies('token')
  const router = useRouter()

  function Logout() {
    destroyCookie({}, 'token', { path: '/' })
    router.push('/')
  }

  let count = data?.map((item) => {
    return item.data.items?.[0]?.count
  })
  //toString()

  const handleClickOpenSignup = () => {
    setOpenSingup(true)
  }

  const handleClickCloseSignup = () => {
    setOpenSingup(false)
  }
  const handleClickCloseVerify = () => {
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

  const goCard = () => {
    router.push('/Card')
  }
  const goUserPage = () => router.push('/UserPage')

  useEffect(() => {
    cookie.token ? setLogin(true) : setLogin(false)
  }, [cookie])

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image
          src="/HeaderLogo.png"
          alt="Logo"
          width={isMobile >= 768 ? 91 : 40}
          height={isMobile >= 768 ? 64 : 20}
        />
      </Link>
      <div className={styles.header_nav_login}>
        {isMobile <= 800 ? (
          <MobileMenu blog={blog && true} />
        ) : (
          <HeaderNavbar blog={blog && true} />
        )}
        <div className={styles.shopingCart} onClick={goCard}>
          <StyledBadge badgeContent={count ? count : 0}>
            <Image
              src="/shopingCart.svg"
              alt="shopCart"
              width={isMobile >= 768 ? 31 : 40}
              height={isMobile >= 768 ? 38 : 20}
            />
          </StyledBadge>
        </div>
        {!login ? (
          isMobile >= 768 && (
            <div className={styles.header_login_reg}>
              <div>
                <SmallButton
                  title="Sign In"
                  onClick={handleClickOpen}
                  transparent
                />
              </div>
              <div>
                <SmallButton title="Sign Up" onClick={handleClickOpenSignup} />
              </div>
            </div>
          )
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
