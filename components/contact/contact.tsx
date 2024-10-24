import React from "react";
import ContactForm from "./contactForm";

function Contact() {
  return (
    <section id="contact" className="content">
      <h2 className="h-break">contact</h2>
      <div className="flex-res gap-large">
        {/* <!--contact info--> */}
        <div className="content-ctrl flex-1 bg-primary-2/10 rounded-md mx-4">
          <h2 className="font-medium">pongsathon wongondee</h2>
          <div>
            {/* <!--location--> */}
            <p>
              <i className="fa-solid fa-location-dot w-5"></i> Bangkok, Thailand
            </p>
            {/* <!--mail to--> */}
            <a href="mailto:pongsathonwongondee@gmail.com">
              <p className="text-balance">
                <i className="fa-solid fa-envelope w-5"></i>
                pongsathonwongondee@gmail.com
              </p>
            </a>
          </div>
          {/* 
      <!--social media--> */}
          <div className="social-media">
            <a href="https://github.com/pongsathonwon" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pongsathon-wongondee-6870712b7/?trk=opento_sprofile_details"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        {/* <!--form--> */}
        <div className="flex-1 content-ctrl-x">
          <h3>get in touch</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
