import React from "react";
import ContactForm from "./contactForm";
import Icon from "../icon";

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
            <div className="flex items-center gap-4">
              <Icon size="small">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    fill="#7469B6"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
              </Icon>
              Bangkok, Thailand
            </div>
            {/* <!--mail to--> */}
            <a href="mailto:pongsathonwongondee@gmail.com">
              <div className="flex items-center gap-4">
                <Icon size="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#7469B6"
                      d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
                    />
                  </svg>
                </Icon>
                pongsathonwongondee@gmail.com
              </div>
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
