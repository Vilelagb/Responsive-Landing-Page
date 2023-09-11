import styles from './socialProof.module.css'
import { AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom';

interface SocialProofProps {
  description: string;
  proof: string;
  src: string;
  name: string;
}

const SocialProof: React.FC<SocialProofProps> = ({description, src, name, proof}) => {
  return (
    <div className={styles.main}>
      <div className={styles.div_paragraph}>
        <p>{proof}</p>
      </div>
      <div className={styles.div_social}>
        <div className={styles.div_name_and_photo}>
          <img className={styles.image} src={src} alt="" />
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
        </div>
        <div className={styles.div_social_icons}>
         <Link to='#'>
          <AiOutlineFacebook size={20} color='black'/>
         </Link> 
         <Link to='#'>
          <AiOutlineTwitter size={20} color='black'/>
         </Link> 
        </div>
      </div>
    </div>
  )
}

export { SocialProof }
