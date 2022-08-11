import Image from 'next/image'
import { useRouter } from 'next/router'
import { ButtonComp } from '../../Button/Button'
import styles from './AboutEvantsCart.module.css'
import useIsMobile from '../../../Helpers/helpers'

export const AboutEvantsCart = ({ title, href }) => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const goPage = () => router.push(href)
  return (
    <div className={styles.aboutEvantsCart}>
      <div>
        <Image
          src="/AboutEventCart.svg"
          alt="Cart"
          width={isMobile >= 768 ? 38 : 20}
          height={isMobile >= 768 ? 38 : 20}
        />
      </div>
      <p className={styles.aboutEvantsCart_title}>{title}</p>
      <div>
        <ButtonComp title="See more" onClick={goPage} />
      </div>
    </div>
  )
}
