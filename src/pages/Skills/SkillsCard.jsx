import javaScript from "./../../assets/Skills/js.png";
import react from "./../../assets/Skills/react.png";
import tailwind from "./../../assets/Skills/tailwind-css..png";
import firebase from "./../../assets/Skills/firebase.png";
import html from "./../../assets/Skills/html-5.png";
import css from "./../../assets/Skills/css-3.png";
import node_js from "./../../assets/Skills/node-js.png";
import express from "./../../assets/Skills/express.png";
import mongoDB from "./../../assets/Skills/mongodb.png";
import redux from "../../assets/Skills/redux.png";
import mongoosejs from "../../assets/Skills/mongoosejs.jpg";

const SkillsCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-4 mx-auto">
      {/* skills 1 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={javaScript} alt="JavaScript" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              JavaScript
            </h3>
          </div>
        </div>
      </div>
      {/* skill 2 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={react} alt="React.js" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              React.js
            </h3>
          </div>
        </div>
      </div>
      {/* skill 3 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={tailwind} alt="Tailwind CSS" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              Tailwind CSS
            </h3>
          </div>
        </div>
      </div>
      {/* skill 4 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img
              src={firebase}
              alt="Firebase Authentication"
              className="w-1/3"
            />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              Firebase Authentication
            </h3>
          </div>
        </div>
      </div>
      {/* skill 5 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={html} alt="HTML-5" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
            HTML-5
            </h3>
          </div>
        </div>
      </div>
      {/* skill 6 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={css} alt="CSS" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              CSS
            </h3>
          </div>
        </div>
      </div>
      {/* skill 7 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={node_js} alt="Node.js" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
            Node.js
            </h3>
          </div>
        </div>
      </div>
      {/* skill 8 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={express} alt="Express.js" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              Express.js
            </h3>
          </div>
        </div>
      </div>
      {/* skill 9 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={mongoDB} alt="MongoDB" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              MongoDB
            </h3>
          </div>
        </div>
      </div>
      {/* skill 10 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={redux} alt="Redux" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              Redux
            </h3>
          </div>
        </div>
      </div>
      {/* skill 11 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={mongoosejs} alt="Mongoosejs" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold font-sans text-2xl text-center">
              Mongoosejs
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
