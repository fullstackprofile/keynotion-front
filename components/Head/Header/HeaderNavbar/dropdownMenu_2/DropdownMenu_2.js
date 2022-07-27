import Image from 'next/image'
import React from 'react'

import ClickAwayListener from '@mui/material/ClickAwayListener'

import styles from './DropdownMenu_2.module.css'
import Link from 'next/link'

const dropdownIcons = [
  {
    src: '/Facebook.svg',
    href: 'https://www.facebook.com/KEYNOTION/',
    width: 42,
    height: 42,
  },
  {
    src: '/Twitter.svg',
    href: 'https://twitter.com/keynotion/',
    width: 42,
    height: 42,
  },
  {
    src: '/Youtube.svg',
    href: 'https://www.youtube.com/channel/UCmQPP5WqFHwnv1XU7wiTwPg',
    width: 42,
    height: 42,
  },
  {
    src: '/Linkdin.svg',
    href: 'https://www.linkedin.com/company/keynotion/',
    width: 42,
    height: 42,
  },
]

export const DropdownMenu_2 = ({ title, modal, modal_1 }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div className={styles.dropdown} onClick={handleOpen}>
          <div className={styles.dropdown_}>
            <div className={styles.dropdown_head}>
              <p className={styles.menu_item}>{title}</p>
              <div className={styles.dropdown_icon_block}>
                <Image
                  src="/arrowbottom.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </div>
            </div>
            {open && (
              <div className={styles.dropedMenu}>
                <div className={styles.dropedMenu_up}>
                  <div className={styles.left}>
                    {modal_1.map(
                      ({ modalTitle, href, modalTitle_1, subTitle }, index) => (
                        <div className={styles.menuuuu} key={index}>
                          {subTitle && (
                            <p className={styles.subTitle}>{subTitle}</p>
                          )}

                          {modalTitle && (
                            <Link href={href ? `/${href}` : '#'}>
                              <div className={styles.dropedMenu_item}>
                                <p className={styles.dropedMenu_item_title}>
                                  {modalTitle}
                                </p>
                              </div>
                            </Link>
                          )}
                        </div>
                      )
                    )}
                  </div>
                  <div className={styles.right}>
                    {modal.map(({ modalTitle, href, subTitle }, index) => (
                      <div className={styles.menuuuu} key={index}>
                        {subTitle && (
                          <p className={styles.subTitle}>{subTitle}</p>
                        )}
                        {modalTitle && (
                          <Link href={href ? `/${href}` : '#'}>
                            <div className={styles.dropedMenu_item}>
                              <p className={styles.dropedMenu_item_title}>
                                {modalTitle}
                              </p>
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.dropedMenu_footer}>
                  {dropdownIcons.map(({ src, href, width, height }, index) => (
                    <div key={index}>
                      <a href={href} target="_blank" rel="noreferrer">
                        <Image
                          src={src}
                          alt="logo"
                          width={width}
                          height={height}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </ClickAwayListener>
    </>
  )
}
