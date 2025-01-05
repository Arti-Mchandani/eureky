import React from 'react'
import blogs from "../../api/Blog.json"
const FeaturedBlog = ({ heading, description, btnText }) => {
    return (
        <div className="py-16 bg-[#EBEBEB]">
            <div className='page-width'>
            <div className='blogHeader'>
            <h2 className='font-bold text-3xl'>{heading}</h2>
            <p className='font-normal text-lg my-5'>{description}</p>
            <a href='/' className='font-semibold'>{btnText}</a>
            </div>
            <div className='blogFlex flex flex-col my-8 md:flex-row md:flex-wrap gap-7'>
                {blogs.map((i, index) => (
                    <div className={`blogCard bg-white rounded-[20px] w-full ${index === 0 ? "md:w-full lg:w-1/2" : "md:w-[48%] lg:w-[22%]"}`}key={index} >
                        <img src={i.imageUrl} alt={`Image for ${i.title}`} className="blog-image rounded-tr-3xl rounded-tl-3xl h-[274px] w-full object-cover object-center"/>
                        <div style={{padding:"20px"}}>
                        <p className="blog-date text-[#6b6b6b] text-xs mb-2 uppercase font-normal">{i.date}</p>
                        <h2 className="blog-title  text-[#0F153B] text-3xl font-black">{i.title}</h2>
                        <p className="blog-description my-4 text-lg">{i.description}</p>
                        <button className="blog-category bg-[#FFD600] border-none p-2 rounded-lg mt-5   ">{i.category}</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default FeaturedBlog