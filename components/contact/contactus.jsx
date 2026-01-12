"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Select from "react-select";
import SlashPrefix from "../SlashPrefix";

const LeafletMap = dynamic(() => import("../map/LeafletMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const serviceOptions = [
  { value: "omniscientia", label: "Omniscientia" },
  { value: "perfectus", label: "Perfectus" },
];

export default function Contactus() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contactItems = [
    {
      id: 0,
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(820) 865 - 0598",
    },
    {
      id: 1,
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@codeelan.com",
    },
    {
      id: 2,
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: (
        <span className="flex gap-2">
          <span>India</span>
          <span className="text-gray-300">|</span>
          <span>USA</span>
        </span>
      ),
    },
  ];

  return (
    <main className="min-h-screen container-paddingv2 section-block-padding">
      <div className="w-full max-w-2xl mx-auto px-4 md:px-0">
        <div className="relative mb-12 md:mb-20 text-center">
          <h2 className="fl2 inline-block relative text-3xl md:text-4xl">
           <SlashPrefix /> Contact Us
          </h2>
        </div>
        <div className="bg-white shadow-[0px_0px_10px_1px_#00000026] p-4 md:p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block fl7 mb-1">Your Name *</label>
              <input
                type="text"
                placeholder="Ex. Amy West"
                className="w-full bg-[#f5f5f5] p-3 outline-none fl8 rounded"
              />
            </div>

            <div>
              <label className="block fl7 mb-1">Email Address *</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-[#f5f5f5] p-3 outline-none fl8 rounded"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block fl7 mb-1">
              Services/Technologies interested in *
            </label>

            <Select
              instanceId="service-select"
              options={serviceOptions}
              placeholder="Select Service"
              classNamePrefix="react-select"
            />
          </div>

          <div className="mt-6">
            <label className="block fl7 mb-1">Subject *</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#f5f5f5] p-3 outline-none fl8 rounded"
            />
          </div>

          <div className="mt-6">
            <label className="block fl7 mb-1">Comments *</label>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-[#f5f5f5] p-3 outline-none fl8 resize-none rounded"
            />
          </div>

          <button className="mt-6 !w-full green-btn py-3 fl7 ">Send</button>
        </div>
      </div>

      <div className="w-full section-block-padding mx-auto px-6 py-10 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
        <div className="relative text-center">
          <h2 className="fl2 inline-block relative">
           <SlashPrefix /> Find us here
          </h2>
        </div>

        <div
          className="flex flex-col lg:flex-row w-full lg:w-auto bg-white lg:bg-transparent"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {contactItems.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className="relative px-6 py-5 lg:px-8 lg:py-6 cursor-pointer group w-full lg:w-auto"
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-[#F7F7F7]  "
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 ">{item.icon}</div>
                <div>
                  <h3 className="fl4">{item.label}</h3>
                  <div className="fl7 mt-1">{item.value}</div>
                </div>
              </div>

              {index !== contactItems.length - 1 && (
                <div>
                  <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-[#D9D9D9] lg:hidden" />
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-[#D9D9D9]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <LeafletMap />
      </div>
    </main>
  );
}
