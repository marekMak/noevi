"use client";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Odoslané ✅");
      form.reset();
    } else {
      setStatus("Chyba pri odoslaní ❌");
    }
  };

  return (
    <div className="w-full min-h-fit pb-10 px-10 flex flex-col gap-2 items-center">
      <h2 className="text-3xl text-white font-semibold">Contact us</h2>
      <p className="text-white max-w-[80%] font-light text-justify">
        Satisfied conveying a dependent contented he gentleman agreeable do be.
        Warrant private blushes removed an in equally totally if. Delivered
        dejection necessary objection do Mr prevailed.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-[80%] mt-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block  tracking-wide text-white text-sm font-semibold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-50"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block  tracking-wide text-white text-sm font-semibold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="text"
              placeholder="jane@noevi.au"
              name="email"
            />
          </div>
        </div>
        <div className="pb-6">
          <label
            className="block  tracking-wide text-white text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Few words..."
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows={5}
            name="message"
          />
        </div>
        <button className="border-[1px] border-white text-white delay-150 transition-colors hover:bg-purple hover:border-purple text-uppercase w-full px-4 py-2 rounded cursor-pointer">
          Send your message
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
