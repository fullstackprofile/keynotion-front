import React from 'react'

import Link from 'next/link'

import { DropdownMenu } from './dropdownMenu/DropdownMenu'

import styles from './HeaderNavbar.module.css'
import Image from 'next/image'
import { DropdownMenu_2 } from './dropdownMenu_2/DropdownMenu_2'

const HeaderNavbarItems = [
  { title: 'Home', href: '/' },
  {
    title: 'Events',
    modal: [
      { modalTitle: 'Upcoming Events', href: 'Events' },
      { modalTitle: 'Past Events', href: 'PastEvents' },
      { modalTitle: 'Sponsorship', href: 'Sponsorship' },
    ],
  },
  {
    title: 'Company',
    modal: [
      { modalTitle: 'About Us', href: 'About' },
      { modalTitle: 'Careers', href: 'Careers' },
      { modalTitle: 'Contact Us', href: 'ConectUs' },
      { modalTitle: 'Data Privacy', href: 'DataPrivacy' },
    ],
  },
  {
    title: 'Gallery',
    href: 'https://www.flickr.com/photos/187400605@N02/albums',
  },
  {
    title: 'Blog',
    modal: [
      { modalTitle: 'Latest News', href: 'Blog/LatestNews' },
      { modalTitle: 'Technology', href: 'Blog/Technology' },
      { modalTitle: 'Buisness', href: 'Blog/Buisness' },
      { modalTitle: 'Finance', href: 'Blog/Finance' },
      { modalTitle: 'Healthcare', href: 'Blog/Healthcare' },
      { modalTitle: 'Retail', href: 'Blog/Retail' },
      { modalTitle: 'Consumer Goods', href: 'Blog/ConsumerGoods' },
    ],
  },
]

const HeaderNavbarItems_2 = [
  { title: 'Home', href: '/' },
  {
    title: 'Company',
    modal: [
      { modalTitle: 'About Us', href: 'About' },
      { modalTitle: 'Careers', href: 'Careers' },
      { modalTitle: 'Contact Us', href: 'ConectUs' },
      { modalTitle: 'Data Privacy', href: 'DataPrivacy' },
    ],
  },
  {
    title: 'Gallery',
    href: 'https://www.flickr.com/photos/187400605@N02/albums',
  },
  {
    title: 'Blog',
    modal: [
      { subTitle: 'Blog' },
      { modalTitle: 'Latest News', href: 'Blog/LatestNews' },
      { modalTitle: 'Technology', href: 'Blog/Technology' },
      { modalTitle: 'Buisness', href: 'Blog/Buisness' },
      { modalTitle: 'Finance', href: 'Blog/Finance' },
      { modalTitle: 'Healthcare', href: 'Blog/Healthcare' },
      { modalTitle: 'Retail', href: 'Blog/Retail' },
      { modalTitle: 'Consumer Goods', href: 'Blog/ConsumerGoods' },
    ],
    modal_1: [
      { subTitle: 'Evants' },
      { modalTitle: 'Upcoming Events', href: 'Events' },
      { modalTitle: 'Past Events', href: 'PastEvents' },
      { modalTitle: 'Sponsorship', href: 'Sponsorship' },
    ],
  },
]

export const HeaderNavbar = ({ blog }) => {
  return (
    <div className={styles.HeaderNavbar}>
      <ul className={styles.nav_items}>
        {!blog
          ? HeaderNavbarItems.map(({ title, href, modal }) => (
              <li key={title} className={styles.nav_item}>
                {modal ? (
                  <DropdownMenu title={title} modal={modal} />
                ) : href ===
                  'https://www.flickr.com/photos/187400605@N02/albums' ? (
                  <a href={href} target="_blank" rel="noreferrer">
                    <p className={styles.menu_item}>{title}</p>
                  </a>
                ) : (
                  <Link href={href}>
                    <p className={styles.menu_item}>{title}</p>
                  </Link>
                )}
              </li>
            ))
          : HeaderNavbarItems_2.map(
              ({ title, modal_1, modal, subTitle, href }) => (
                <li key={title} className={styles.nav_item}>
                  {modal_1 ? (
                    <DropdownMenu_2
                      title={title}
                      modal_1={modal_1}
                      modal={modal}
                      subTitle={subTitle}
                    />
                  ) : modal ? (
                    <DropdownMenu title={title} modal={modal} />
                  ) : (
                    <Link href={href}>
                      <p className={styles.menu_item}>{title}</p>
                    </Link>
                  )}
                </li>
              )
            )}
      </ul>
    </div>
  )
}
