"use client";

import Image from "next/image";

export default function TestimonialCard({ testimonial, isMobile = false }) {
  if (isMobile) {
    return (
      <div className="bg-white shadow-md overflow-hidden w-70 h-85">
        <div className="p-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16">
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
              <h3 className="fl4">
                {testimonial.name}
              </h3>
              <p className="fl7">{testimonial.title}</p>
            </div>
          </div>
          <p className="fl8">
            "{testimonial.description}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg overflow-hidden w-150 h-70">
    
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
