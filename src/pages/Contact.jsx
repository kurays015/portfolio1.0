import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="py-16 max-w-lg mx-auto">
        <h1 className=" text-gray-300 font-semibold text-4xl my-5 text-center">
          Get in touch
        </h1>
        <form class="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-white text-sm font-semibold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-white text-sm font-semibold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-white text-sm font-semibold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-slate-700 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
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
