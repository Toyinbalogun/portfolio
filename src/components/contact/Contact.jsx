import "./contact.css";
// import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
// import Resume from "../../img/docR.png";
import git from "../../img/git.png";
import Address from "../../img/adrs.png";
// import Doc from "../../files/doc.pdf";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Audio } from 'react-loader-spinner'

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    emailjs
      .sendForm(
        "service_5j79nmv",
        "template_k85qn34",
        formRef.current,
        "user_ADsF03GdDfYkoaPCa2Gkh"
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

  console.log(done)
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's get in touch...</h1>
          <div className="c-info">
            {/* <div className="c-info-item">
              <img src={Phone} alt="phone-img" className="c-icon" />
              +1 613 700 9969
            </div> */}
            <div className="c-info-item">
              <img src={Email} alt="email-img" className="c-icon" />
              Toyinbalogun@cmail.carleton.ca
            </div>
            <div className="c-info-item">
              <a
                href="https://github.com/Toyinbalogun"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <img src={git} alt="github-img" className="c-icon" />
                Toyinbalogun
              </a>
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
            <div className="c-info-item">
              <img src={Address} alt="address-img" className="c-icon" />
              Ottawa, Canada
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Need to get in touch?</b> Let's connect! Send an email to the email address listed or fill out the form below.
          </p>
          <form ref={formRef} >
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="text" placeholder="Subject" name="user_subject" required/>
            <input type="text" placeholder="Email" name="user_email" required/>
            <textarea rows="5" placeholder="Message" name="message" required/>
            <button onClick={handleSubmit}>Submit</button>
            
            {done && " Message Sent! I will be getting back to you shortly!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
