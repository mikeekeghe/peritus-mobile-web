import React from "react";

class ContactPage extends React.Component {
  render() {
    return (

      <section class="section" id="contact-us">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div id="map">

              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" width="100%" height="500px" frameborder="0"  allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="contact-form">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" id="name" placeholder="Full Name" required="" class="contact-field" />
                    </fieldset>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" id="email" placeholder="E-mail" required="" class="contact-field" />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" id="message" placeholder="Your Message" required="" class="contact-field"></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="main-button">Send It</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    );
  }
}

export default ContactPage;
