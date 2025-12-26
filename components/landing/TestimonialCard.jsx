"use client";

import Image from "next/image";

export default function TestimonialCard({ testimonial, isMobile = false }) {
  if (isMobile) {

    return (
      
      <div className="bg-white shadow-[2px_2px_5px_1px_#00000026] overflow-hidden w-full h-auto min-h-[240px] flex flex-col">
        <div className="p-6 space-y-4 flex-1">
          <div className="flex gap-4 items-center">
            <div className="flex-shrink-0">
              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="fl4 font-bold text-lg leading-tight">
                {testimonial.name}
              </h3>
              <p className="fl7 text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>

          
          <p className="fl8 text-gray-700 leading-relaxed">
            "{testimonial.description}"
          </p>
        </div>
      </div>

    );
  }

  return (
    <div className="bg-white shadow-lg overflow-hidden w-100 2xl:w-150 h-75">

      <div className="p-8 space-y-8">
        <div className="flex gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="fl4">{testimonial.name}</h3>
            <p className="fl7">{testimonial.title}</p>
          </div>
        </div>
        <p className="fl8">"{testimonial.description}"</p>
      </div>
    </div>
  );
}
