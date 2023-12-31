import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const ProjectCard = ({img, title1, subTitle1, title2, p1, p2, p3, p4, p5, p6, liveLink, gitClient, gitServer}) => {
    return (
        <div className="flex justify-center mx-auto">
            <div className="card md:w-[80%] border border-[#c9f31d] shadow-xl image-full mx-auto">
          <figure data-aos="fade-up" data-aos-duration="3000">
            <img src={img} alt="Project"
            />
          </figure>
          <div className="card-body flex items-center mt-[20%]" data-aos="fade-up" data-aos-duration="3000">
            {/* card */}
            <div className="card w-full md:w-[60%] bg-neutral text-neutral-content">
              <div className="card-body">
                <h2 className="text-3xl font-semibold text-[#c9f31d] text-center" data-aos="fade-up" data-aos-duration="3000">
                  {title1}
                </h2>
                <p className="text-lg text-center" data-aos="fade-up" data-aos-duration="3000">{subTitle1}</p>
                <h2 className="text-3xl font-semibold text-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
                  {title2}
                </h2>
                <p className="text-lg " data-aos="fade-up" data-aos-duration="3000"><span className="inline-block text-[#c9f31d] mr-1"><GoDotFill/></span>{p1}</p>
                <p className="text-lg " data-aos="fade-up" data-aos-duration="3000"><span className="inline-block text-[#c9f31d] mr-1"><GoDotFill/></span>{p2}</p>
                {p3 &&<p className="text-lg " data-aos="fade-up" data-aos-duration="3000"><span className="inline-block text-[#c9f31d] mr-1"><GoDotFill/></span>{p3}</p>}
                {p4 &&<p className="text-lg " data-aos="fade-up" data-aos-duration="3000"><span className="inline-block text-[#c9f31d] mr-1"><GoDotFill/></span>{p4}</p>}
                {p5 &&<p className="text-lg " data-aos="fade-up" data-aos-duration="3000"><span className="inline-block text-[#c9f31d] mr-1"><GoDotFill/></span>{p5}</p>}
                {p6 &&<p className="text-lg " data-aos="fade-up" data-aos-duration="3000"><span className="inline-block text-[#c9f31d] mr-1"><GoDotFill/></span>{p6}</p>}
                
                <div className="card-actions justify-center mt-5">
                 <Link to={liveLink} target="_blank">
                 <button className="btn btn-sm bg-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">Live Link</button>
                 </Link>
                 <Link to={gitClient} target="_blank">
                  <button className="btn btn-sm bg-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">GitHub Client Side</button>
                  </Link>
                  <Link to={gitServer} target="_blank">
                  <button className="btn btn-sm bg-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">GitHub Server Side</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ProjectCard;