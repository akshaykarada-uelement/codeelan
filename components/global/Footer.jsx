"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="bg-[#1E273E] section-block-padding container-padding">
        <div className="flex w-full flex-col md:flex-row gap-10 lg:gap-10 xl:gap-14">
          <div className="flex gap-10 w-[30vw]"> 
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
              <div className="fl8 !text-white">
                <p>
                  Powered by cutting-edge neural networks and sophisticated
                  image processing techniques,
                </p>
              </div>
               <div className="flex gap-5">
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
            <div className="flex flex-col gap-6 md:gap-10 md:hidden">
              <h4 className="fl9">Platforms</h4>
              <ul className="space-y-2">
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
          <div className="flex flex-row xl:justify-around gap-6 xl:gap-12 w-[70vw]">
            <div className="flex flex-col gap-6 md:gap-10">
              <h4 className="fl9">About Us</h4>
              <ul className="space-y-2 ">
                <li>
                  <Link
                    href="/casestudy"
                    className="fl8 !text-white hover:text-blue-600"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partnership"
                    className="fl8 !text-white hover:text-blue-600"
                  >
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/missionvision"
                    className="fl8 !text-white hover:text-blue-600"
                  >
                    Mission and Vision
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex md:flex-col gap-6 md:gap-10">
              <h4 className="fl9">Platforms</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Image
                    src="/landing/platform1.png"
                    alt="codeElan"
                    width={100}
                    height={20}
                    className="hidden md:block"
                  />
                  <Image
                    src="/landing/platform1.png"
                    alt="codeElan"
                    width={150}
                    height={50}
                    className="block md:hidden"
                  />
                </li>
                <li>
                  <Image
                    src="/landing/platform2.png"
                    alt="codeElan"
                    width={105}
                    height={20}
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
              <h4 className="fl9">Contact Details</h4>
              <ul className="space-y-2 ">
                <li className="flex gap-2 items-center">
                  <img
                    src="/landing/mobile.png"
                    alt="mobile"
                    className="size-6"
                  />
                  <a href="" className="fl8 !text-white">
                    (820) 865-0598
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    src="/landing/email.png"
                    alt="email"
                    className="w-4.5 h-3.5"
                  />
                  <a href="mailto:info@codeelan.com" className="fl8 !text-white">
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
          <p className="fl8 !text-[#49CF38]">
            2025 © All rights reserved by CodeElan Technologies.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacypolicy" className="fl8 !text-white">
              Privacy Policy
            </Link>
            <Link href="/codeofconductpage" className="fl8 !text-white">
             Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
