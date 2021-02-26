import React from "react";

function ContactForm(props) {
    return (
        <div className="contact-form">
            <form id="contact" action="" method="post">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <fieldset>
                            <input 
                            name="name" 
                            type="text" 
                            id="name" 
                            placeholder="Full Name" 
                            onChange={props.onNameChange}
                            required 
                            className="contact-field"  
                            value={props.contactMessage.userfullname}
                            />
                        </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <fieldset>
                            <input 
                            name="email" 
                            type="text" 
                            id="email" 
                            placeholder="E-mail" 
                            onChange={props.onEmailChange}
                            required 
                            className="contact-field" 
                            value={props.contactMessage.useremail}
                            />
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                            <textarea 
                            name="message" 
                            rows="6" 
                            id="message" 
                            placeholder="Your Message" 
                            onChange={props.onMessageChange}
                            required 
                            value={props.contactMessage.usermessage}
                            className="contact-field"
                            ></textarea>
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                            <button type="submit" id="form-submit" className="main-button">Send It</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;