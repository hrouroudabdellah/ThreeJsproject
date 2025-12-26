import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
      if(videoRef.current) videoRef.current.playbackRate =2;
    },[]);

    
  return (
    <section className="bg-black text-white py-30 ">
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-4xl">MacBook Pro!</h1>
        <img src="/title.png" className="w-[60%]" alt="MacBook title"/>
      </div>
      <video ref={videoRef} src="./videos/hero.mp4" autoPlay muted playsInline />
    </section>
  );
};

export default Hero;
