
import { AboutEvantsCart } from './AboutEvantsCart/AboutEvantsCart'

import styles from "./AboutEvants.module.css"

const AboutEvantsItems=[{title: "Upcoming Events"},{title: "Past Events"},{title: "On-Demand Programs"}]

export const AboutEvants = () => {
  return (
    <div className={styles.aboutEvants}>
        <div className={styles.aboutEvants_carts}>
            
            {
                AboutEvantsItems.map(({title})=> <AboutEvantsCart key={title} title={title} />)
            }
            
        </div>

    </div>
  )
}
