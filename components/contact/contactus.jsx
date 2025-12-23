"use client";
import dynamic from "next/dynamic";
import Select from "react-select";

const LeafletMap = dynamic(() => import("@/components/map/LeafletMap"), {
    ssr: false,
});


const serviceOptions = [
    { value: "omniscientia", label: "Omniscientia" },
    { value: "perfectus", label: "Perfectus" },
];


export default function Contactus() {
    return (
        <main className="min-h-screen container-padding section-block-padding">

            {/* CONTACT FORM */}
            <div className="max-w-[40%] mx-auto">
           <div className="  relative mb-20 text-center">
                <h2 className="fl2 inline-block relative">
                   Contact Us
                    <span className="block absolute right-0  w-10 h-[5px] bg-[#49CF38]"></span>
                </h2>
            </div>
                <div className="bg-white shadow-xl p-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block fl7 mb-1">Your Name *</label>
                            <input
                                type="text"
                                placeholder="Ex. Amy West"
                                className="w-full bg-[#f5f5f5] p-3 outline-none fl8"
                            />
                        </div>

                        <div>
                            <label className="block fl7 mb-1">Email Address *</label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full bg-[#f5f5f5] p-3 outline-none fl8"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block fl7 mb-1">
                            Services/Technologies interested in *
                        </label>

                        <Select
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
                            className="w-full bg-[#f5f5f5] p-3 outline-none fl8"
                        />
                    </div>

                    <div className="mt-6">
                        <label className="block fl7 mb-1">Comments *</label>
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-[#f5f5f5] p-3 outline-none fl8 resize-none"
                        />
                    </div>

                    <button className="mt-6 w-full bg-green-500 text-[#1E273E] py-3 fl7">
                        Send
                    </button>
                </div>
            </div>

            {/* FIND US HERE */}
            <div className="m-16 text-center">
                <h2 className="fl2 mb-6">
                    Find us here
                    <span className="block absolute right-[calc(50%-130px)] -translate-x-1/2 w-6 h-[5px] bg-[#49CF38] "></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div>
                        <p className="fl4">Phone</p>
                        <p className="fl7">(820) 865 - 0598</p>
                    </div>

                    <div>
                        <p className="fl4">Email</p>
                        <p className="fl7">info@codeelan.com</p>
                    </div>

                    <div>
                        <p className="fl4">Location</p>
                        <p className="fl7">India | USA</p>
                    </div>
                </div>
            </div>

            {/* MAP – UNCHANGED */}
            <div className="mt-12">
                <LeafletMap />
            </div>

        </main>
    );
}
