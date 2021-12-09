import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.prevenDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's get in touch...</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone-img" className="c-icon" />
              +1 613 700 9969
            </div>
            <div className="c-info-item">
              <img src={Email} alt="email-img" className="c-icon" />
              Toyinbalogun@cmail.carleton.ca
            </div>
            <div className="c-info-item">
              <a
                href="https://www.linkedin.com/in/toyin-oluwatoyin-balogun-5b5a1a177/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <img src={LinkedIn} alt="linkedin-img" className="c-icon" />
                Toyin Balogun
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
