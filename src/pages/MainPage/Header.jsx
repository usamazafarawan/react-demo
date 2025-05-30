import React from "react";
import earth from '../../assets/images/earth.png';
import backgroundImage from '../../assets/images/bg-image.jpg';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-16 text-white max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-300">Smarter, Faster, and More Reliable</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
            Streamline procurement and enhance your supply chain with 1IGSs
          </h1>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold">
              Explore Cost-Effective Sourcing Options
            </button>
            <span className="px-6 py-3  font-semibold"> Book a Meeting</span>
          </div>
        </div>

        {/* Earth Image */}
        <div className="flex justify-center">
          <img
            src={earth}
            alt="Earth held by robotic arms"
            className="w-full max-w-lg"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 px-6 pb-16 mt-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-white">
        <div className="bg-black/30  backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Accelerate long-term growth with 1IGS's</h3>
          <p className="text-sm mb-4">
            We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.
          </p>
          <a href="#" className="text-orange-400 font-medium">Let's Co-Create →</a>
        </div>

        <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Proactive, innovative, and results-focused</h3>
          <p className="text-sm mb-4">
            We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.
          </p>
          <a href="#" className="text-orange-400 font-medium">Call to explore global sourcing options →</a>
        </div>

        <div className="bg-black/30  backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Driving success through strategic partnerships</h3>
          <p className="text-sm mb-4">
            We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.
          </p>
          <a href="#" className="text-orange-400 font-medium">Partner for Success →</a>
        </div>
      </div>
    </div>
  );
}
