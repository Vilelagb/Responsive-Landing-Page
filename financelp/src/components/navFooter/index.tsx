import styles from './navFooter.module.css'

interface NavFooterProps {
  link: string;
}

const NavFooter: React.FC<NavFooterProps> = ({link}) => {
  return(
    <nav>
      Nav Header
      <ul>
        <li>{link}</li>
        <li>{link}</li>
        <li>{link}</li>
        <li>{link}</li>
      </ul>
    </nav>
  )
}