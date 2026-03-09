import React from 'react'

export default function Footer() {
  return (
    <>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 container mx-auto pt-[64px]'>
        <div className='flex flex-col gap-6'>
          <h3 className='text-xl font-bold text-white'> عدسة</h3>
          <p className='text-sm text-neutral-500 mb-6 leading-relaxed'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.

          </p>
        </div>
        <div>
          <h3 className='text-white font-semibold mb-6 flex items-center gap-2'>استكشف</h3>
          <ul>
            <li className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 mb-8'>الرئيسية</li>
            <li className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 mb-8'>المدونة</li>
            <li className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 mb-8'>من نحن</li>
          </ul>
        </div>
        <div>
          <h3 className='text-white font-semibold mb-6 flex items-center gap-2'>التصنيفات</h3>
          <ul>
            <li className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 mb-8'>إضاءة</li>
            <li className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 mb-8'>بورتريه</li>
            <li className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 mb-8'>مناظر طبيعية</li>
            <li className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 mb-8'>تقنيات</li>
          </ul>
        </div>
        <div>
          <h3 className='text-white font-semibold mb-6 flex items-center gap-2'>ابقى على اطلاع</h3>
          <p className='text-sm text-neutral-500 mb-6 leading-relaxed'>اشترك للحصول على أحدث المقالات والتحديثات.

</p>
        </div>
      </div>
    </>
  )
}
