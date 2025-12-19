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
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-8">
                    Contact Us
                    <span className="block w-10 h-[3px] bg-green-500 mx-auto mt-2"></span>
                </h1>

                <div className="bg-white shadow-xl p-6 md:py-18 md:px-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm mb-1">Your Name *</label>
                            <input
                                type="text"
                                placeholder="Ex. Amy West"
                                className="w-full bg-[#f5f5f5] p-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email Address *</label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full bg-[#f5f5f5] p-3 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm mb-1">
                            Services/Technologies interested in *
                        </label>

                        <Select
                            options={serviceOptions}
                            placeholder="Select Service"
                            classNamePrefix="react-select"
                        />
                    </div>


                    <div className="mt-6">
                        <label className="block text-sm mb-1">Subject *</label>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-[#f5f5f5] p-3 outline-none"
                        />
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm mb-1">Comments *</label>
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-[#f5f5f5] p-3 outline-none resize-none"
                        />
                    </div>

                    <button className="mt-6 w-full bg-green-500 text-white py-3 font-medium">
                        Send
                    </button>
                </div>
            </div>

            {/* FIND US HERE */}
            <div className="m-16 text-center">
                <h2 className="text-xl font-semibold mb-6">
                    Find us here
                    <span className="block w-8 h-[3px] bg-green-500 mx-auto mt-2"></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-gray-600">(820) 865 - 0598</p>
                    </div>

                    <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600">info@codeelan.com</p>
                    </div>

                    <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-gray-600">India | USA</p>
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
