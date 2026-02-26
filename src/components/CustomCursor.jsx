import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Small dot follows mouse exactly
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Larger ring follows with a delay
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const onMouseHover = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      gsap.to(follower, { scale: 1.5, borderColor: '#0ea5e9', backgroundColor: 'rgba(14, 165, 233, 0.1)', duration: 0.3 });
    };

    const onMouseLeaveHover = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, borderColor: '#8b5cf6', backgroundColor: 'transparent', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Add hover effect to interactive elements
    const iteractiveElements = document.querySelectorAll('a, button, .cursor-pointer');
    iteractiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseHover);
      el.addEventListener('mouseleave', onMouseLeaveHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      iteractiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseLeaveHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-white z-[9999] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent-2 transition-colors duration-300 z-[9998] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
