import React from 'react'

function Posts({ post }) {

    const {image , title , readTime , date } = post ;
  return (
    <>
    
    <div className='bg-[#161616] rounded-3xl group cursor-pointer'>
        <div className="img">
            <img src={image} alt="" className='w-full h-48 object-cover rounded-t-3xl p-2' />
        </div>

        <div className='flex justify-between content-between px-3'>
            <span>{readTime}</span>
            <span>{date}</span>
        </div>

        <div className='px-3 py-3'>
            <h2 className='group-hover:text-[#F95200] '>{title}</h2>
        </div>
    </div>
    </>
  )
}

export default Posts