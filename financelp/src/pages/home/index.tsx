import styles from './home.module.css'
import { Button } from '../../components/button'
import { BulletSection } from '../../components/bulletSection'
import { AiFillStar } from 'react-icons/ai'
import { CiBank, CiBitcoin, CiCircleCheck} from 'react-icons/ci'


import RightImage from '../../assets/images/4136942-magicstudio-18e59p.png'
import  Subtitle  from '../../components/subtitle'


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
            <div className={styles.button_and_user_rating}>
                <Button/>
                <div className={styles.user_rating}>
                  <span>+590 users</span>
                  <div className={styles.icons}>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                  </div>
                </div>
            </div>
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
        <div className={styles.div_bullets}>
          <BulletSection
          icon= {<CiBank/>}
          title="Bullet one"
          subtitle="Lorem ipsum dolor sit amet, consecte adipiscing elit. Fusce ex lorem, mollis nec sapien vel. "/>
          <BulletSection
          icon= {<CiCircleCheck/>}
          title="Bullet two"
          subtitle="Lorem ipsum dolor sit amet, consecte adipiscing elit.  Fusce ex lorem, mollis nec sapien vel. "/>
          <BulletSection
          icon= {<CiBitcoin/>}
          title="Bullet three"
          subtitle="Lorem ipsum dolor sit amet, consecte adipiscing elit.  Fusce ex lorem, mollis nec sapien vel. "/>
        </div>
      </section>
      
    </section>
  )
}