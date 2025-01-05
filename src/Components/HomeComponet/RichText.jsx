import React from 'react'

const RichText = ({subtitle , mainHeading , imgSrc , description ,btnText, backgroundImage}) => {
    return (
      <div style={{backgroundImage: backgroundImage === "true" ? "linear-gradient(180deg, #ebebeb 0%, #FCFCFC 100%)" : "transparent"}}>
        <div className='page-width text-center py-16 my-0 mx-auto sm:pt-8 max-w-[760px]'>
          <p  className='text-[#6B6B6B] mb-3 text-3xl'>{subtitle}</p>
          <h2 className='text-5xl font-black my-4 text-[#0F153B]'>{mainHeading}</h2>
          {imgSrc && <img src={imgSrc} alt="computerImg" className='my-0 mx-auto'/>}
          <p  className='text-lg mt-5' >{description}</p>
          <button className='bg-[#CC0016] text-white text-xs py-3 px-6 rounded-3xl font-medium cursor-pointer mt-5 uppercase' >{btnText}</button>
        </div>
        </div>
      );
}

  
  export default RichText;
  