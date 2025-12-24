
export default function Missionandvision() {
  return (
    <main className="min-h-screen container-padding section-block-padding">
      <div className="  relative mb-20 text-center">
        <h2 className="fl2 inline-block relative">
          Mission and Vision                   
           <span className="block absolute right-0  w-10 h-2 bg-[#49CF38]"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-10">

          {/* Mission */}
          <div className="bg-white shadow-[4px_4px_10px_3px_#00000026] p-8 md:p-17">
            <h3 className="fl3 mb-4 flex items-center gap-4">
              <span><img src="/mission/mission2.svg" alt="" /></span> Mission
            </h3>
            <p className="fl7">
              At CodeElan, we aim to empower businesses through innovative
              technology solutions that solve complex problems and drive
              digital transformation. By adopting an “Adopt-Build-Operate”
              approach, we deliver exceptional, scalable, and secure solutions
              tailored to each client’s unique journey. Our expertise in AI,
              computer vision, and automation enables us to create intelligent
              systems that enhance decision-making, optimize operations, and
              unlock new possibilities. Our commitment to excellence and
              continuous learning allows us to lead with agility, ensuring
              success for our clients in an ever-evolving technological
              landscape.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-[4px_4px_10px_3px_#00000026] p-8 md:p-17">
            <h3 className="fl3 mb-4 flex items-center gap-4">
              <span><img src="/mission/mission3.svg" alt="" /></span> Vision
            </h3>
            <p className="fl7">
              To be a global leader in AI-driven digital transformation,
              empowering businesses with cutting-edge technology solutions that
              enhance efficiency, scalability, and innovation. Through our
              innovative platforms, we strive to seamlessly integrate AI,
              computer vision, automation, and cloud technologies, enabling
              enterprises to navigate the future with confidence. Our vision is
              to transform industries, drive sustainable growth, and foster a
              culture of continuous learning and excellence, ensuring our
              clients remain ahead in an ever-evolving technological landscape.
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center xl:justify-center order-[-1] md:order-none">
          <img
            src="/mission/mission1.png"
            alt="Mission and Vision Illustration"
            className="w-full max-w-[500px]"
          />
        </div>

      </div>
    </main>
  );
}
