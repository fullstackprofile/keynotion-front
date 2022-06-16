
import Image from 'next/image'
import { ButtonComp } from '../../Button/Button'

import styles from "./AboutEvantsCart.module.css"


export const AboutEvantsCart = ({title}) => {
  return (
    <div className={styles.aboutEvantsCart}>
        <div>
            <Image src="/AboutEventCart.svg" alt='Cart' width={38} height={38} />
        </div>
         <p className={styles.aboutEvantsCart_title}>
            {title}
         </p>
         <div>
         <ButtonComp title="See more" />
         </div>
    </div>
  )
}
