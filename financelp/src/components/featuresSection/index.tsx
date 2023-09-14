import styles from './featuresSection.module.css'
import { ReactNode } from 'react'

interface FeatureSectionProps{
  title: string;
  subtitle: string;
  src: string;
  icon: ReactNode;
  listItem: string;
  listItem2: string;
  listItem3: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({title, subtitle, src, icon, listItem, listItem2, listItem3}) => {
  return (
    <>
      <div className={styles.left_content}>
        <div className={styles.title_subtitle_and_list}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.icon_and_list}>
            <div className={styles.list}>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.listItem}>{listItem}</span>
            </div>
            <div className={styles.list}>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.listItem}>{listItem2}</span>
            </div>
            <div className={styles.list}>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.listItem}>{listItem3}</span>
            </div>
          </div>  
        </div>
      </div>
      <div className={styles.right_content}>
        <img className={styles.img} src={src} alt="" />
      </div>
    </>
  )
}

export { FeatureSection }