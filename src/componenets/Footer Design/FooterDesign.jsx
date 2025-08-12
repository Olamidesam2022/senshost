import React, { useState } from "react";
import "./FooterDesign.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterDesign = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is IOT?",
      answer:
        "Senshost's IoT solutions can enhance your business by providing real-time data monitoring, automation, and control. This can lead to increased efficiency, reduced operational costs, and improved decision-making.",
    },
    {
      question: "How does IoT work?",
      answer:
        "IoT devices connect to the internet and exchange data with other systems. They can be controlled remotely, often using a smartphone or other smart system.",
    },
    {
      question: "How can Senshost's IoT solutions benefit my business?",
      answer:
        "Senshost's IoT solutions can enhance your business by providing real-time data monitoring, automation, and control. This can lead to increased efficiency, reduced operational costs, and improved decision-making.",
    },
  ];

  return (
    <div className="faq-section">
      <h4 className="faq-header">FAQs</h4>
      <h2>Common Questions We Answer</h2>
      <p className="subtext">
        Don&apos;t hesitate to delve into our FAQ and uncover the insights
        you&apos;ve been searching for.
      </p>

      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="icon">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}

      <div className="cta-container">
        <h2 className="cta-heading">
          Ready to revolutionize your operations with
          <br />
          <strong>Senshost's innovative solutions?</strong>
        </h2>
        <button className="cta-button">Free trial for 7 days →</button>
      </div>

      <div className="footer-bar">
        <div className="footer-left">
          <img
            src="/senshost logo 2.svg"
            alt="Senshost Logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-nav">
          <a href="#solutions">Solutions</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-social">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterDesign;
