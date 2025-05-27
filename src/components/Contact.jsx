import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};
  if (!form.name.trim()) newErrors.name = "Name is required.";
  if (!form.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Invalid email format.";
  }
  if (!form.message.trim()) newErrors.message = "Message is required.";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});
  setLoading(true);

  emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Kanishk Singh",
        from_email: form.email,
        to_email: "singhkanishk1107@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSuccessMessage("✅ Thank you! I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      setSuccessMessage("❌ Something went wrong. Please try again.");

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    });
};


  return (
    <div className='mt-10 xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 w-full px-4 sm:px-8'>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full xl:flex-[1.25] bg-black-100 p-6 md:p-8 xl:p-10 rounded-2xl'
      >
        <div className="text-center">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {successMessage && (
          <p className='text-center text-white font-medium mt-4'>{successMessage}</p>
        )}

      </motion.div>


    </div>
  );
};

export default SectionWrapper(Contact, "contact");
