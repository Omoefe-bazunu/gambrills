"use client";

import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white text-primary-blue py-20">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14"
        style={{ paddingTop: "100px" }}
      >
        <h2 className="text-3xl font-bold text-secondary-blue text-center mb-12">
          Contact Us
        </h2>
        <p className="mt-4 text-center max-w-2xl mx-auto font-light text-sm sm:text-lg ">
          We’d love to hear from you. Whether you’re exploring consulting
          services, seeking tailored technology solutions, or looking to
          collaborate — let’s start a conversation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-6">
          <div className="bg-gray-50 text-primary-blue p-6 rounded-lg text-center w-full sm:w-1/3">
            <svg
              className="mx-auto h-8 w-8 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-semibold">Email</h3>
            <p className="mt-1 text-sm">info@gambrillspartners.com</p>
          </div>
          <div className="bg-gray-50 text-primary-blue p-6 rounded-lg text-center w-full sm:w-1/3">
            <svg
              className="mx-auto h-8 w-8 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-semibold">Phone</h3>
            <p className="mt-1 text-sm">
              (Insert U.S. & international numbers)
            </p>
          </div>
          <div className="bg-gray-50 text-primary-blue p-6 rounded-lg text-center w-full sm:w-1/3">
            <svg
              className="mx-auto h-8 w-8 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-semibold">Addresses</h3>
            <p className="mt-1 text-sm">United States (Registered Office)</p>
            <p className="mt-1 text-sm">Nigeria (Operational Contact)</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-8 text-center mb-8">
          <div className="text-lg flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <p>Social Media:</p>
            <div>
              <a href="#" className=" hover:text-orange-500">
                LinkedIn
              </a>{" "}
              |{" "}
              <a href="#" className=" hover:text-orange-500">
                X
              </a>{" "}
              |{" "}
              <a href="#" className=" hover:text-orange-500">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <hr className="w-full h-0.5 bg-gray-100 mb-8" />
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-blue">
            Book a Consultation Now
          </h2>
          <form className="mt-8 max-w-xl mx-auto p-6">
            <div className="mb-4 font-secondary">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-sm p-4 bg-gray-50 rounded-lg"
              />
            </div>
            <div className="mb-4 font-secondary">
              <input
                type="email"
                placeholder="Email address"
                className="w-full text-sm p-4 bg-gray-50 rounded-lg"
              />
            </div>
            <div className="mb-4 font-secondary">
              <input
                type="text"
                placeholder="Subject"
                className="w-full text-sm p-4 bg-gray-50 rounded-lg"
              />
            </div>
            <div className="mb-4 font-secondary">
              <textarea
                placeholder="Type your message..."
                className="w-full text-sm p-4 rounded-lg h-24 bg-gray-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-lg mx-auto  flex gap-2 items-center rounded-full text-white px-4 py-2 hover:bg-[#00042f] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
