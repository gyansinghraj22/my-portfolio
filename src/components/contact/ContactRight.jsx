import React, { useState } from "react";
// import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from 'emailjs-com';
const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is Required!");
    } else if (phone === "") {
      setErrMsg("Please provide your phone number!");
    } else if (email === "") {
      setErrMsg("Please provide your email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please input a valid email!");
    } else if (subject === "") {
      setErrMsg("Please provide a subject!");
    } else if (message === "") {
      setErrMsg("Message is Required!");
    } else {


      emailjs.send('service_kgi17hb', 'template_1butmwa', {
        name: username,
        email: email,
        subject: subject,
        message: message,
      }, 'nOiv-IC7uj09UbK48')
      .then((response) => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('An error occurred while sending the email.');
      });
      // setSuccessMsg("Your message was sent successfully!");
      setErrMsg("");
      setUsername("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username, email, message, phone, subject);
    }
  };

  return (
    <div className="w-full">
    <form >
      {errMsg && <p className="text-center text-red-400">{errMsg}</p>}
      {successMsg && <p className="text-center text-green-400">{successMsg}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="username" className="text-sm text-gray-400 uppercase tracking-wide">
            Your Name
          </label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`contactInput ${errMsg === "Username is Required!" && "border-red-500"}`}
            type="text"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="phone" className="text-sm text-gray-400 uppercase tracking-wide">
            Phone Number
          </label>
          <input
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className={`contactInput ${errMsg === "Please provide your phone number!" && "border-red-500"}`}
            type="tel"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div className="pt-4">
        <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wide">
          Email
        </label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`contactInput ${errMsg === "Please provide your email!" || errMsg === "Please input a valid email!" ? "border-red-500" : ""}`}
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="pt-4">
        <label htmlFor="subject" className="text-sm text-gray-400 uppercase tracking-wide">
          Subject
        </label>
        <input
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          className="contactInput"
          type="text"
          placeholder="Subject"
        />
      </div>

      <div className="pt-4">
        <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="contactTextarea"
          rows="5"
          placeholder="Message"
        ></textarea>
      </div>

      <div className="pt-4">
        <button
          onClick={handleSend}
          className="w-full h-12 rounded-lg text-base border-b-gray-600 text-white hover:text-lightText hover:border-[1px] hover:border-designColor border-transparent duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
    </div>
  );
};

export default ContactRight;

