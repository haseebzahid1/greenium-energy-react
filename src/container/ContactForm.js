import React from 'react'
import '../components/sass/contact.scss'



const ContactForm = () => {
  return (
    <div class="contact">
    <div class="contact__contact-container">

        <div class="contact_contact-header">
            <h3 class="contact__contact-h3">contact us</h3>
            <span class="contact_contact-line"></span>
        </div>

        <div class="contact_contact-row">
            <div class="contact_contact-col-7">
                <p class="contact_contact-des">
                    Have a question or comment? Use the form below to send us a message.
                </p>

                <form action="#.">
                    <div class="contact_contact-form">
                        <div class="contact_contact-group">
                            <label for="name" class="contact_contact-label">Your Name</label>
                            <input type="text" name="" id="name" class="contact_contact-input" />
                        </div>
                    </div>

                    <div class="contact_contact-form">
                        <div class="contact_contact-group">
                            <label for="phone" class="contact_contact-label">Your Phone</label>
                            <input type="text" name="" id="phone" class="contact_contact-input" required />
                        </div>
                    </div>

                    <div class="contact_contact-form">
                        <div class="contact_contact-group">
                            <label for="email" class="contact_contact-label">Your Email</label>
                            <input type="email" name="" id="email" class="contact_contact-input" />
                        </div>
                    </div>

                    <div class="contact_contact-form">
                        <div class="contact_contact-group contact_textarea">
                            <label for="textarea" class="contact_contact-label">Your Commit</label>
                           <textarea  id="textarea" rows="6"></textarea>
                        </div>
                    </div>

                    <button class="contact_contact-btn">Submit Contact</button>
                </form>
            </div>


            <div class="contact_contact-col-5">
                <div class="contact_location">

                    <div class="contact_location-group">
                        <span class="contact_contact-title">
                            <strong>Heading 1</strong>
                        </span>
                        <span class="contact_location-span">
                            Call us: 0800-77722 
                            <br />
                            Mobile: +92-303-7073021
                            <br />
                            Email:
                            <a href="#." class="contact_location-a">Info@greenlamenergy.com</a>
                        </span>
                    </div>

                    <div class="contact_location-group">
                        <span class="contact_contact-title">
                            <strong>Heading 2</strong>
                        </span>
                        <span class="contact_location-span">
                            P-130, Kohinoor City, Faisalabad.
                            <br />
                            Information: <a href="#." class="contact_location-a">Info@greenlamenergy.com</a>
                            <br / >
                            Email:
                            <a href="#." class="contact_location-a">Info@greenlamenergy.com</a>
                        </span>
                    </div>

                    <div class="contact_location-group">
                        <span class="contact_contact-title">
                            <strong>Heading 3</strong>
                        </span>
                        <span class="contact_location-span">
                            4-b Value Additon City, Faisalabad
                            <br />
                            Pakistan
                        </span>
                    </div>

                    
                    

                   


                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default ContactForm
