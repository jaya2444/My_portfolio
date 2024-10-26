import React from 'react';
import './ContactForm.css'; // Import CSS for styling

const ContactForm = () => {
  return (
    <div className="contact-container" id="contact"> {/* Add id here */}
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">Feel free to reach out to me for any questions or opportunities!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" id="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" id="name" className="form-control" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="subject"></label>
          <input type="text" id="subject" className="form-control" placeholder="Subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea id="message" className="form-control" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
