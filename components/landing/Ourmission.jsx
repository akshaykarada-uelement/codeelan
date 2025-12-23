export default function OurMission() {
    return (
        <>
            <div className="w-full bg-[#f4f4f4] py-16 px-4 md:px-8 flex justify-center items-center">
                <div className="max-w-[90%] w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">


                    <div className="w-full lg:w-1/2 bg-white shadow-xl p-8 md:p-10 relative">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">


                            <div className="relative flex flex-col gap-6 md:pr-8 md:border-r-2 md:border-dashed md:border-gray-200">
                                <div className="flex justify-between items-start">

                                    <img
                                        src="/landing/platform1.png"
                                        alt="OmniScientia AI"
                                        className="h-9 w-auto object-contain"
                                    />
                                    <span className="text-6xl font-bold text-gray-100 leading-none select-none">01</span>
                                </div>

                                <p className="fl8">
                                    Powered by cutting-edge neural networks and sophisticated image processing techniques,
                                    our platform enables businesses to automate visual tasks with unmatched accuracy, efficiency, and scalability.
                                </p>

                                <button className="mt-auto w-fit green-btn">
                                    Know More
                                </button>
                            </div>


                            <div className="relative flex flex-col gap-6 md:pl-8">
                                <div className="flex justify-between items-start">

                                    <img
                                        src="/landing/platform2.png"
                                        alt="Perfectus"
                                        className="h-7 w-auto object-contain mt-1"
                                    />
                                    <span className="text-6xl font-bold text-gray-100 leading-none select-none">02</span>
                                </div>

                                <p className="fl8">
                                    Revolutionize Testing Across Web, API, Mobile & Performance.
                                </p>

                                <button className="md:mt-40 w-fit green-btn">
                                    Know More
                                </button>
                            </div>

                        </div>
                    </div>


                    <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                        <div className="  relative  ">
                            <h2 className="fl2 inline-block relative">
                                Our Mission
                                <span className="block absolute right-0  w-10 h-[5px] bg-[#49CF38]"></span>
                            </h2>
                        </div>

                        <p className="fl7 max-w-[90%]">
                            At CodeElan, we specialize in AI/ML, Computer Vision, and cloud engineering solutions that drive innovation.
                            We deliver scalable, intelligent products, automate processes, and provide actionable insights.
                            With AGILE development and robust QA automation, we help enterprises integrate and scale cutting-edge
                            technologies to enhance their digital transformation.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}