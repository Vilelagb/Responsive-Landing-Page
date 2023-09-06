import styles from './navBar.module.css'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <nav className={styles.navigation}>
          <ul className={styles.unorderlist}>
            <li className={styles.listitem}>
              <Link className={styles.link} to='/'>
                Home
              </Link>
            </li>
            <li className={styles.listitem}>
              <Link className={styles.link} to='/contact'>
                Contact
              </Link>
            </li>
            <li className={styles.listitem}>
              <Link className={styles.link} to='/about'>
                About
              </Link>
            </li>
          </ul>
        </nav>
  )
}