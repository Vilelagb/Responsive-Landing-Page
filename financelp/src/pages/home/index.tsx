import styles from './home.module.css'
import { Button } from '../../components/button'
import { Subtitle } from '../../components/subtitle'
import { BulletSection } from '../../components/bulletSection'
import RightImage from '../../assets/images/4136942-magicstudio-18e59p.png'

export function Home() {
  return (
    <section className={styles.main_container}>
      {/* START TOP SECTION */}
      <section className={styles.top_section}>
        {/* START LEFT TOP SECTION*/}
        <section className={styles.top_left_section}>
          <div className={styles.left_content}>
            <div className={styles.div_title}>
              <h1 className={styles.title}>Your main value <br /> proposition</h1>
            </div>
            <div className={styles.subtitle}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit <br />
                Eum cupiditate velit sint laboriosam blanditiis sit.</p>
            </div>
                <Button/>
          </div>
        </section>
          {/* START RIGHT TOP SECTION */}
          <section className={styles.top_right_section}>
            <div className={styles.div_image}>
              <img className={styles.first_image} src={RightImage} alt="Finance right image" />
            </div>
          </section>
      </section>

      {/* START MIDDLE SECTION */}
      <section className={styles.middle_section}>
        <div className={styles.div_middle_title}>
          <h2 className={styles.middle_title}>
            Hook to scroll right here
          </h2>
        </div>
      </section>
      
    </section>
  )
}