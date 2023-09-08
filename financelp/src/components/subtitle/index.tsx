import styles from 'react-router-dom'
interface SubtitleProps {
  phrase: string;
}

const Subtitle: React.FC<SubtitleProps> = ({  phrase }) => {
  return ( 
    <div>
      {phrase}
    </div>
  )
};

export default Subtitle;