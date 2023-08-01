"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const notify = (message: string, toastType: "success" | "error" | "info") => {
    return toast(message, {
      hideProgressBar: true,
      autoClose: 3000,
      type: `${toastType}`,
    });
  };

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name, email, message };
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(" HTPP error " + response.status);
      }
      const responseData = await response.json();
      notify(responseData.message, "success");
    } catch (error: any) {
      notify(
        "There was a problem with fetch operation," + error.message,
        "error"
      );
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form action="" className="" onSubmit={handlerSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="label-form">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-form "
          required
          minLength={2}
          maxLength={200}
          placeholder="Your name"
        />
      </div>
      {/* <div className="flex flex-col mb-4">
        <label htmlFor="company" className="label-form">
          Company
        </label>
        <input
          id="company"
          type="text"
          name="company"
          className="input-form "
          minLength={2}
          maxLength={200}
        />
      </div> */}
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="label-form">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-form "
          required
          minLength={2}
          maxLength={200}
          placeholder="Your email"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="message" className="label-form">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-form"
          required
          minLength={10}
          maxLength={1000}
          placeholder="Your message"
        />
      </div>
      <button type="submit" className="px-6 py-2 glow-on-hover">
        Send message
      </button>
    </form>
  );
};

export default Form;
