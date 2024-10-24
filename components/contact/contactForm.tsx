"use client";

import React, { FormEvent, useState } from "react";

export type FormState = {
  name: string;
  email: string;
  topic: string;
};

function ContactForm() {
  const initState = { name: "", email: "", topic: "" };
  const [{ name, email, topic }, setForm] = useState(initState);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, topic } = e.target as HTMLFormElement & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      topic: HTMLInputElement;
    };
  };
  return (
    <form
      id="contact-form"
      name="contact-form"
      onSubmit={handleSubmit}
      className="flex flex-col border-bot"
    >
      <input
        value={name}
        onChange={({ target }) =>
          setForm((p) => ({ ...p, [target.name]: [target.value] }))
        }
        className="rounded-md py-1 px-3 border-2 outline-none border-none w-full bg-primary-2/10 valid:bg-primary-2/10 mb-4"
        type="text"
        id="name"
        name="name"
        placeholder="fullname"
        required
        autoComplete="name"
      />

      <input
        value={email}
        onChange={({ target }) =>
          setForm((p) => ({ ...p, [target.name]: [target.value] }))
        }
        className="rounded-md py-1 px-3 border-2 outline-none border-none w-full bg-primary-2/10 valid:bg-primary-2/10 mb-4"
        type="email"
        id="email"
        name="email"
        placeholder="email"
        required
        autoComplete="email"
      />
      <input
        value={topic}
        onChange={({ target }) =>
          setForm((p) => ({ ...p, [target.name]: [target.value] }))
        }
        className="rounded-md py-1 px-3 border-2 outline-none border-none w-full bg-primary-2/10 valid:bg-primary-2/10 mb-4"
        type="text"
        name="topic"
        id="topic"
        placeholder="topic"
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
