import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagnetEffect({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(ref.current, {
        x: (clientX - ref.current.offsetWidth / 2) / 5,
        y: (clientY - ref.current.offsetHeight / 2) / 5,
        ease: 'power2.out',
      });
    };

    const mouseLeave = () => {
      gsap.to(ref.current, {
        x: 0,
        y: 0,
        ease: 'power2.out',
      });
    };

    ref.current.addEventListener('mousemove', mouseMove);
    ref.current.addEventListener('mouseleave', mouseLeave);

    return () => {
      ref.current.removeEventListener('mousemove', mouseMove);
      ref.current.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref });
}
