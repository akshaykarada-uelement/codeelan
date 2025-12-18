"use client";
import dynamic from "next/dynamic";


const LeafletMap = dynamic(() => import("@/components/map/LeafletMap"), {
  ssr: false,
});


export default function Contactus() {
    return (
        <main>
            <div className="">

            </div>
            <div className="text-center m-8">
            <LeafletMap />
            </div>
        </main>

    );
}