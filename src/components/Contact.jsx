import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.scss";
import {earth} from "../assets";

const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


// const handleSubmit = async (event) => {
//   event.preventDefault();
//   setLoading(true);

//   try {
//     const formData = new FormData(event.target);
//     formData.append("access_key", "5f5b91cf-2fc6-4dc3-9cd2-dc8838e33f09");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: json,
//     });

//     const data = await res.json();

//     if (res.ok && data.success) {
//       alert("Thank you. I will get back to you as soon as possible.");
//       setForm({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } else {
//       console.error("Error:", data);
//       alert("Ahh, something went wrong. Please try again.");
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//     alert("Ahh, something went wrong. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Thank you. Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      console.log("Backend error:", data);
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Frontend error:", error);
    alert("Oops! Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div
      className={`xl:mt-12 flex gap-2 overflow-hidden contact`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] xl:h-auto md:h-[600px] h-[400px] earth'
      >
        {/* <EarthCanvas /> */}
        <img src={earth} alt="" />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.5] bg-black-100 p-8 rounded-2xl earth'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-3 flex flex-col gap-8 form1'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>

          
          <button
            type='submit'
            className='bg-tertiary py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-5 contact__options">
          <article className="contact__option">
            <MdEmail />
            <a href="mailto:harshkumar090904@gmail.com" target="_blank" className="blue-text-gradient">HOF@gmail.com</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <a href="#" target="_blank" className="blue-text-gradient">
              +91 9773745306
            </a>
          </article>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");