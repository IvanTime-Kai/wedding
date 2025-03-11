"use client";

import React from "react";

import { useState } from "react";
import FadeInSection from "./FadeInSection";

export function Form() {
  const [formData, setFormData] = useState({
    attending: "yes",
    fullName: "",
    email: "",
    plusOne: false,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    }
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      attending: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-20 bg-[#FBF8EF]">
      <FadeInSection>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center gap-7">
              <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-[3px] w-fit ">
                <p className="font-montserrat text-base font-light text-brown-800 leading-5">
                  Join Us for the Big Day!
                </p>
              </div>

              <h2 className="font-bodoni text-[40px] leading-[48px] font-bold text-brown-800 ">
                RSVP NOW
              </h2>

              <p className="text-[#906447] text-center max-w-2xl font-montserrat leading-relaxed text-base font-light">
                We cannot wait to celebrate with you! Be a part of our love
                story as <br />
                we step into the next chapter. RSVP by April 30, 2025, to
                confirm <br />
                your attendance and help us plan for the best day ever.
              </p>
            </div>

            {submitted ? (
              <div className="text-center p-8 border border-[#906447] rounded w-full">
                <h3 className="text-2xl font-serif text-[#906447] mb-4">
                  Thank You!
                </h3>
                <p className="text-[#906447]">
                  Your RSVP has been submitted. We look forward to celebrating
                  with you!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full border border-[#906447] p-8 md:p-[60px]"
              >
                <div className="mb-7">
                  <p className="text-[#906447] mb-6 text-center font-montserrat text-base font-light leading-6">
                    Are you attending? <span className="text-[#906447]">*</span>
                  </p>

                  <div className="flex justify-center gap-16">
                    <label className="flex items-center gap-2 cursor-pointer">
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
                              ? "border-[#906447]"
                              : "border-[#906447]"
                          }`}
                        >
                          {formData.attending === "yes" && (
                            <div className="absolute inset-1 rounded-full bg-[#906447]"></div>
                          )}
                        </div>
                      </div>
                      <span className="text-[#906447] font-montserrat text-base font-light leading-6">
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
                              ? "border-[#906447]"
                              : "border-[#906447]"
                          }`}
                        >
                          {formData.attending === "no" && (
                            <div className="absolute inset-1 rounded-full bg-[#906447]"></div>
                          )}
                        </div>
                      </div>
                      <span className="text-[#906447] font-montserrat text-base font-light leading-6">
                        Sadly, I can&apos;t go
                      </span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-7">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[#906447] font-montserrat text-base font-light leading-6"
                    >
                      Full name <span className="text-[#906447]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-[#906447] bg-transparent py-2 focus:outline-none text-[#906447]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#906447] font-montserrat text-base font-light leading-6"
                    >
                      Email <span className="text-[#906447]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-[#906447] bg-transparent py-2 focus:outline-none text-[#906447]"
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="plusOne"
                        checked={formData.plusOne}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border ${
                          formData.plusOne
                            ? "border-[#906447] bg-[#906447]"
                            : "border-[#906447]"
                        } flex items-center justify-center`}
                      >
                        {formData.plusOne && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-[#906447] font-montserrat text-base font-light leading-6">
                      Please select if you&apos;ll have a plus one{" "}
                      <span className="text-[#906447]">*</span>
                    </span>
                  </label>
                </div>

                <div className="mb-7">
                  <label
                    htmlFor="message"
                    className="block text-[#906447] font-montserrat text-base font-light leading-6"
                  >
                    Leave us a message...
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={1}
                    className="w-full border-b border-[#906447] bg-transparent py-2 focus:outline-none text-[#906447] resize-none"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#906447] text-white px-5 py-2 hover:bg-[#7a5d45] transition-colors duration-300 rounded-sm font-montserrat text-base font-light leading-6"
                  >
                    Submit
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
