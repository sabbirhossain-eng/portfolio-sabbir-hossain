import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contract = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q8mof3n",
        "template_wb6dpg9",
        form.current,
        "IDW39yIQ1UZTsNFAr"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            form.current.reset();
            toast.success("Email send Successfully");
            navigate('/')
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#c9f31d] font-sans">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Want to give me feedback that will change my future?
          <br /> 
          Want to work with me in keeping with new technology?
          <br />
          Then get in touch or send your feedback.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-[#c9f31d] dark:text-[#c9f31d]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="shadow-sm bg-gray-50 border border-[#c9f31d] text-black text-sm rounded-lg block w-full p-2.5"
              placeholder="Sabbir Hossain"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-[#c9f31d] dark:text-[#c9f31d]">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-[#c9f31d] text-black text-sm rounded-lg block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-[#c9f31d]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-[#c9f31d] shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-[#c9f31d] dark:text-gray-400">
              Your message
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-[#c9f31d]"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <input
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-[#c9f31d]"
            value="Send message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contract;
