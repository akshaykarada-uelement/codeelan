'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const titleWords = caseStudy.title.split(' ');

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      {/* <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-4 sm:px-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/casestudy"
            className="inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition mb-4"
          >
            ← Go Back
          </Link>
        </div>
      </div> */}

      <h3 className="text-[#1E273E] section-block-bottom text-center font-bold text-[40px]">
            Case Studies
        </h3>
      
      <div className=" ">
        
        <div className="flex items-center w-full gap-8 lg:gap-12 mb-16">
          
          <div className="flex w-1/2 flex-col justify-center container-padding">
            <h1 className="text-[22px] md:text-[30px] font-poppins-medium text-[#323232] mb-5 md:mb-10">
              {caseStudy.title}
            </h1>
            <p className="text-[12px] md:text-[16px] font-poppins text-[#323232]">
              {caseStudy.description}
            </p>
          </div>

          <div className="flex w-1/2 h-auto items-center justify-center">
            <div className="relative w-full h-auto overflow-hidden">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="space-y-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Point Header - Clickable */}
              <button
                onClick={() => handleTogglePoint(index)}
                className="w-full p-4 sm:p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1 text-left">
                  {/* Number */}
                  <div className="text-2xl sm:text-3xl font-bold text-gray-300 min-w-fit">
                    {String(point.number).padStart(2, '0')}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">
                      {point.icon}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {point.title}
                    </h3>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  className={`text-2xl font-bold text-gray-600 hover:text-green-500 transition-transform duration-300 flex-shrink-0 ml-2 ${
                    expandedPoint === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </button>
              </button>

              {/* Point Content - Expandable */}
              {expandedPoint === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 bg-gray-50 border-t border-gray-200 animate-in fade-in duration-300">
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    {point.description}
                  </p>

                  {/* Sub-Points */}
                  {point.subPoints && point.subPoints.length > 0 && (
                    <div>
                      {point.subPoints.every((sp) => typeof sp === 'object') ? (
                        // Complex sub-points with titles
                        <ul className="space-y-3 sm:space-y-4">
                          {point.subPoints.map((subPoint, subIdx) => (
                            <li key={subIdx} className="text-sm sm:text-base">
                              <p className="font-semibold text-gray-900 mb-1">
                                {subPoint.subTitle}
                              </p>
                              <p className="text-gray-700 leading-relaxed ml-3 sm:ml-4">
                                {subPoint.text}
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        // Simple bullet points
                        <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6">
                          {point.subPoints.map((subPoint, subIdx) => (
                            <li key={subIdx} className="flex items-start gap-3 text-sm sm:text-base">
                              <span className="text-green-500 font-bold mt-1 flex-shrink-0">•</span>
                              <span className="text-gray-700 leading-relaxed">
                                {Array.isArray(subPoint) ? (
                                  <ul className="space-y-2">
                                    {subPoint.map((item, itemIdx) => (
                                      <li key={itemIdx} className="ml-3 sm:ml-4">
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
                          <tr className="bg-gray-200 border-b-2 border-gray-300">
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
          ))}
        </div>
      </div>
    </div>
  );
}