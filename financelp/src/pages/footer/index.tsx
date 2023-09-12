import styles from './footer.module.css'
import { Logo } from '../../components/logo'
import { NavFooter } from '../../components/navFooter'

export function Footer() {
  return (
    <section className={styles.footer_main}>
      <div className={styles.footer_content}>
        <Logo/>
        <div>
          
        </div>
      </div>
    </section>
  )
}