import styles from './bulletSection.module.css'

interface BulletProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const BulletSection: React.FC<BulletProps> = ({icon, title, subtitle}) => {
  return (
    <div className={styles.bullet_div}>
      <div className={styles.title_and_icon}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.subtitle_div}>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  )
}

export { BulletSection }