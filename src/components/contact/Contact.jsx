import { useState } from "react";
import "./contact.scss";
import { Person, Mail } from "@material-ui/icons";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_lSx75lFeqydXSLLcRBYTp");

export default function Contact() {
  // const [message, setMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'default_template', e.target, 'user_lSx75lFeqydXSLLcRBYTp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h1>How Can I Help?</h1>

        <div className="itemContainer">
            <Person className="icon" />
            <span>+1 (502) 718-0400</span>
          </div>
          <br/>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>render1.jonathan@gmail.com</span>
          </div>



        {/* <form onSubmit={sendEmail}>
         <input type="subject" placeholder="Subject" name="subject" />
         <input type="subject" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
        </form> */}


      </div>
    </div>
  );
}
