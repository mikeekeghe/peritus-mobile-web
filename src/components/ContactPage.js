import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactPage = (props) => {
  const [contactMessage, setContactMessage] = useState({
    userfullname: "",
    useremail: "",
    usermessage: "",
  });

  function handleNameChange(event) {
    const updatedContactMessage = { ...contactMessage };
    updatedContactMessage.userfullname = event.target.value;
    setContactMessage(updatedContactMessage);
  }

  function handleEmailChange(event) {
    const updatedContactMessage = { ...contactMessage };
    updatedContactMessage.useremail = event.target.value;
    setContactMessage(updatedContactMessage);
  }

  function handleMessageChange(event) {
    const updatedContactMessage = { ...contactMessage };
    updatedContactMessage.usermessage = event.target.value;
    setContactMessage(updatedContactMessage);
  }

  return (
    <section className="section" id="contact-us">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div id="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <ContactForm
            contactMessage={contactMessage}
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onMessageChange={handleMessageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
