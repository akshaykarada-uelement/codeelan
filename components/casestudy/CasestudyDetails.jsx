"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudyDetails({ caseStudy }) {
  const [expandedPoint, setExpandedPoint] = useState(null);

  const handleTogglePoint = (index) => {
    setExpandedPoint(expandedPoint === index ? null : index);
  };

  if (!caseStudy || !caseStudy.details) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Case study not found</p>
      </div>
    );
  }

  const { points } = caseStudy.details;
  const titleWords = caseStudy.title.split(" ");

  return (
    <div className="min-h-screen">
      {/* Header */}
      

      <div className="flex items-center w-full gap-8 lg:gap-12  xl:mb-10 bg-[#F0F0F0]">
        <div className="flex w-1/2 flex-col justify-center container-padding ">
          <h1 className="text-[22px] md:text-[30px] font-poppins-medium text-[#323232] mb-5 md:mb-10">
            {caseStudy.title}
          </h1>
          <p className="text-[12px] md:text-[16px] font-poppins text-[#323232]">
            {caseStudy.description}
          </p>
        </div>

        <div className="flex w-1/2 h-auto items-center justify-center overflow-hidden">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="object-cover"
          />
        </div>
      </div>

      <div className="space-y-5 container-padding">
        {points.map((point, index) => (
          <div
            key={index}
            className="w-full flex justify-center gap-5 md:gap-8 transition-all duration-300"
          >
            <div className="text-[75px] md:text-[100px] font-poppins-medium text-[#1E273E0D] w-[15vw]">
              {String(point.number).padStart(2, "0")}.
            </div>

            <div className="bg-[#F0F0F0] overflow-hidden transition-all duration-300 p-5 sm:p-6 xl:p-10 w-[90vw]">
              <button
                onClick={() => handleTogglePoint(index)}
                className={"flex items-center transition cursor-pointer w-full"}
              >
                <div className="flex items-center gap-4 sm:gap-6 xl:gap-10 flex-1 text-left">
      
                  <img
                  src={point.icon}
                  alt={point.title}
                  className="size-15"
                  />
                  <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                    <h3 className="text-[16px] md:text-[24px] font-poppins-medium text-[#323232]">
                      {point.title}
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-poppins text-[#323232]">
                      {point.description}
                    </p>
                  </div>
                  <button
                    className={`flex justify-end text-[20px] font-bold text-gray-600 hover:text-green-500 transition-transform duration-300 flex-shrink-0 ml-2 ${
                      expandedPoint === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </button>
                </div>
              </button>
              {expandedPoint === index && (
                <div className="p-4 sm:p-5 xl:p-8 animate-in fade-in duration-300">
                  {point.subPoints && point.subPoints.length > 0 && (
                    <div>
                      {point.subPoints.every((sp) => typeof sp === "object") ? (
                        <ul className="space-y-3 sm:space-y-4">
                          {point.subPoints.map((subPoint, subIdx) => (
                            <li key={subIdx} className="text-sm sm:text-base">
                              <p className="text-[12px] md:text-[16px] font-poppins-semibold text-[#323232] mb-1">
                                {subPoint.subTitle}
                              </p>
                              <p className="text-[12px] md:text-[16px] font-poppins text-[#323232] ml-3 sm:ml-4">
                                {subPoint.text}
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        
                        <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6">
                          {point.subPoints.map((subPoint, subIdx) => (
                            <li
                              key={subIdx}
                              className="flex items-start gap-3 text-sm sm:text-base"
                            >
                              <span className="text-green-500 font-bold mt-1 flex-shrink-0">
                                •
                              </span>
                              <span className="text-[12px] md:text-[16px] font-poppins text-[#323232]">
                                {Array.isArray(subPoint) ? (
                                  <ul className="space-y-2">
                                    {subPoint.map((item, itemIdx) => (
                                      <li
                                        key={itemIdx}
                                        className="ml-3 sm:ml-4"
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  subPoint
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Table */}
                  {point.table && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className=" border-b-2 border-gray-300">
                            {point.table.headers.map((header, headerIdx) => (
                              <th
                                key={headerIdx}
                                className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-900"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {point.table.rows.map((row, rowIdx) => (
                            <tr
                              key={rowIdx}
                              className="border-b border-gray-200 hover:bg-gray-100 transition"
                            >
                              {row.map((cell, cellIdx) => (
                                <td
                                  key={cellIdx}
                                  className="px-3 sm:px-4 py-2 sm:py-3 text-gray-700"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
         <Link
            href="/casestudy"
            className="inline-flex items-center "
          >
            ← Go Back
          </Link>
      </div>

      <div className="">   
         
      </div>
    </div>
  );
}
