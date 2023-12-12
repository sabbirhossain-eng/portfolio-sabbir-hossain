import javaScript from "./../../assets/Skills/js.png";
import react from "./../../assets/Skills/react.png";
import tailwind from "./../../assets/Skills/tailwind-css..png";
import firebase from "./../../assets/Skills/firebase.png";
import html from "./../../assets/Skills/html-5.png";
import css from "./../../assets/Skills/css-3.png";
import node_js from "./../../assets/Skills/node-js.png";
import express from "./../../assets/Skills/express.png";
import mongoDB from "./../../assets/Skills/mongodb.png";
const SkillsCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-4 mx-auto">
      {/* skills 1 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={javaScript} alt="JavaScript" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
              JavaScript
            </h3>
          </div>
        </div>
      </div>
      {/* skill 2 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={react} alt="React.js" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
              React.js
            </h3>
          </div>
        </div>
      </div>
      {/* skill 3 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={tailwind} alt="Tailwind CSS" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
              Tailwind CSS
            </h3>
          </div>
        </div>
      </div>
      {/* skill 4 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img
              src={firebase}
              alt="Firebase Authentication"
              className="w-1/3"
            />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
              Firebase Authentication
            </h3>
          </div>
        </div>
      </div>
      {/* skill 5 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={html} alt="HTML-5" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
            HTML-5
            </h3>
          </div>
        </div>
      </div>
      {/* skill 6 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={css} alt="CSS" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
              CSS
            </h3>
          </div>
        </div>
      </div>
      {/* skill 7 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={node_js} alt="Node.js" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
            Node.js
            </h3>
          </div>
        </div>
      </div>
      {/* skill 8 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={express} alt="Express.js" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
              Express.js
            </h3>
          </div>
        </div>
      </div>
      {/* skill 9 */}
      <div className="card w-full bg-neutral text-neutral-content hover:border hover:border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex justify-between items-center">
            <img src={mongoDB} alt="MongoDB" className="w-1/3" />
            <h3 className="ml-4 w-1/2 font-semibold font-sans text-2xl">
              MongoDB
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
