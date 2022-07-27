
import Image from 'next/image'
import { useRouter } from 'next/router'

import { ButtonComp } from '../../Button/Button'

import styles from "./AboutEvantsCart.module.css"


export const AboutEvantsCart = ({title,href}) => {
  const router =useRouter()

  const goPage = () => router.push(href)
  return (
    <div className={styles.aboutEvantsCart}>
        <div>
            <Image src="/AboutEventCart.svg" alt='Cart' width={38} height={38} />
        </div>
         <p className={styles.aboutEvantsCart_title}>
            {title}
         </p>
         <div>
         <ButtonComp title="See more" onClick={goPage} />
         </div>
    </div>
  )
}
