import img from "./../assets/Experience/experience.png";

const Experience = () => {
  return (
    <div className="font-sans">
      <div className="flex  flex-col lg:flex-row mt-10">
        <img src={img} alt="" className="w-1/2 mx-auto" data-aos="fade-up" data-aos-duration="3000"/>
        <div className="md:ml-10">
          <h2 className="text-4xl font-semibold text-left" data-aos="fade-up" data-aos-duration="3000">My Experience</h2>
          <p className="text-blue-gray-200 text-lg mt-2 text-justify" data-aos="fade-up" data-aos-duration="3000">
            My journey began with a fervent curiosity for the intricacies of
            coding and a commitment to staying ahead of the technological curve.
            Over the years, I have not only mastered the fundamental languages
            of the web—HTML, CSS, and JavaScript—but also delved into
            cutting-edge frameworks and libraries that elevate user interfaces
            to new heights.
          </p>
          <div className="overflow-x-auto mt-10">
          <hr className="bg-[#c9f31d]  p-[0.5px] my-2" data-aos="fade-up" data-aos-duration="3000"/>
            <div className="flex justify-between mx-auto py-10" data-aos="fade-up" data-aos-duration="3000">
                <p className="font-semibold text-lg text-[#c9f31d]">in 2023</p>
                <p className="font-semibold text-2xl mr-4">JavaScript</p>
            </div>
          <hr className="bg-[#c9f31d]  p-[0.5px] my-2" data-aos="fade-up" data-aos-duration="3000"/>
            <div className="flex justify-between mx-auto py-10" data-aos="fade-up" data-aos-duration="3000">
                <p className="font-semibold text-lg text-[#c9f31d]">in 2023</p>
                <p className="font-semibold text-2xl mr-4">React.js</p>
            </div>
          <hr className="bg-[#c9f31d]  p-[0.5px] my-2" data-aos="fade-up" data-aos-duration="3000"/>
            <div className="flex justify-between mx-auto py-10" data-aos="fade-up" data-aos-duration="3000">
                <p className="font-semibold text-lg text-[#c9f31d]">in 2023</p>
                <p className="font-semibold text-2xl mr-4">Tailwind CSS</p>
            </div>
            <hr className="bg-[#c9f31d] p-[0.5px] my-2" data-aos="fade-up" data-aos-duration="3000"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
