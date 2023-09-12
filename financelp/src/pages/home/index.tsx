import styles from './home.module.css'
import { Button } from '../../components/button'
import { BulletSection } from '../../components/bulletSection'
import { FeatureSection } from '../../components/featuresSection'
import { AiFillStar } from 'react-icons/ai'
import { CiBank, CiBitcoin, CiCircleCheck} from 'react-icons/ci'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { SocialProof } from '../../components/socialProof'
import { FaqSection } from '../../components/faqSection'


import RightImage from '../../assets/images/4136942-magicstudio-18e59p.png'
import MiddleRightImage from '../../assets/images/6425301_magicstudio_mt19fldqukl.png'
import MiddleLeftImage from '../../assets/images/8878499_magicstudio_mxy6i1yaqcd.png'
import Person1 from '../../assets/images/Person 1.png'
import Person2 from '../../assets/images/Person 2.png'
import Person3 from '../../assets/images/Person 3.png'

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

      {/* START MIDDLE SECTION PART 2*/}
        <FeatureSection
        title='Lorem ipsum dolor sit amet, elit consecte adipiscing elit fusce ex.'
        subtitle='Integer interdum mollis elit, ac tincidunt augue pellentesque nec. Mauris in scelerisque magna. Nam lacinia ac sapien in.'
        icon={<BsFillCheckCircleFill/>}
        listItem='Morbi mollis diam'
        src={MiddleRightImage}/>
        <FeatureSection
        title='Lorem ipsum dolor sit amet, elit consecte adipiscing elit fusce ex.'
        subtitle='Integer interdum mollis elit, ac tincidunt augue pellentesque nec. Mauris in scelerisque magna. Nam lacinia ac sapien in.'
        icon={<FaMoneyBillTrendUp/>}
        listItem='Morbi mollis diam'
        src={MiddleLeftImage}/>

      {/* START SOCIAL PROOF SECTION*/}
      <section className={styles.social_proof_section}>
        <SocialProof
        proof='Proin euismod purus et quam suscipit, eu pharetra dolor aliquam. Sed vitae tellus nec enim commodo porta. Fusce tempus iaculis metus sed interdum. Aenean dictum lorem sed libero pulvinar, sed dignissim nisl tincidunt. Aenean blandit ante dapibus, lobortis arcu ac, pulvinar metus. Suspendisse dapibus dictum tortor vitae.'
        src={Person1}
        name='Sed lacinia'
        description='Description'/>

        <SocialProof
        proof='Ut hendrerit enim eu libero bibendum, vitae rhoncus ex fermentum. Nunc viverra mi sit amet euismod feugiat. Nunc rutrum mollis cursus. Vestibulum euismod metus at tortor ornare venenatis. Nullam ac dui pellentesque odio posuere cursus pulvinar at nisi. Nam et nisl erat. Etiam vehicula blandit consectetur consequat arcu non.'
        src={Person2}
        name='Donec tincidunt'
        description='Description'/>

        <SocialProof
        proof='Nulla quis sem libero. Nam sit amet urna pretium, tincidunt dolor sit amet, rutrum magna. Etiam justo velit, semper id euismod in, blandit quis elit. Suspendisse eget odio tincidunt, bibendum orci ac, dapibus est. Nam tristique nisi malesuada, suscipit ipsum nec, iaculis augue. Nam neque turpis, tincidunt eu luctus ac.'
        src={Person3}
        name='Cras porta'
        description='Description'/>
      </section>

      {/* START FAQ SECTION*/}
      <section className={styles.faq_section}>
        <div className={styles.faq_box}>
          <h2 className={styles.faq_title}>
            Vestibulum non urna
          </h2>
          <p className={styles.faq_subtitle}>
            Cras pretium tristique tortor at egestas. Donec mollis nibh et metus dapibus laoreet. Sed molestie commodo purus, auctor ullamcorper neque tristique vel.
          </p>
          <FaqSection
          question='Phasellus pellentesque pharetra magna, non porta justo?'
          answer='Vivamus cursus ante a lacinia bibendum. Phasellus auctor commodo orci, at egestas turpis porttitor non. Nam in sapien urna. Ut rhoncus, libero eu posuere interdum, diam justo faucibus neque.'/>
          <FaqSection
          question='Ut facilisis nulla vel ipsum volutpat rutrum. Integer in?'
          answer='Vivamus cursus ante a lacinia bibendum. Phasellus auctor commodo orci, at egestas turpis porttitor non. Nam in sapien urna. Ut rhoncus, libero eu posuere interdum, diam justo faucibus neque.'/>
          <FaqSection
          question='Donec quam orci, viverra sed aliquet et, pharetra a ipsum?'
          answer='Vivamus cursus ante a lacinia bibendum. Phasellus auctor commodo orci, at egestas turpis porttitor non. Nam in sapien urna. Ut rhoncus, libero eu posuere interdum, diam justo faucibus neque.'/>
          <FaqSection
          question='Fusce eros purus, accumsan sed aliquam vitae, suscipit?'
          answer='Vivamus cursus ante a lacinia bibendum. Phasellus auctor commodo orci, at egestas turpis porttitor non. Nam in sapien urna. Ut rhoncus, libero eu posuere interdum, diam justo faucibus neque.'/>
          <FaqSection
          question='Cras ac mattis metus. Donec massa ipsum, imperdiet non?'
          answer='Vivamus cursus ante a lacinia bibendum. Phasellus auctor commodo orci, at egestas turpis porttitor non. Nam in sapien urna. Ut rhoncus, libero eu posuere interdum, diam justo faucibus neque.'/>
        </div>
      </section>
      {/* START LAST CALL TO ACTION SECTION*/}
      <section className={styles.last_call_div}>
        <div className={styles.last_call_content}>
          <h2 className={styles.last_call_title}>Quisque at malesuada orci. Vestibulum eros libero, eleifend.</h2>
          <Button/>
        </div>
      </section>


    </section>
  )
}