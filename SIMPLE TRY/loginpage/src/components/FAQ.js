// Import necessary React modules
import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file for styling
import { ArrowDropDown, Facebook, QuestionAnswer } from '@mui/icons-material';
import Navbar from './Navbar';

// Create the FAQ component
const FAQ = () => {
  const faqData = [
    {
      question: 'What is an Application Tracking System (ATS)?',
      
      answer:
       <b> An Application Tracking System (ATS) is a software application designed to help organizations streamline the recruitment process by automating tasks such as job posting, candidate screening, and interview scheduling.</b>
    },
    {
      question: 'How does HireSmart benefit companies?',
      answer:
        <b>HireSmart benefits companies by improving the efficiency of the hiring process, reducing time-to-fill for open positions, enhancing collaboration among hiring teams, and providing data-driven insights for better decision-making.</b>
    },
    {
      question: 'Is HireSmart suitable for small businesses?',
      answer:
        <b>Yes, HireSmart solutions are designed to cater to the needs of small businesses. They offer scalable features that can adapt to the size and requirements of the organization.</b>
    },
    {
      question: 'Can Hiresmart integrate with other HR tools?',
      answer:
        <b>Yes, HireSmart often provide integrations with a variety of HR tools, such as payroll systems, background check services, and onboarding software.</b>
    },
    {
      question: 'How secure is the data stored in an ATS?',
      answer:
        <b>Security is a priority for ATS providers. They implement measures such as encryption, access controls, and regular security audits to protect sensitive candidate and organizational data.</b>
    },
    {
      question: 'What should I look for in HireSmart for my organization?',
      answer:
        <b>When choosing HireSmart, consider factors such as ease of use, scalability, integration capabilities, reporting features, and customer support. It should align with the specific needs and goals of your organization.</b>
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
<div id='entire'>
    <div className="faq-container">
      <Navbar/>
      <div id='faq'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h2 >Frequently Asked Questions  
       
        
</h2>
      </div>
     
      <div className="faq-list">
     
        {faqData.map((item, index) => (
          
          <div key={index} className={`faq-item ${index === expandedIndex ? 'expanded' : ''}`}>
            <div className="question"  onClick={() => handleToggle(index)}>
              {item.question}
              <div id='arrow'>
             <ArrowDropDown ></ArrowDropDown>
             </div>
            </div>
            {index === expandedIndex && <div className="answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

// Export the FAQ component
export default FAQ;