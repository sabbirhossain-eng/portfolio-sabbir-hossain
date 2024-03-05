import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import Animation from "../../Components/Animation/Animation";
import animate from "../../Components/Lottie/CntactMe.json";
import toast from "react-hot-toast";

const Contract = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q8mof3n",
        "template_kc2tzqj",
        form.current,
        "7pF2mfmqORFQyGUIQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            form.current.reset();
            toast.success("Email send Successfully", {
              style: {
                background: '#1b1c1d',
                color: '#F4F4F4',
              },
            });
            navigate("/");
          }
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <div className="my-10">
      <div className=" w-full mx-auto relative bg-card-dark rounded-3xl overflow-hidden" 
      data-aos="fade-up" data-aos-duration="3000"
      >
        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-primary"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-primary"></div>
        <div className="flex flex-col lg:flex-row items-center my-8 lg:my-0">
          <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center flex-1">
            <div>
              <h2 className="text-3xl text-primary font-bold">Contact Me</h2>
              <p
                className="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl text-justify"
              >
                Want to give me feedback that will change my future?
                <br />
                Want to work with me in keeping with new technology?
                <br />
                Then get in touch or send your feedback.
              </p>
            </div>

            <div
              className="w-[60%] mx-auto"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <Animation animate={animate} />
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}
          className="w-full flex-1 mb-8 lg:mb-0 text-black">
            <div className="max-w-sm mx-auto space-y-4">
              <div>
              <label className="text-in-dark">Your Name <span className="text-primary">*</span></label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm focus:outline-primary"
                required
              />
              </div>
              <div>
              <label className="text-in-dark">Your Email <span className="text-primary">*</span></label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm focus:outline-primary"
                required
              />
              </div>
              <div>
              <label className="text-in-dark">Subject <span className="text-primary">*</span></label>
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm focus:outline-primary"
                required
              />
              </div>
              <div>
              <label className="text-in-dark">Your Message <span className="text-primary">*</span></label>
              <textarea
              name="user_message"
                placeholder="Message"
                rows="6"
                className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 focus:outline-primary"
                required
              ></textarea>
              </div>
              <button
                type="submit"
                className="text-black w-full relative bg-primary hover:bg-transparent hover:text-primary hover:border  hover:border-primary font-semibold rounded-lg text-sm px-6 py-3 flex items-center justify-center gap-2 "
              >
                <span className="text-xl">
                  <IoIosSend />
                </span>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contract;
