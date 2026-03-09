import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Col } from '../../library/Col'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'
import './About.scss'

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'What is Better Blood?',
    answer:
      'Better Blood is a free health and biomarker tracking website. It allows you to track your blood test results and other health metrics.',
  },
  {
    question: 'Does it cost money to use Better Blood?',
    answer: 'Better Blood is completely free.',
  },
  {
    question: 'Is my data collected or stored somewhere?',
    answer:
      'There are no databases or servers, so all of your data stays with you in your browser. This keeps your data off the internet and saves me from server bills. You can also choose to save your data to a Google Sheet.',
  },
  {
    question: 'Is Better Blood HIPAA compliant?',
    answer:
      'Better Blood is not HIPAA compliant, but because we do not store any data, we do not need to be. All of your data stays with you in your browser. Better Blood does not collect any PII (personal identifiable information), like your name or email address. If you have any concerns about privacy, please do not use Better Blood.',
  },
  {
    question: 'Is Better Blood open source?',
    answer:
      'Yes, Better Blood is open source and the code is available on GitHub. https://github.com/BetterBloodInc/better-blood-web-app',
  },
  {
    question: 'Who created Better Blood?',
    answer:
      'Better Blood is created by Greg Fong, an American software engineer on a mission to make health tracking more accessible.',
  },
  {
    question: 'Why was Better Blood created?',
    answer:
      "Better Blood was created to make health tracking more accessible to everyone. It is also something that Greg personally use's to track his own biomarkers.",
  },
  {
    question: 'How do I use Better Blood?',
    answer: 'You can start tracking your health by adding your blood test results.',
  },
  {
    question: 'How does Better Blood make money?',
    answer:
      'Better Blood is completely free. Sponsors and donations can help keep the website running.',
  },
  {
    question: 'How do I make a feature request or get in contact?',
    answer:
      'If you have any feature requests or need help, please join the Discord server or send an email to greg@betterblood.ai.',
  },
  {
    question: 'How can I support Better Blood?',
    answer:
      'If you like Better Blood, you can support the creator by buying him a cup of matcha.',
  },
  {
    question: "What are the future plans for Better Blood?",
    answer:
      'The plan is to add more health tracking features and expand the website to include more health metrics.',
  },
]

export const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <PageContainer size="default" className="About">
      <PageHeader title="About Better Blood" />
      <Col style={{ gap: '0.5rem' }} className="About-faq">
        {FAQ_ITEMS.map((item, index) => (
          <FAQItemElement
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </Col>
    </PageContainer>
  )
}
export default About

const FAQItemElement = ({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) => {
  const id = `faq-${index}`
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-trigger`}
      >
        <span>{question}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`faq-item__chevron ${isOpen ? 'faq-item__chevron--open' : ''}`}
        />
      </button>
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`faq-item__content ${isOpen ? 'faq-item__content--open' : ''}`}
        hidden={!isOpen}
      >
        <div className="faq-item__content-inner">{answer}</div>
      </div>
    </div>
  )
}
