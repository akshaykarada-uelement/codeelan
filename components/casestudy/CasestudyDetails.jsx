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
      <div className="flex md:flex-row flex-col items-center md:justify-center w-full gap-8 xl:gap-10 mb-8 md:mb-10 bg-[#F0F0F0]">
        <div className="flex md:w-1/2 w-full flex-col justify-center container-padding py-4 md:py-0 mr-25">
          <div className="flex gap-3 mb-5 md:mb-10">
            <span className="w-1 h-10 bg-[#49CF38] transform rotate-[15deg]" />
            <h1 className="fl3">{caseStudy.title}</h1>
          </div>
          <p className="fl7">{caseStudy.description}</p>
        </div>

        <div className="flex md:w-1/2 w-full h-auto items-center justify-center overflow-hidden">
          <img
            src={caseStudy.detailimage}
            alt={caseStudy.title}
            className="object-cover"
          />
        </div>
      </div>

      <div className="space-y-8 md:space-y-10 px-5 md:px-18 2xl:px-18 3xl:px-22">
        {points.map((point, index) => {
          const firstSubPoint =
            point.subPoints && point.subPoints.length > 0
              ? point.subPoints[0]
              : null;
          let previewText = "";
          if (firstSubPoint) {
            if (typeof firstSubPoint === "object") {
              previewText = [firstSubPoint.subTitle, firstSubPoint.text]
                .filter(Boolean)
                .join("\n");
            } else if (Array.isArray(firstSubPoint)) {
              previewText = firstSubPoint.join(", ");
            } else {
              previewText = String(firstSubPoint);
            }
          }

          const clampStyle =
            expandedPoint === index
              ? {}
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                };

          return (
            <div
              key={index}
              className="w-full flex justify-center gap-5 xl:gap-10 transition-all duration-300"
            >
              <div className="text-[50px] md:text-[100px] font-poppins-medium text-[#1E273E0D] w-[15vw] ">
                {String(point.number).padStart(2, "0")}.
              </div>

              <div className="bg-[#F0F0F0] overflow-hidden transition-all duration-300 p-5 sm:p-6 xl:p-10 md:w-[90vw]">
                <button
                  onClick={() => handleTogglePoint(index)}
                  className={
                    "flex items-center transition cursor-pointer w-full"
                  }
                >
                  <div className="flex md:flex-row flex-col md:items-center gap-4 sm:gap-6 xl:gap-10 flex-1 text-left">
                    <img
                      src={point.icon}
                      alt={point.title}
                      className="size-8 md:size-15"
                    />
                    <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                      <h3 className="fl4">{point.title}</h3>
                      {previewText &&
                      firstSubPoint &&
                      typeof firstSubPoint === "object" ? (
                        <div className="fl7">
                          <ul className="list-disc text-black ml-4">
                            <li className="">
                              <p
                                className="fl5 mb-1"
                                style={{
                                  display:
                                    expandedPoint === index
                                      ? "block"
                                      : "-webkit-box",
                                  WebkitLineClamp:
                                    expandedPoint === index ? "unset" : 1,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {firstSubPoint.subTitle}
                              </p>
                              <p
                                className="fl7 ml-3 sm:ml-4"
                                style={{
                                  display:
                                    expandedPoint === index
                                      ? "block"
                                      : "-webkit-box",
                                  WebkitLineClamp:
                                    expandedPoint === index ? "unset" : 1,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {firstSubPoint.text}
                              </p>
                            </li>
                          </ul>
                        </div>
                      ) : previewText ? (
                        <div className="fl7">
                          <ul className="list-disc ml-4">
                            <li style={clampStyle}>{previewText}</li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                    <span
                      className={`hidden md:block flex justify-end text-[20px] font-bold text-gray-600 hover:text-green-500 transition-transform duration-300 flex-shrink-0 ml-2 ${
                        expandedPoint === index ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </button>
                {expandedPoint === index && (
                  <div className="py-3 sm:py-4 xl:px-23 sm:px-19 animate-in fade-in duration-300">
                    {point.subPoints && point.subPoints.length > 1 && (
                      <div>
                        {point.subPoints.every(
                          (sp) => typeof sp === "object"
                        ) ? (
                          <ul className="space-y-3 sm:space-y-4 list-disc ml-6">
                            {point.subPoints
                              .slice(1)
                              .map((subPoint, subIdx) => (
                                <li
                                  key={subIdx}
                                  className="text-sm sm:text-base"
                                >
                                  <p className="fl5 mb-1">
                                    {subPoint.subTitle}
                                  </p>
                                  <p className="fl7 ml-3 sm:ml-4">
                                    {subPoint.text}
                                  </p>
                                </li>
                              ))}
                          </ul>
                        ) : (
                          <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 list-disc">
                            {point.subPoints
                              .slice(1)
                              .map((subPoint, subIdx) => (
                                <li
                                  key={subIdx}
                                  className="text-sm sm:text-base"
                                >
                                  <span className="fl7">
                                    {Array.isArray(subPoint) ? (
                                      <ul className="space-y-2 list-disc text-black">
                                        {subPoint.map((item, itemIdx) => (
                                          <li
                                            key={itemIdx}
                                            className="ml-3 sm:ml-4 "
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
                        <table className="w-full border-[2px] border-[#DEDEDE]">
                          <tbody>
                            {point.table.rows.map((row, rowIdx) => (
                              <tr
                                key={rowIdx}
                                className="border-b-[2px] border-[#DEDEDE] transition"
                              >
                                {row.map((cell, cellIdx) => (
                                  <td
                                    key={cellIdx}
                                    className={`px-3 sm:px-4 py-2 sm:py-3 fl7 ${
                                      cellIdx < row.length - 1
                                        ? "border-r-[2px] border-[#DEDEDE]"
                                        : ""
                                    }`}
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
          );
        })}
        <Link href="/casestudy" className=" ">
          <div className="flex flex-row justify-start items-center green-btn">
            <img src="/casestudy/back_btn.png" alt="Previous" />
            <span>Go back</span>
          </div>
        </Link>
      </div>

      <div className=""></div>
    </div>
  );
}
