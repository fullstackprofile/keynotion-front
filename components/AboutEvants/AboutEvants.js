import { AboutEvantsCart } from './AboutEvantsCart/AboutEvantsCart'

import styles from './AboutEvants.module.css'

const AboutEvantsItems = [
  { title: 'Upcoming Events', href: '/Events' },
  { title: 'Past Events', href: '/PastEvents' },
  { title: 'Sponsorship', href: '/Sponsorship' },
]

export const AboutEvants = () => {
  return (
    <div className={styles.aboutEvants}>
      <div className={styles.aboutEvants_carts}>
        {AboutEvantsItems.map(({ title, href }) => (
          <AboutEvantsCart key={title} title={title} href={href} />
        ))}
      </div>
    </div>
  )
}
