import React from 'react'
import { Col } from '../../library/Col'
import './About.scss'

export const About = () => {
  return (
    <Col
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="About"
    >
      <Col style={{ gap: '1rem' }}>
        <h1>About Better Blood</h1>
        <FAQItemElement
          question="What is Better Blood?"
          answer="Better Blood is a free health and biomarker tracking website. It allows you to track your blood test results and other health metrics."
        />
        <FAQItemElement
          question="Does it cost money to use Better Blood?"
          answer="Better Blood is completely free."
        />
        <FAQItemElement
          question="Is my data collected or stored somewhere?"
          answer="There are no databases or servers, so all of your data stays with you in your browser. This keeps your data off the internet and saves me from server bills. You can also choose to save your data to a Google Sheet."
        />
        <FAQItemElement
          question="Is Better Blood HIPAA compliant?"
          answer="Better Blood is not HIPAA compliant, but because we do not store any data, we do not need to be. All of your data stays with you in your browser. Better Blood does not collect any PII (personal identifiable information), like your name or email address. If you have any concerns about privacy, please do not use Better Blood."
        />
        <FAQItemElement
          question="Is Better Blood open source?"
          answer="Yes, Better Blood is open source and the code is available on GitHub. https://github.com/BetterBloodInc/better-blood-web-app"
        />
        <FAQItemElement
          question="Who created Better Blood?"
          answer="Better Blood is created by Greg Fong, an American software engineer on a mission to make health tracking more accessible."
        />
        <FAQItemElement
          question="Why was Better Blood created?"
          answer="Better Blood was created to make health tracking more accessible to everyone. It is also something that Greg personally use's to track his own biomarkers."
        />
        <FAQItemElement
          question="How do I use Better Blood?"
          answer="You can start tracking your health by adding your blood test results."
        />
        <FAQItemElement
          question="How does Better Blood make money?"
          answer="Better Blood is completely free. Sponsors and donations can help keep the website running."
        />
        <FAQItemElement
          question="How do I make a feature request or get in contact?"
          answer="If you have any feature requests or need help, please join the Discord server or send an email to greg@betterblood.ai."
        />
        <FAQItemElement
          question="How can I support Better Blood?"
          answer="If you like Better Blood, you can support the creator by buying him a cup of matcha."
        />
        <FAQItemElement
          question="What are the future plans for Better Blood?"
          answer="The plan is to add more health tracking features and expand the website to include more health metrics."
        />
      </Col>
    </Col>
  )
}
export default About

const FAQItemElement = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => {
  return (
    <Col
      gap="0.5rem"
      style={{ padding: '1.5rem', borderRadius: '4px' }}
      className="faq-item"
    >
      <div>{question}</div>
      <div>{answer}</div>
    </Col>
  )
}
