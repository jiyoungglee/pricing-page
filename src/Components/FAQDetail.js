import { useState } from 'react';
import '../Styles/FAQ.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function FAQDetail({ question, answer }) {
  const [faqOpen, setFaqOpen] = useState(false);

  const description = <div className="faq-description">{answer}</div>;

  function toggleFaq() {
    setFaqOpen((faqOpen) => !faqOpen)
  }

  return (
    <div>
      <button className="faq-button" onClick={toggleFaq}>
        <h2>
          {question}
          <FontAwesomeIcon icon={faAngleDown} rotation={faqOpen ? 0 : 90}/>
        </h2>
      </button>
      
      { faqOpen && description }
    </div>
  )
}

export default FAQDetail;