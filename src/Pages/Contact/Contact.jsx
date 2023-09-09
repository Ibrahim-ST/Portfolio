/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const { register } = useForm();
  const sendEmail = (e) => {
    
    e.preventDefault(); 
    emailjs
      .sendForm(
        "service_8xmq0fn",
        "template_8bgskbj",
        form.current,
        "0A0i2fzPNsSCSDYpE"
      )
      .then(
        (result) => {
            alert("Message Sent Successfully.")
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="max-w-5xl mx-auto overflow-hidden" id="contact">
      <SectionTitle
        title="contact me"
        sub=" Let's collaborate and transform your ideas into reality. Reach out to me today and let's discuss how we can work together to build exceptional web experiences."
      ></SectionTitle>

      <div className="sm:flex mt-5 ">
        <div className="sm:w-2/5 flex flex-col  justify-center px-10 lg:px-0">
          <h3 data-aos="zoom-out-right">
            <span className="text-6xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Let's chat!
            </span>{" "}
            <br /> <span className="text-3xl">Tell me about your project.</span>{" "}
          </h3>
          <p data-aos="zoom-out-right" className="text-3xl">
            Let's create something together.
          </p>
          <div data-aos="zoom-out-right" className="my-8">
            <p className="flex items-center gap-2">
              {" "}
              <FaPhoneAlt /> <span>+8801836-406502</span>{" "}
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaEnvelope /> <span>ibrahim.siddiqueee@gmail.com</span>{" "}
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaMapMarkerAlt /> <span>Chittagong, Bangladesh.</span>{" "}
            </p>

            <div
              data-aos="zoom-out-right"
              className="flex gap-8 mt-4 "
            >
              <a href="https://www.facebook.com/ibrahim.siddiqueee">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-siddiqueee/">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/Ibrahim-ST">
                <FaGithub size={20} />
              </a>
              <a href="https://www.instagram.com/__witchfinder_general__/">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-3/5">
          <div className="w-full px-10">
            <form ref={form} onSubmit={sendEmail}>
              <div  data-aos="zoom-out-left" className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  {...register("name", { required: true, maxLength: 120 })}
                  className="input input-bordered w-full "
                />
              </div>

              <div  data-aos="zoom-out-left" className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                    maxLength: 120,
                  })}
                  required
                  name='email'
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full text-black"
                />
              </div>
              <div  data-aos="zoom-out-left" className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Subject</span>
                </label>
                <input
                  {...register("subject", {
                    required: true,
                    maxLength: 120,
                  })}
                  type="text"
                  required
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered w-full text-black"
                />
              </div>
              <div  data-aos="zoom-out-left" className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  {...register("message", {
                    required: true,
                    maxLength: 600,
                  })}
                  required
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full text-black h-24"
                />
              </div>

              <div  data-aos="zoom-out-left" className="text-center">
                <input
                  className="btn   bg-slate-100 border-0 border-b-4 border-l-4 border-[#ff5478] mb-4 mt-2 hover:border-4 hover:border-[#ff5478] transform transition-all duration-200"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
