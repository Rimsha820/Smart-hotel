import { useEffect, useRef, useState, type MutableRefObject } from 'react';

import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';

const images = [
  gallery1, gallery2, gallery3, gallery4,
  gallery5, gallery6, gallery7, gallery8,
];

// Hook to detect when an element is in view
function useInView(): [MutableRefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
}

function Gallery() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20">
       <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-black mb-2">Gallery</h2>
        <p className="text-md text-gray-500">Home / Gallery</p>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => {
            const [ref, inView] = useInView();

            return (
              <div
                key={index}
                ref={ref}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ease-out ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-52 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
