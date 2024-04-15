"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { FiPhone } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

const ContactUs = () => {
  const [capVal, setCapVal] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const form = useRef();
  const validateForm = () => {
    const errors = {}; // create variable that is going to be setted on the final state
    if (!form.current.from_name.value.trim()) {
      errors.name = "Name is required";
    }
    if (!form.current.from_email.value.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        form.current.from_email.value
      )
    ) {
      errors.email = "Invalid email address";
    }
    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_xtib35q",
          "template_p5evi2b",
          form.current,
          "jKhHRvLAf0qlKkpTY"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email has been sent successfully!");
          },
          (error) => {
            console.log(error.text);
            e.target.reset();
            alert("Email has not been sent, try later!");
          }
        );
    }
  };
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h3 className="max-w-xl text-2xl font-bold">
              We look forward to hearing from you!
            </h3>

            <div className="mt-8 ">
              <div className="flex gap-2 items-center">
                <FiPhone className="text-pink-600 mr-2" size={"20"} />
                <a href="#" className="text-2xl font-bold text-pink-600">
                  2120 463 5808{" "}
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <HiLocationMarker className="mr-2" size={"20"} />

                <address className="mt-2 not-italic">
                  Casablanca, Morocco
                </address>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              action="#"
              className="space-y-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <div>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  name="from_name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="Your Email address"
                    type="email"
                    id="email"
                    name="from_email"
                    required
                  />
                </div>

                <div>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="Phone Number (optional)"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <ReCAPTCHA
                className="mt-4"
                sitekey="6LdPIGYpAAAAANyGRqhinsJe99Y46YzdAoE7DSdK"
                onChange={(val) => setCapVal(val)}
              />
              <div className="mt-4">
                <button
                  disabled={!capVal}
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
