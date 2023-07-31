import React from "react";
import data from "./../data/data.json";
import Form from "../components/Form/Form";

const ContactMe = () => {
  const { ContactMe } = data;
  return (
    <div className="flex flex-col w-11/12 content-center m-auto mt-10">
      <h2>Contact me</h2>
      <div className="flex sm:flex-row flex-col w-9/12 content-center m-auto shadow-footer gap-20 px-10 py-5 sm:px-20 sm:py-10 ">
        <div className="flex flex-col sm:w-2/4 w-full">
          <h3 className="text-2xl mb-10">{ContactMe.title}</h3>
          <p>{ContactMe.body}</p>
        </div>
        <div className="sm:w-2/4 w-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
