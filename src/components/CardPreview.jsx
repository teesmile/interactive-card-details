import React from "react";

export default function CardPreview() {
  return (
    <section className="relative flex flex-col h-200  items-center gap-8 w-95 bg-gradient-to-tl from-purple-950 via-purple-700 to-purple-500 p-50 pl-0">
      {/* front card */}
      <div
        className="absolute right-[-120px]  w-100 h-55 rounded-lg text-white p-5 z-20 flex flex-col shadow-2xl justify-between"
        style={{ background: "linear-gradient(135deg, #8739F9, #FF5ACD)" }}
      >
        <div className="flex justify-between">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="w-4 h-4 border-white rounded-full"></div>
        </div>
        <div>
          <p className="text-3xl tracking-widest">0000 0000 0000 0000</p>
          <div className="flex justify-between mt-2 text-sm">
            <span>JANE APPLESEED</span>
            <span>00/00</span>
          </div>
        </div>
      </div>

      {/* back card */}
      <div className="absolute top-115  right-[-190px] w-100 h-55 rounded-lg bg-gray-200 shadow-2xl">
        <div className="bg-black h-10 w-full mt-5"></div>
        <div className="left-1/13 absolute flex flex-col justify-between items-end top-21 bg-gray-300 p-2 rounded text-sm tracking-widest w-85 ">
          <span>000</span>
        </div>
      </div>
    </section>
  );
}
