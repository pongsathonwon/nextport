import React from "react";

function ContactForm() {
  return (
    <form id="contact-form" className="flex flex-col border-bot">
      <input
        className="rounded-md py-1 px-3 border-2 outline-none border-none w-full bg-primary-2/10 valid:bg-primary-2/10 mb-4"
        type="text"
        id="name"
        placeholder="fullname"
        required
        autoComplete="name"
      />

      <input
        className="rounded-md py-1 px-3 border-2 outline-none border-none w-full bg-primary-2/10 valid:bg-primary-2/10 mb-4"
        type="email"
        id="email"
        placeholder="email"
        required
        autoComplete="email"
      />
      <input
        className="rounded-md py-1 px-3 border-2 outline-none border-none w-full bg-primary-2/10 valid:bg-primary-2/10 mb-4"
        type="text"
        id="topic"
        placeholder="project topic"
      />

      <button
        type="submit"
        className="uppercase rounded-md bg-primary-1 w-full h-9 py-1 text-white my-3 mt-4 md:mt-8"
      >
        send
      </button>
    </form>
  );
}

export default ContactForm;
