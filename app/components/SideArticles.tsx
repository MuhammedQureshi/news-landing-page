import React from 'react'
import { Separator } from './ui/Separator'

const Articles = [
    {
        head: 'Hydrogen VS Electric Cars',
        preview: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        head: 'The Downsides of AI Artistry',
        preview: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        head: 'Is VC Funding Drying Up?',
        preview: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]


function SideArticles() {

  return (
    <div className='pt-[4rem] md:pt-0'>
    <div className='md:flex flex-col bg-[#00001a] md:w-[20rem] md:ml-6 rounded justify-between'>
        <div className='p-6'>
            <h1 className='text-4xl font-bold text-[#e9ab53]'>New</h1>
            {Articles.map((article, index) => (
                <div className='pt-6' key={article.head}>
                    <h1 className='text-white hover:text-[#e9ab53] text-xl font-semibold cursor-pointer'>{article.head}</h1>
                    <p className='text-[15px] text-[#c5c6ce] opacity-80 pt-2'>
                        {article.preview}
                    </p>
                    {index < 2 && <Separator className='my-5 opacity-30 bg-[#c5c6ce]' />}
                </div>
            ))}
        </div>
    </div>
</div>

  )
}

export default SideArticles