import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { NavBar } from '../navBar'
import { Button } from '../button'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link className={styles.logo_icon} to='/'>
          <h2 className={styles.logop1}>Solu
            <span className={styles.logop2}>Finance</span>
          </h2>
        </Link>
      </div>

      <section className={styles.right_side_nav}>
        <NavBar/>
        <Button/>
      </section>

    </header>
  )
}