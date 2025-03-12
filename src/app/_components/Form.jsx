"use client";

import React from "react";
import { useState } from "react";
import FadeInSection from "./FadeInSection";

const url =
  "https://script.google.com/macros/s/AKfycbyyu-OUOSRIJHHku1dDzc2bVG6pIDn5y_9zWxSTUGLspSqHkpY_-5Gx4mJz2FyrA7iKwA/exec";

export function Form() {
  const [formData, setFormData] = useState({
    attending: "yes",
    fullName: "",
    email: "",
    amount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({ fullName: "", email: "" });
  const [touched, setTouched] = useState({ fullName: false, email: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, e.target.value);
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      attending: value,
    });
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    if (name === "fullName" && !value.trim() && touched.fullName) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (name === "email" && !value.trim() && touched.email) {
      newErrors.email = "Please enter your email.";
    } else if (
      name === "email" &&
      !/^\S+@\S+\.\S+$/.test(value) &&
      touched.email
    ) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields on submit
    let newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // If there are errors, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ fullName: true, email: true }); // Mark fields as touched on submit
      return;
    }

    setIsLoading(true);

    // Prepare data for submission
    const data = fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${formData.fullName}&Email=${formData.email}&PlusOne=${formData.plusOne}&Message=${formData.message}&Attend=${formData.attending}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setIsLoading(false);
        setSubmitted(true);
      })
      .catch(() => {
        setIsLoading(false);
        alert("There was an error submitting your RSVP. Please try again.");
      });

    // Reset form data
    setFormData({
      attending: "yes",
      fullName: "",
      email: "",
      amount: "",
      message: "",
    });
  };

  return (
    <section id="rsvp" className="py-20 bg-[#FBF8EF]">
      <FadeInSection>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center gap-7">
              <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-[3px] w-fit">
                <p className="font-montserrat text-base font-semibold text-brown-800 leading-5">
                  Join Us for the Big Day!
                </p>
              </div>

              <h2 className="font-bodoni text-[40px] leading-[48px] font-bold text-brown-800">
                RSVP NOW
              </h2>

              <p className="text-brown-800 text-center max-w-2xl font-montserrat leading-relaxed text-base font-normal">
                We cannot wait to celebrate with you! Be a part of our love
                story as <br />
                we step into the next chapter. RSVP by <b>April 30, 2025</b> to
                confirm <br />
                your attendance and help us plan for the best day ever.
              </p>
            </div>

            {submitted ? (
              <div className="text-center p-8 border border-brown-800 rounded w-full">
                <h3 className="text-2xl font-bodoni font-semibold text-brown-800 mb-4">
                  Thank You!
                </h3>
                <p className="text-brown-800 font-montserrat text-base font-normal leading-6">
                  Your RSVP has been submitted. We look forward to celebrating
                  with you!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full border border-brown-800 p-8 md:p-[60px]"
              >
                <div className="mb-7">
                  <p className="text-brown-800 mb-6 text-center font-montserrat text-base font-normal leading-6">
                    Are you attending? <span className="text-brown-800">*</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-28 mb-[60px]">
                  <label className="flex items-center gap-2 cursor-pointer justify-end">
                    <div className="relative">
                      <input
                        type="radio"
                        name="attending"
                        checked={formData.attending === "yes"}
                        onChange={() => handleRadioChange("yes")}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border ${
                          formData.attending === "yes"
                            ? "border-brown-800"
                            : "border-brown-800"
                        }`}
                      >
                        {formData.attending === "yes" && (
                          <div className="absolute inset-1 rounded-full bg-brown-800"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-brown-800 font-montserrat text-base font-normal leading-6">
                      Yes, I&apos;ll be there
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="relative">
                      <input
                        type="radio"
                        name="attending"
                        checked={formData.attending === "no"}
                        onChange={() => handleRadioChange("no")}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border ${
                          formData.attending === "no"
                            ? "border-brown-800"
                            : "border-brown-800"
                        }`}
                      >
                        {formData.attending === "no" && (
                          <div className="absolute inset-1 rounded-full bg-brown-800"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-brown-800 font-montserrat text-base font-normal leading-6">
                      Sadly, I can&apos;t go
                    </span>
                  </label>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-brown-800 font-montserrat text-base font-normal leading-6"
                    >
                      Full name <span className="text-brown-800">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full border-b font-montserrat border-brown-800 bg-transparent py-2 focus:outline-none text-brown-800"
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="text-red-600 text-sm mt-1 font-montserrat font-normal">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-brown-800 font-montserrat text-base font-normal leading-6"
                    >
                      Email <span className="text-brown-800">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full border-b font-montserrat border-brown-800 bg-transparent py-2 focus:outline-none text-brown-800"
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-600 text-sm font-montserrat font-normal mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-brown-800 font-montserrat text-base font-normal leading-6"
                    >
                      How many will you be?
                    </label>
                    <input
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="number"
                      className="w-full border-b font-montserrat border-brown-800 bg-transparent py-2 focus:outline-none text-brown-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-brown-800 font-montserrat text-base font-normal leading-6"
                    >
                      Leave us a message...
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={1}
                      className="w-full border-b font-montserrat border-brown-800 bg-transparent py-2 focus:outline-none text-brown-800 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-brown-800 text-white px-5 py-2 rounded-sm font-montserrat text-base font-semibold leading-6 transition-colors duration-300 ${
                      isLoading
                        ? "bg-brown-400 cursor-not-allowed"
                        : "hover:bg-[#7a5d45]"
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
