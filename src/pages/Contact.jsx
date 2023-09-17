import { useRef } from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
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
              for="subject"
            >
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-semibold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
      </div>
      <Footer isAbsolute={true} />
    </>
  );
};

export default Contact;
