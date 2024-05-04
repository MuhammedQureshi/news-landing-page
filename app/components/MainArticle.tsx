import React from 'react'
import Image from "next/image";

const MainArticle = () => {
  return (
    <section className=" grid-flow-row">
        <div className="flex-col items-start w-fit">
            <Image className="rounded-xl" src={'/images/image-web-3-desktop.jpg'} alt={""} width={740} height={100} />
        <div className='pt-5 md:flex  md:w-[45rem]'>
            <h1 className=" text-6xl font-bold md:w-[75rem] mr-5">The Bright Future of Web 3.0?</h1>
            <div className=' mt-2'>
            <p className=' font-normal customFontP text-[15px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className='flex mt-[2rem] rounded px-8 py-2 bg-[#f15e50] text-white hover:bg-black text-lg uppercase'>
                Read More
            </button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default MainArticle