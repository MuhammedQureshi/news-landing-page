import Image from 'next/image'
import React from 'react'

const content = [
    {
        src : '/images/image-retro-pcs.jpg',
        num : '01',
        title: 'Reviving Retro PCs',
        para: 'What happens when old PCs are given modern upgrades?'
    },
    {
        src : '/images/image-top-laptops.jpg',
        num : '02',
        title: 'Top 10 Laptops of 2022',
        para: 'Our best picks for various needs and budgets.'
    },    
    {
        src : '/images/image-gaming-growth.jpg',
        num : '03',
        title: 'The Growth of Gaming',
        para: 'How the pandemic has sparked fresh opportunities.'
    },
]

const BottomArticles = () => {
  return (
    <div className='md:flex gap-[1.5rem] w-full h-[12rem]'>
        {content.map((article) => (
             <div className='flex md:mt-0 mt-[2rem]' key={article.num}>
                <Image src={article.src} alt={'Img'} width={130} height={50} />
                <div className='ml-6'>
                    <h1 className='text-4xl font-semibold text-[#c5c6ce]'>{article.num}</h1>
                    <h2 className='text-xl font-bold my-2'>{article.title}</h2>
                    <p className='text-[15px] text-[#5d5f79]'>{article.para}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BottomArticles