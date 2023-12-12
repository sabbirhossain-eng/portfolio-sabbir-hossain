import img from "../assets/Education/Education.png";

const Education = () => {
    return (
        <div className="font-sans">
        <div className="flex  flex-col lg:flex-row mt-10">
          <img src={img} alt="" className="w-1/2 mx-auto" data-aos="fade-up" data-aos-duration="3000"/>
          <div className="md:ml-10">
            <h2 className="text-4xl font-semibold text-left" data-aos="fade-up" data-aos-duration="3000">My Education</h2>
            <p className="text-blue-gray-200 text-lg" data-aos="fade-up" data-aos-duration="3000">
            Education is the foundation upon which my journey in knowledge and expertise is built. My academic pursuits reflect a commitment to excellence, curiosity, and a passion for lifelong learning. From the fundamental principles acquired during my early education to the specialized knowledge gained in higher studies, each academic milestone has contributed to my intellectual growth and shaped my professional identity. Explore my educational journey to understand the depth of my academic background and the diverse skills I have cultivated along the way.
            </p>
            <div className="overflow-x-auto mt-10">
            <hr className="bg-[#c9f31d]  p-[0.5px] my-2" data-aos="fade-up" data-aos-duration="3000"/>
              <div className="flex justify-between items-center mx-auto py-5" data-aos="fade-up" data-aos-duration="3000">
                  <p className="font-semibold text-lg text-[#c9f31d]"> 2023-Present</p>
                  <div>
                  <p className="font-semibold text-xl mr-4">B.Sc. in Computer Science & Engineering</p>
                  <p className="font-semibold text-lg text-blue-gray-200 mr-4 mt-2">European University of Bangladesh</p>
                  </div>
              </div>
            <hr className="bg-[#c9f31d]  p-[0.5px] my-2" data-aos="fade-up" data-aos-duration="3000"/>
              <div className="flex justify-between items-center mx-auto py-5" data-aos="fade-up" data-aos-duration="3000">
                  <p className="font-semibold text-lg text-[#c9f31d]"> 2018-2022</p>
                  <div>
                  <p className="font-semibold text-xl mr-4">Diploma-In-Telecommunication Technology</p>
                  <p className="font-semibold text-lg text-blue-gray-200 mr-4 mt-2">Dhaka, Bangladesh</p>
                  </div>
              </div>
            <hr className="bg-[#c9f31d]  p-[0.5px] my-2" data-aos="fade-up" data-aos-duration="3000"/>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Education;