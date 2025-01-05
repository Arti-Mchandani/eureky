import React, { useState, useEffect } from 'react';

const PortalAdv = () => {
  const [zoom, setZoom] = useState(1); 
  const [scrollY, setScrollY] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

 
      if (currentScrollY < scrollY) {
        setZoom((prevZoom) => Math.min(prevZoom + 0.05, 1.5)); 
      }
    
      else if (currentScrollY > scrollY) {
        setZoom((prevZoom) => Math.max(prevZoom - 0.05, 1)); 
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const spotlightStyle = {
    transition: 'transform 0.8s ease', 
    transform: `scale(${zoom})`,
    opacity: 1,
  };

  return (
    <div className="portalAdv page-width hiddeb md:block relative overflow-hidden " >
      <div className='md:pb-[53%]'>
      <img
        src="/images/EK-Layer-1-1.png"
        className='absolute z-10'
    
        alt="Layer 1"
      />
      <img
        src="/images/EK-Layer-2-1.png"
        className='absolute z-20'
   
        alt="Layer 2"
      />
      <img
        src="/images/EK-Layer-3-1.png"
        className='absolute z-30'
       
        alt="Layer 3"
      />
      <img
        src="/images/EK-Spotlight-Hero-Dashboard.png"
        className='absolute z-40'
        style={{
          ...spotlightStyle,
        }}
        alt="Spotlight"
      />
      </div>
    </div>
  );
};


export default PortalAdv;
