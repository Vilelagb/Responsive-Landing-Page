import styles from './footer.module.css'
import { Logo } from '../../components/logo'
import { NavFooter } from '../../components/navFooter'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export function Footer() {
  return (
    <section className={styles.footer_main}>
      <div className={styles.footer_content}>
        <Logo/>
        <div className={styles.div_nav}>
          <NavFooter
          navHeader='Nav Header 1'
          link1='Home'
          link2='About'
          link3='Contact'
          link4='Nullam'/>
          <NavFooter
          navHeader='Nav Header 2'
          link1='Nunc'
          link2='Malesuada'
          link3='Vitae'
          link4='Tempus'/>
          <NavFooter
          navHeader='Nav Header 3'
          link1='Luctus'
          link2='Ante'
          link3='Imperdiet'
          link4='Donec'/>
        </div>
        <div className={styles.div_social}>
          <h2 className={styles.social_title}>Social</h2>
          <div className={styles.icons}>
            <AiOutlineInstagram size={35}/>
            <AiOutlineFacebook size={35}/>
            <AiOutlineTwitter size={35}/>
          </div>
        </div>
      </div>
    </section>
  )
}