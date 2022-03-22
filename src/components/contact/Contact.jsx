import { useState , useRef} from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q03yyf6', 'template_1lu3kco', form.current, '8LkJsFVMHEtIwsQk2')
      .then((result) => {
          console.log(result.text);
          setMessage(true);
      }, (error) => {
          console.log('error',error.text);
      });
      e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Enter Your Email" name="from_name"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
