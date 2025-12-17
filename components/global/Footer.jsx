"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  

  return (
    <footer className="flex flex-col">

      <section className="bg-[#1E273E] section-block-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="w-40">
              <Link href="/" className="flex items-center">
                <Image
                  src="/codeElan-logo.png"
                  alt="codeElan"
                  width={195}
                  height={48}
                  className="hidden md:block"
                />
                <Image
                  src="/codeElan-logo.png"
                  alt="codeElan"
                  width={70}
                  height={30}
                  className="md:hidden block"
                />
              </Link>
            </div>
            <div className="text-white">
             <p>
                Powered by cutting-edge neural networks and sophisticated image processing techniques,
             </p>
            </div>
          </div>
          <div className="flex flex-row justify-around gap-3 md:gap-40">
            <div className="flex flex-col gap-3 justify-center ">
              <h4 className="text-white text-5 mb-0 md:mb-4">Important Links</h4>
              <ul className="space-y-2 md:min-w-[150px]">
                <li>
                  <a href="/about-us" className="text-white hover:text-blue-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-white hover:text-blue-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/code-of-conduct" className="text-white hover:text-blue-600">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 ">
              <h4 className="text-white mb-0 md:mb-4">Platforms</h4>
              <ul className="space-y-2 md:min-w-[150px]">
                <li>
                  <Image
                  src="/landing/platform1.png"
                  alt="codeElan"
                  width={100}
                  height={48}
                  className="hidden md:block"
                />
                <Image
                  src="/landing/platform1.png"
                  alt="codeElan"
                  width={100}
                  height={30}
                  className="md:hidden block"
                />
                </li>
                <li>
                  <Image
                  src="/landing/platform2.png"
                  alt="codeElan"
                  width={195}
                  height={48}
                  className="hidden md:block"
                />
                <Image
                  src="/landing/platform2.png"
                  alt="codeElan"
                  width={70}
                  height={30}
                  className="md:hidden block"
                />
                </li>
               
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white mb-0 md:mb-4">Contact Details</h4>
              <ul className="space-y-2 md:min-w-[150px]">
                <li>
                  <a href="mailto:contact@orbiz.one" className="text-white">
                    (820) 865-0598
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@orbiz.one" className="text-white">
                   info@codeelan.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
      <div className="w-full h-[1px] bg-[#D9D9D933]"></div>

      <div className="container-padding py-2 md:py-4 bg-[#1E273E]">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          <p className="text-white">All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-10">
            <a href="/terms" className="text-white">
              Terms of Services
            </a>
            <a href="/cookies" className="text-white">
              Cookie Policy
            </a>
            <a href="/privacy" className="text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
