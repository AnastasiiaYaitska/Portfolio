import React from "react";
import data from "./../data/data.json";
import Form from "../components/Form/Form";

const ContactMe = () => {
  const { ContactMe } = data;
  return (
    <div className="flex flex-col w-11/12 content-center m-auto mt-10">
      <h2>Contact me</h2>
      <div className="flex flex-row w-9/12 content-center m-auto px-20 py-10 shadow-footer gap-20">
        <div className="flex flex-col w-2/4">
          <h3 className="text-2xl mb-10">{ContactMe.title}</h3>
          <p>{ContactMe.body}</p>
        </div>
        <div className="w-2/4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
