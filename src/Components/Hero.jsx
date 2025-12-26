import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section className="bg-black text-white py-30 flex flex-col items-center ">
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-4xl">MacBook Pro!</h1>
        <img src="/title.png" className="w-[60%]" alt="MacBook title" />
      </div>
      <video
        ref={videoRef}
        src="./videos/hero.mp4"
        autoPlay
        muted
        playsInline
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-md hover:cursor-pointer my-5">
        Buy Now
      </button>
      <p className="text-lg max-w-2xl">From $1599 or $133.25/mo. for 12 mo.</p>
    </section>
  );
};

export default Hero;
