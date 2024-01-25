import React, { useState, useEffect } from 'react';
import backtotop from '../assets/img/back-to-top-.webp'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed z-30 bottom-8 right-8 p-2 bg-[#B00000] border border-black border-silod text-white rounded-full transition-opacity duration-300 ease-in-out focus:outline-none animate-bounce`}
      onClick={scrollToTop}
    >
      <img src={backtotop} alt="backtotop" className='max-w-[35px] max-h-[35px]' />
    </button>
  );
};

export default BackToTop;