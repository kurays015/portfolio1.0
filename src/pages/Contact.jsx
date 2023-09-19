import { useRef, useState } from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [messageSent, setMessageSent] = useState("");
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6wxmbrw",
        "template_e800nav",
        form.current,
        "QUBpICwU-3PLuzdNM"
      )
      .then(
        result => {
          console.log(result);
          setMessageSent("Successfully Sent!");
          setTimeout(() => setMessageSent(""), 3000);
        },
        error => {
          console.log(error);
          setMessageSent("Failed");
          setTimeout(() => setMessageSent(""), 3000);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="py-16 max-w-lg mx-auto">
        <h1 className=" text-gray-300 font-semibold text-4xl my-5 text-center">
          Get in touch
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline max-h-200px"
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-slate-700 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        <p
          className={`${
            messageSent === "Successfully Sent!"
              ? "text-green-500"
              : "text-red-500"
          } text-center`}
        >
          {messageSent}
        </p>
      </div>
      <Footer isAbsolute={true} />
    </>
  );
};

export default Contact;
