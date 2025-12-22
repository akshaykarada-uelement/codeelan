"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="bg-[#1E273E] section-block-padding container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-10 xl:gap-14">
          <div className="flex gap-10">
            <div className="flex flex-col gap-6 md:gap-10">
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
                    className="block md:hidden"
                  />
                </Link>
              </div>
              <div className="text-white">
                <p>
                  Powered by cutting-edge neural networks and sophisticated
                  image processing techniques,
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:gap-10 md:hidden">
              <h4 className="text-white ">Platforms</h4>
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
                    className="block md:hidden"
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
                    className="block md:hidden"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-around gap-6 xl:gap-40">
            <div className="flex flex-col gap-6 md:gap-10">
              <h4 className="text-white text-5">Important Links</h4>
              <ul className="space-y-2 md:min-w-[150px] min-w-[122px]">
                <li>
                  <a
                    href="/about-us"
                    className="text-white hover:text-blue-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacypolicy"
                    className="text-white hover:text-blue-600"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/codeofconductpage"
                    className="text-white hover:text-blue-600"
                  >
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex md:flex-col gap-6 md:gap-10">
              <h4 className="text-white">Platforms</h4>
              <ul className="flex flex-col gap-2 md:min-w-[150px]">
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
                    className="block md:hidden"
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
                    className="block md:hidden"
                  />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 md:gap-10">
              <h4 className="text-white ">Contact Details</h4>
              <ul className="space-y-2 md:min-w-[150px] min-w-[120px]">
                <li className="flex gap-2 items-center">
                  <img
                    src="/landing/mobile.png"
                    alt="mobile"
                    className="size-6"
                  />
                  <a href="" className="text-white">
                    (820) 865-0598
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    src="/landing/email.png"
                    alt="email"
                    className="w-4.5 h-3.5"
                  />
                  <a href="mailto:info@codeelan.com" className="text-white">
                    info@codeelan.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[1px] !bg-[#D9D9D920]"></div>

      <div className="container-padding py-4 md:py-4 bg-[#1E273E]">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full gap-4">
          <p className="text-white">
            2025 © All rights reserved by CodeElan Technologies.
          </p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="text-white">
              Social Platforms
            </a>
            <div className="bg-[#D9D9D933] w-20 h-0.5"></div>
            <div className="flex gap-2">
              <img
                src="/landing/linkedin.png"
                alt="linkedin"
                className="size-6"
              />
              <img
                src="/landing/facebook.png"
                alt="facebook"
                className="size-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
