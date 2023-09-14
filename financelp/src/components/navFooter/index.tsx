import styles from './navFooter.module.css'

interface NavFooterProps {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  navHeader: string;
}

const NavFooter: React.FC<NavFooterProps> = ({link1, link2, link3, link4, navHeader}) => {
  return(
    <nav className={styles.nav_content}>
      <h3 className={styles.nav_header}>
        {navHeader}
      </h3>
      <ul className={styles.ul_content}>
        <li className={styles.list_item}>{link1}</li>
        <li className={styles.list_item}>{link2}</li>
        <li className={styles.list_item}>{link3}</li>
        <li className={styles.list_item}>{link4}</li>
      </ul>
    </nav>
  )
}

export { NavFooter }