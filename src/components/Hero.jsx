import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import myPhoto from "../assets/my-photo.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const circleRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const decoRef = useRef(null);
  const bgBlob1 = useRef(null);
  const bgBlob2 = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from([bgBlob1.current, bgBlob2.current], {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(subtextRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(decoRef.current, {
        height: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // Blob floating
      gsap.to(bgBlob1.current, {
        y: "+=20",
        x: "+=10",
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });

      gsap.to(bgBlob2.current, {
        y: "-=15",
        x: "-=10",
        repeat: -1,
        yoyo: true,
        duration: 10,
        ease: "sine.inOut",
      });

      // Scroll parallax
      gsap.to(bgBlob1.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          scrub: true,
        },
        y: "+=30",
      });

      gsap.to(bgBlob2.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          scrub: true,
        },
        y: "-=30",
      });

      // Continuous floating photo
      gsap.set(photoRef.current, { y: -5 }); // ensure start position
      gsap.to(photoRef.current, {
        y: 50, // slight float
        repeat: -1,
        yoyo: true,
        duration: 3.5,
        ease: "sine.inOut",
      });
    }, heroRef);

    // Pointer glow
    const moveCircle = (e) => {
      gsap.to(circleRef.current, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCircle);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background Blobs (Generative AI Feel) */}
      <div
        ref={bgBlob1}
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent-2 opacity-30 blur-[100px] animate-pulse"
      ></div>
      <div
        ref={bgBlob2}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-1 opacity-20 blur-[120px] animate-pulse"
      ></div>

      {/* Content */}
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10`}
      >
        {/* Text */}
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-accent-1 shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
            <div ref={decoRef} className="w-1 sm:h-80 h-40 bg-gradient-to-b from-accent-1 to-transparent" />
          </div>
          <div>
            <h1
              ref={headingRef}
              className={`${styles.heroHeadText} text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2 animate-gradient drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]`}
            >
              Hi, I'm Sahil
            </h1>
            <p
              ref={subtextRef}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              Software Developer from India.
              <br className="sm:block hidden" />
              CSE '23 graduate, multi-hackathon winner,
              <br className="sm:block hidden" /> Actively Learning and
              Contributing to the Community.
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center items-center">
          <img
            ref={photoRef}
            src={myPhoto}
            alt="Sahil - Software Developer"
            loading="lazy"
            className="profile-photo w-60 h-60 rounded-full object-cover border-4 border-accent-1 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(14,165,233,0.8)]"
          />
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-secondary mb-1 animate-bounce"></div>
          </div>
        </a>
      </div>

      {/* Pointer Glow */}
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-[#915eff] opacity-60 mix-blend-screen z-50"
      ></div>
    </section>
  );
};

export default Hero;
