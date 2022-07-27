import Image from 'next/image'
import React from 'react'

import ClickAwayListener from '@mui/material/ClickAwayListener'

import styles from './DropdownMenu.module.css'
import Link from 'next/link'

export const DropdownMenu = ({ title, modal }) => {
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
                {modal.map(({ modalTitle, href }, index) => (
                  <Link key={index} href={href ? `/${href}` : '#'}>
                    <div className={styles.dropedMenu_item}>
                      <p className={styles.dropedMenu_item_title}>
                        {modalTitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </ClickAwayListener>
    </>
  )
}
