import styles from './faqSection.module.css'

interface FaqSectionProps {
  question: string;
  answer: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({question, answer}) => {
  return (
  <details className={styles.faq_box}>
    <summary className={styles.question}>{question}</summary>
    <p className={styles.answer}>{answer}</p>
  </details>
  )
}

export { FaqSection }