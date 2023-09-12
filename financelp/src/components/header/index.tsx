import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { NavBar } from '../navBar'
import { Button } from '../button'
import { Logo } from '../../components/logo'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link className={styles.logo_icon} to='/'>
          <Logo/>
        </Link>
      </div>

      <section className={styles.right_side_nav}>
        <NavBar/>
        <Button/>
      </section>

    </header>
  )
}