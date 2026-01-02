"use client";

import React, { useState } from 'react';


const UserInformationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-[#222] rounded-lg shadow-2xl p-8">


        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="fl3 !text-white mb-8">User Information</h2>

        <div className="space-y-6">

          <div className="space-y-2">
            <label className="fl7 !text-white">Email Address *</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-[#161616] border border-[#222] text-[#ffffff] rounded px-4 py-3 focus:outline-none focus:border-[#49CF38] transition-colors placeholder-[#909090]"
            />
          </div>


          <div className="space-y-2">
            <label className="fl7 !text-white">Mobile Number *</label>
            <div className="flex gap-3">

              <div className="relative w-28">
                <select className="w-full appearance-none bg-[#161616] border border-[#222] text-[#909090]  px-4 py-3 focus:outline-none focus:border-[#49CF38]">
                  <option>+ 91 (IN)</option>
                  <option>+ 1 (US)</option>
                  <option>+ 44 (UK)</option>
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#909090]">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </div>
              </div>


              <input
                type="tel"
                placeholder="Mobile"
                className="flex-1 fl8 bg-[#1C1C1C]  text-[#ffffff]  px-4 py-3 placeholder-[#909090] border border-[#222] focus:outline-none focus:border-[#49CF38]"
              />
            </div>
          </div>


          <button className="!w-full green-btn">
            Generate Email OTP
          </button>

        </div>
      </div>
    </div>
  );
};

export default function OmniscientiaPage() {
  const [showModal, setShowModal] = useState(false);
  const capabilities = [
    {
      id: "01",
      title: "Optical Character Recognition (OCR)",
      desc: "Extract and interpret text from images, scanned documents, and videos, streamlining data entry, document processing, and digitization.",
      className: "md:row-span-2",
      numberClass: "top-4 left-6 text-[#1a1a1a]",
    },
    {
      id: "02",
      title: "Facial Recognition",
      desc: "Leverage advanced face detection, verification, and recognition for secure authentication and personalized experiences in retail, banking, and access control.",
      className: "md:col-span-2",
      numberClass: "top-4 right-6 text-[#1a1a1a]",
    },
    {
      id: "03",
      title: <>Defect Detection & <br /> Quality Inspection</>,
      desc: "Enhance manufacturing efficiency by identifying product defects and anomalies, ensuring superior quality control and reducing waste.",
      className: "",
      numberClass: "top-1/2 -translate-y-1/2 right-6 text-[#1a1a1a]",
    },
    {
      id: "04",
      title: <>Image & Video <br /> Recognition</>,
      desc: "Identify objects, faces, and patterns in images and videos with high precision, enabling automation in surveillance, security, and customer analytics.",
      className: "",
      numberClass: "top-1/2 -translate-y-1/2 right-6 text-[#1a1a1a]",
    },
    {
      id: "05",
      title: <>Automated Video/Image <br /> data annotation</>,
      desc: "Streamline AI model training by automatically labeling objects, scenes, and activities in images and videos, reducing manual effort and improving annotation accuracy.",
      className: "md:col-span-2",
      numberClass: "top-1/2 -translate-y-1/2 right-10 text-[#1a1a1a]",
    },
    {
      id: "06",
      title: <>Object Detection <br /> & Tracking</>,
      desc: "Detect, classify, and track objects in real-time, enhancing applications in autonomous vehicles, industrial automation, and sports analytics.",
      className: "",
      numberClass: "top-1/2 -translate-y-1/2 right-6 text-[#1a1a1a]",
    },
  ];
  const useCases = [
    {
      title: "Retail",
      desc: "Enhance inventory management and customer experience.",
      borderClass: "border-b border-[#222] md:border-r",
    },
    {
      title: "Smart City",
      desc: "Optimize crowd management and urban safety.",
      borderClass: "border-b border-[#222]",
    },
    {
      title: "Manufacturing",
      desc: "Automate quality control and cut production costs.",
      borderClass: "border-b md:border-b-0 border-[#222] md:border-r",
    },
    {
      title: "Healthcare",
      desc: "Boost diagnostic accuracy and patient care.",
      borderClass: "border-[#222]",
    },
  ];
  const impactStats = [
    {
      title: "Retail Chain",
      description: "Improved inventory accuracy with automated shelf monitoring."
    },
    {
      title: "Manufacturing Plant",
      description: "Reduced defects with AI-powered quality control."
    },
    {
      title: "Healthcare Provider",
      description: "Improved diagnostic speed with medical image analysis."
    }
  ];
  return (
    <main className="bg-black min-h-screen">


      {showModal && <UserInformationModal onClose={() => setShowModal(false)} />}

      <div className="relative min-h-screen w-full overflow-hidden flex items-center container-padding section-block-padding">


        <div className="absolute inset-0 z-0">
          <img
            src="/omniscientia/herobg1.png"
            alt="Background"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0ae6] to-transparent"></div>
        </div>


        <div className="relative z-10 w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="flex flex-col justify-center space-y-8">

              <div className="mb-2">
                <img
                  src="/omniscientia/omniscientialogo.png"
                  alt="OmniScientia AI Logo"
                  className="w-64 md:w-120 h-auto object-contain"
                />
              </div>

              <div className="space-y-6 fl7 !text-white max-w-3xl">
                <p>
                  OmniScientia AI is a Deep Learning-Based Computer Vision AI
                  Platform which revolutionizes the way cameras perceive and
                  interpret the world.
                </p>
                <p>
                  Powered by cutting-edge neural networks and sophisticated
                  image processing techniques to transform video and image
                  data into actionable insights with cutting-edge computer
                  vision solutions.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-4">
                <button
                  onClick={() => window.location.href = "https://omniscientia-dev.codeelan.com/"}
                  className="green-btn !w-[150px]"
                >
                  Login
                </button>

                <button
                  onClick={() => setShowModal(true)}
                  className="border border-[#FFFFFF4D] px-5 py-2 md:px-4 md:py-4 w-[150px] fl7 !text-white "
                >
                  Demo Videos
                </button>
              </div>
            </div>

            <div className="relative md:h-[650px] w-full flex justify-center">
              <div className="absolute inset-0"></div>
              <img
                src="/omniscientia/hero1.png"
                alt="VR Technology Experience"
                className="relative z-10 w-full lg:max-w-[480px]"
              />
            </div>

          </div>
        </div>
      </div>


      <section className="container-padding section-block-padding">
        <div className="mx-auto">

          <div className="text-center mb-16">
            <h2 className="fl2 !text-white inline-block relative">
              Capabilities of Computer Vision Solutions
              <span className="block absolute right-0  -bottom-[2px] w-10 h-2 bg-[#49CF38]"></span>
            </h2>
            <p className="mt-6 fl7 !text-white max-w-[850px] mx-auto">
              Powered by cutting-edge neural networks and sophisticated image processing techniques to transform video and image data into actionable insights with cutting-edge computer vision solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className={`bg-[#131313] p-8 md:p-10 relative overflow-hidden group hover:bg-[#161616] ${item.className}`}
              >

                <span className={`absolute fl2 !text-[50px] md:!text-[100px] select-none z-0 group-hover:text-[#222]  ${item.numberClass}`}>
                  {item.id}
                </span>


                <div className="relative z-10 h-full flex flex-col justify-end ">
                  <h3 className="fl4 mb-4 !text-white ">
                    {item.title}
                  </h3>
                  <p className="!text-white fl8 w-[70%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-padding section-block-padding">
        <div className=" mx-auto flex flex-col lg:flex-row items-center">


          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-16">
            <h2 className="fl2 !text-white inline-block relative mb-8">
              Use cases of OmniScientia <br />
              across industries

              <span className="block absolute right-47  -bottom-[2px] w-10 h-2 bg-[#49CF38]"></span>

            </h2>
            <p className="!text-white fl7">
              Our computer vision solutions are transforming businesses across a wide range of industries. From enhancing manufacturing processes to improving healthcare diagnostics, our technology is driving innovation and efficiency.
            </p>
          </div>


          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {useCases.map((item, index) => (
                <div key={index} className={`flex flex-col items-center justify-center text-center p-12 ${item.borderClass}`}>
                  <h3 className="fl4 !text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="!text-white fl8 mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="fl2 !text-white inline-block relative">
              Explore Our Platform's Key Features
              <span className="block absolute right-0  -bottom-[2px] w-10 h-2 bg-[#49CF38]"></span>
            </h2>
            <p className="mt-6 fl7 !text-white max-w-[940px] mx-auto ">
              Our platform is packed with powerful features designed to make computer vision accessible and effective. From drag-and-drop model building to real-time data visualization, we provide everything you need to succeed.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">

            {/* LEFT: Funnel Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="/omniscientia/omniscientia1.png"
                alt="OmniScientia Funnel Diagram"
                className="w-auto max-h-[480px] object-contain translate-y-[-12px]"
              />
            </div>

            {/* RIGHT: Timeline */}
            <div className="w-full lg:w-1/2">

              <div className="relative pl-6">

                {/* Vertical Line */}
                <span className="absolute left-[30px] top-[8px] bottom-[6px] w-px h-[80%] bg-white"></span>

                {/* ITEM 1 */}
                <div className="relative pl-10 mb-12">
                  <span className="absolute left-0 top-[4px] h-3.5 w-3.5 rounded-full border border-[#ffffff]  flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#49CF38]" />
                  </span>

                  <h3 className="text-[22px] font-semibold text-white mb-2">
                    Drag-and-Drop Interface
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-[360px]">
                    Effortlessly build custom computer vision workflows.
                  </p>
                </div>

                {/* ITEM 2 */}
                <div className="relative pl-10 mb-12">
                  <span className="absolute left-0 top-[4px] h-3.5 w-3.5 rounded-full border border-[#ffffff]  flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#49CF38]" />
                  </span>

                  <h3 className="text-[22px] font-semibold text-white mb-2">
                    Real-Time Processing
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-[360px]">
                    Capable of processing hundreds of video streams.
                  </p>
                </div>

                {/* ITEM 3 */}
                <div className="relative pl-10 mb-12">
                  <span className="absolute left-0 top-[4px] h-3.5 w-3.5 rounded-full border border-[#ffffff]  flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#49CF38]" />
                  </span>

                  <h3 className="text-[22px] font-semibold text-white mb-2">
                    Cloud-Based Platform
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-[360px]">
                    Securely access data and models from anywhere.
                  </p>
                </div>

                {/* ITEM 4 */}
                <div className="relative pl-10">
                  <span className="absolute left-0 top-[4px] h-3.5 w-3.5 rounded-full border border-[#ffffff]  flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#49CF38]" />
                  </span>

                  <h3 className="text-[22px] font-semibold text-white mb-2">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-[380px]">
                    Uncover powerful insights using natural language — interact with video data.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="w-full  py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-16 space-y-6">
            <h2 className="fl2 !text-white relative inline-block">
              Real-World Impact

              <span className="block absolute right-0  -bottom-[2px] w-10 h-2 bg-[#49CF38]"></span>

            </h2>

            <p className="!text-white fl7 max-w-3xl mx-auto ">
              Discover how our computer vision solutions have helped businesses achieve remarkable results.
              From reducing operational costs to increasing revenue, our technology is making a real-world impact.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((item, index) => (
              <div
                key={index}
                className="bg-[#131313] hover:bg-[#141414]  p-6  flex flex-col items-center justify-center text-center min-h-[240px] "
              >
                <h3 className="!text-white fl4">
                  {item.title}
                </h3>
                <p className="!text-white fl8 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="bg-[#131313] section-block-padding container-padding py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="fl2 !text-white inline-block relative">
            Get Started Today: Request a Demo or Contact Us
            <span className="block absolute right-24 md:right-0 -bottom-[5px] w-12 h-1.5 bg-[#49CF38]"></span>
          </h2>

          <p className="fl7 !text-white  mx-auto mt-10 max-w-2xl">
            Harness the power of deep learning and transform your business with our Computer Vision AI Platform. Contact us today to explore how our technology can empower your operations and unlock new possibilities.
          </p>

          <div className="pt-10">
            <button className="green-btn ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}