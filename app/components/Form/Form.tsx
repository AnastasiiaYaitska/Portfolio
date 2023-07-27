"use client";
import React from "react";

const Form = () => {
  const handlerSubmit = async () => {};

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
          className="input-form "
          required
          minLength={2}
          maxLength={200}
        />
      </div>
      <div className="flex flex-col mb-4">
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
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="label-form">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="input-form "
          required
          minLength={2}
          maxLength={200}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="message" className="label-form">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="input-form"
          required
          minLength={10}
          maxLength={1000}
        />
      </div>
      <button type="submit" className="px-6 py-2 glow-on-hover">
        Send message
      </button>
    </form>
  );
};

export default Form;
