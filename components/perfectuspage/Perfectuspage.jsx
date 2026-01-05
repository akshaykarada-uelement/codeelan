"use client";
import React from "react";
import UnderlineLastChars from "@/components/UnderlineLastChars";

export default function Perfectuspage() {
  const iconPaths = {
    cycle: "/perfectus/cycleicon.png",
    flask: "/perfectus/scienceicon.png",
    dollar: "/perfectus/paidicon.png",
    bug: "/perfectus/bugicon.png",
  };

  const features = [
    {
      title: "Faster Release Cycles",
      description:
        "Accelerate your time to market by automating repetitive tasks and reducing manual effort.",
      icon: "cycle",
    },
    {
      title: "Improved Test Coverage",
      description:
        "Ensure comprehensive testing across all platforms and devices, increasing the quality of your software.",
      icon: "flask",
    },
    {
      title: "Reduced Costs",
      description:
        "Lower operational expenses by minimizing errors and optimizing resource allocation and human intervention.",
      icon: "dollar",
    },
    {
      title: "Monotony Kills Motivation",
      description:
        "Repetitive testing leads to tester fatigue, where critical details get missed. Demotivated testers means lower productivity and quality.",
      icon: "bug",
    },
  ];
  const keyFeatures = [
    {
      title: "Improved ROI",
      desc: "Automation increases test coverage without labor.",
    },
    {
      title: "Intuitive Interface",
      desc: "Record-and-play functionality simplifies test creation, making automation accessible to all team members.",
    },
    {
      title: "Cross-Platform Compatibility",
      desc: "Seamlessly test web, API, mobile, and performance across different environments.",
    },
    {
      title: "AI-Powered Insights",
      desc: "Get actionable recommendations and optimize your testing strategies with machine learning.",
    },
    {
      title: "Error-Free Execution",
      desc: "Automation ensures consistent, precise execution.",
    },
    {
      title: "Consistent Repetition",
      desc: "Recorded actions play back exactly as intended.",
    },
    {
      title: "Scaling Automation",
      desc: "Easily scale automation with more tests or tasks.",
    },
    {
      title: "Reusable Scripts",
      desc: "Easily reuse recorded tasks and tests.",
    },
    {
      title: "Auto Healing",
      desc: "AI enabled feature to quickly adjust scripts to handle changes.",
    },
    {
      title: "Less Maintenance",
      desc: "Recorded scripts reduce time fixing issues.",
    },
    {
      title: "Easy for Non-Technical Users",
      desc: "No Code approach let non-technical users automate.",
    },
    {
      title: "Instant Feedback",
      desc: "Automation provides quick test results, allowing teams to quickly detect issues and address them.",
    },
    {
      title: "Reduced Downtime",
      desc: "System monitoring, performance testing, or maintenance through automation platform minimize downtime.",
    },
  ];
  const experienceItems = [
    { title: "Web", desc: "Chrome, Firefox, Edge" },
    { title: "API", desc: "REST, SOAP" },
    { title: "Mobile", desc: "iOS, Android" },
    { title: "Performance", desc: "Load, Stress, Endurance" },
  ];

  const successStories = [
    {
      number: "01",
      title: "Increased Efficiency",
      desc: "Reduced testing time by 80%.",
    },
    {
      number: "02",
      title: "Improved Quality",
      desc: "Decreased bug reports by 50%.",
    },
    {
      number: "03",
      title: "Enhanced Productivity",
      desc: "Freed up developers to focus on innovation.",
    },
  ];

  return (
    <main className="bg-black">
      <div className="relative min-h-screen w-full overflow-hidden ">
        <div className="absolute inset-0 z-0">
          <img
            src="/perfectus/herobg.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#131313E5]"></div>
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
          <div className="mb-6">
            <img
              src="/perfectus/perfectus.png"
              alt="Perfectus"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="text-center ">
            <p className="fl7 !text-white">
              Web, API, Mobile & Performance Automation Testing
            </p>
            <p className="fl7 !text-white">
              Revolutionize Testing Across Web, API, Mobile & Performance
            </p>
          </div>
        </div>
      </div>

      <div className=" section-block-padding container-paddingv2">
        <div className="relative mb-20 text-center">
          <h2 className="fl2 !text-white inline-block relative ">
            Eliminate Manual Testing{" "}
            <span className="whitespace-nowrap">
              Bottlenec<UnderlineLastChars>ks</UnderlineLastChars>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-[#131313] p-8 md:p-10 hover:bg-[#191919] transition-colors"
            >
              <div className="flex-shrink-0 w-[20%]">
                <div className="w-20 h-10 flex items-center mx-auto justify-center">
                  <img
                    src={iconPaths[feature.icon]}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="h-20 w-[1px] bg-[#FFFFFF4D] mx-6"></div>

              <div className="w-[80%]">
                <h3 className="fl4 !text-white mb-3">{feature.title}</h3>
                <p className="fl8 !text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block-padding container-padding  ">
        <div className="relative mb-20 text-center">
          <h2 className="fl2 !text-white inline-block relative text-3xl font-bold">
            Key Features of{" "}
            <span className="whitespace-nowrap">
              Perfect<UnderlineLastChars>us</UnderlineLastChars>
            </span>
          </h2>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          {keyFeatures.map((item, index) => {
            const isRightAligned = index % 2 === 0;
            const isLast = index === keyFeatures.length - 1;
            const isFirst = index === 0;

            return (
              <div
                key={index}
                className={`relative flex w-full ${!isLast ? "pb-24" : ""}`}
              >
                <div
                  className={`absolute  md:left-1/2 -translate-x-1/2 w-[1px] bg-white
                                ${isFirst ? "top-4 h-full" : ""} 
                                ${isLast ? "top-0 h-4" : ""}
                                ${!isFirst && !isLast ? "top-0 h-full" : ""}
                            `}
                ></div>

                <div
                  className={`hidden md:block w-1/2 ${
                    !isRightAligned ? "text-right pr-16" : ""
                  }`}
                >
                  {!isRightAligned && (
                    <>
                      <h3 className="fl4 !text-white mb-2">{item.title}</h3>
                      <p className="fl7 !text-white">{item.desc}</p>
                    </>
                  )}
                </div>

                <div className="absolute left-0 md:left-1/2 z-10 flex items-center justify-center -translate-x-1/2 top-0">
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center bg-black">
                    <div className="w-3 h-3 rounded-full bg-[#49CF38]"></div>
                  </div>
                </div>

                <div
                  className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                    isRightAligned ? "md:text-left md:pl-16" : "md:hidden"
                  }`}
                >
                  <h3 className="fl4 !text-white mb-2">{item.title}</h3>
                  <p className="fl7 !text-white">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-block-padding container-padding pb-32">
        <div className="relative mb-20 text-center">
          <h2 className="fl2 !text-white inline-block relative max-w-4xl">
            Experience the Future: "Perfectus" – Your Business's Automation{" "}
            <span className="whitespace-nowrap">
              Superhe<UnderlineLastChars>ro</UnderlineLastChars>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#FFFFFF33] max-w-6xl mx-auto border-t md:border-t-0 border-[#FFFFFF33] md:border-none">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className="relative p-8 md:py-12 text-center cursor-pointer hover:bg-[#161616]"
            >
              <h3 className="fl4 !text-white  mb-3">{item.title}</h3>
              <p className="fl8 !text-white ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block-padding container-padding pb-32">
        <div className="relative mb-20 text-center">
          <h2 className="fl2 !text-white inline-block relative ">
            Customer Success Stories & Case{" "}
            <span className="whitespace-nowrap">
              Studi<UnderlineLastChars>es</UnderlineLastChars>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <div
              key={index}
              className=" relative p-6 md:p-10 text-center cursor-pointer  hover:bg-[#161616]"
            >
              {/* Number */}
              <div className="fl2 !text-white md:!text-[50px] mb-6 ">
                {story.number}
              </div>
              {/* Content */}
              <h3 className="fl4 !text-white mb-4">{story.title}</h3>
              <p className="fl8 !text-white">{story.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block-padding container-padding pb-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 max-w-7xl mx-auto">
          <div className="w-full md:w-1/3 md:pt-40 ">
            <h2 className="fl2 !text-white inline-block relative">
              Take a Free Trial{" "}
              <span className="whitespace-nowrap">
                Tod<UnderlineLastChars>ay</UnderlineLastChars>
              </span>
            </h2>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#131313] p-8 rounded-sm hover:bg-[#191919] transition-colors group">
              <div className="mb-4">
                <img
                  src="/perfectus/install.svg"
                  alt="Easy Setup Icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="fl4 !text-white mb-2">Easy Setup</h3>

              <div className="h-[1px] w-full bg-[#FFFFFF4D] mb-4 group-hover:bg-[#49CF38]"></div>
              <p className="!text-white fl8">
                Get up and running in minutes with our simple installation
                process.
              </p>
            </div>

            <div className="bg-[#131313] p-8 rounded-sm hover:bg-[#191919] transition-colors group">
              <div className="mb-4">
                <img
                  src="/perfectus/lock.svg"
                  alt="Easy Setup Icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="fl4 !text-white mb-2"> Full Access</h3>

              <div className="h-[1px] w-full bg-[#FFFFFF4D] mb-4 group-hover:bg-[#49CF38]"></div>
              <p className="!text-white fl8">
                Explore all features and functionalities during your trial
                period.
              </p>
            </div>

            <div className="bg-[#131313] p-8 rounded-sm hover:bg-[#191919] transition-colors group">
              <div className="mb-4">
                <img
                  src="/perfectus/support.svg"
                  alt="Easy Setup Icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="fl4 !text-white mb-2"> Dedicated Support</h3>

              <div className="h-[1px] w-full bg-[#FFFFFF4D] mb-4 group-hover:bg-[#49CF38]"></div>
              <p className="!text-white fl8">
                Receive assistance from our expert team to ensure a smooth
                experience.
              </p>
            </div>

            <div className="bg-[#131313] p-8 rounded-sm hover:bg-[#191919] transition-colors group">
              <div className="mb-4">
                <img
                  src="/perfectus/hourglass.svg"
                  alt="Easy Setup Icon"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="fl4 !text-white mb-2"> Duration Delight</h3>

              <div className="h-[1px] w-full bg-[#FFFFFF4D] mb-4 group-hover:bg-[#49CF38]"></div>
              <p className="!text-white fl8">2-Week Trial</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131313] section-block-padding container-padding">
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="fl2 !text-white  inline-block relative">
            Get Started Today: Request a Demo or Contact{" "}
            <span className="whitespace-nowrap">
              <UnderlineLastChars>Us</UnderlineLastChars>
            </span>
          </h2>

          <p className="fl7 !text-white mx-auto mt-10">
            Harness the power of deep learning and transform your business with
            our Computer Vision AI Platform. Contact us today to explore how our
            technology can empower your operations and unlock new possibilities.
          </p>

          <div className="pt-10">
            <button className="green-btn ">Contact Us</button>
          </div>
        </div>
      </div>
    </main>
  );
}
