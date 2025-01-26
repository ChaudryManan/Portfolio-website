import React, { useState } from 'react'; 
import gmail from "./image/gmail.png";
import location from "./image/location.png";
import phone from "./image/phone.png";
import { NavLink } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Here's my message: ${message}`;

    const whatsappUrl = `https://wa.me/923257794401?text=${encodeURIComponent(whatsappMessage)}`;
  setName("")
  setEmail("")
  setMessage("")

    // Open WhatsApp link in a new tab to send the message
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-h-full mt-16">
      <h1 className="text-center md:text-5xl text-4xl font-serif md:mr-20">Get in Touch</h1>
      <div className="w-[90%] mx-auto md:flex mt-16">
        <div className="md:ml-16 md:w-[40%] flex flex-col gap-3">
          <h1 className="md:text-5xl text-4xl font-serif bg-contact-gradient text-transparent bg-clip-text">Let's talk</h1>
          <p className="text-lg w-[100%] mt-5">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          {/* gmail */}
          <div className="flex gap-3 items-center -mb-2">
            <span>
              <img className="w-10" src={gmail} alt="Gmail Icon" />
            </span>
            <span>
              <a
                href="mailto:manankhn81@gmail.com?subject=Hello&body=Hi, I want to connect with you."
                className="hover:underline"
              >
                manankhn81@gmail.com
              </a>
            </span>
          </div>
          {/* phone number */}
          <div className="flex gap-3 -mb-2 items-center">
            <span>
              <img className="w-12" src={phone} alt="Phone Icon" />
            </span>
            <span>
              <a href="tel:+923257794401" className="hover:underline">
                03257794401
              </a>
            </span>
          </div>
          {/* location */}
          <div className="flex gap-3 items-center">
            <span>
              <img className="w-10" src={location} alt="Location Icon" />
            </span>
            <span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kot+Mithan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Kot Mithan
              </a>
            </span>
          </div>
        </div>
        {/* Form */}
        <div className="md:ml-12 md:w-[60%] relative mt-10 md:mt-0">
          <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-xl">
              Your Name
            </label>
            <input
            required
              id="name"
              className="p-4 outline-none rounded-sm bg-custom-gray md:w-[60%]  placeholder-white hover:border"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="text-xl">
              Your Email
            </label>
            <input
            required
              id="email"
              className="p-4 outline-none rounded-sm bg-custom-gray md:w-[60%] placeholder-white hover:border"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message" className="text-xl">
              Your Message:
            </label>
            <textarea
            required
              id="message"
              className="p-3 outline-none rounded-sm bg-custom-gray w-full md:h-48 h-28 resize-none placeholder-white hover:border"
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
            
              type="submit"
              className="mt-4 md:absolute top-[450px] bg-custom-gradient rounded-xl p-4     w-48  mb-2"
            >
              submit your message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
