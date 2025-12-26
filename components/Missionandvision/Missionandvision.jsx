
export default function Missionandvision() {
  return (
    <main className="min-h-screen container-padding section-block-padding">
      <div className="  relative mb-20 text-center">
        <h2 className="fl2 inline-block relative">
          Mission and Vision
          <span className="block absolute right-0  -bottom-[2px] w-10 h-2 bg-[#49CF38]"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="flex flex-col gap-10">

          <div className="bg-white shadow-[4px_4px_10px_3px_#00000026] p-8 md:p-17">
            <h3 className="fl3 mb-6 flex items-center gap-6">
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

          <div className="bg-white shadow-[4px_4px_10px_3px_#00000026] p-8 md:p-17">
            <h3 className="fl3 mb-6 flex items-center gap-6">
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

        <div className="flex justify-center xl:justify-center ">
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
