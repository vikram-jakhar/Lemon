import React from 'react'
import { QueteMark, QueteMarkBlue } from './SvgFile'
import Image1 from '../assets/img/JPNL_2.webp'
import Image2 from '../assets/img/Korane_Scents.webp'
import Image3 from '../assets/img/Nadine_Ghaida.webp'
import Image4 from '../assets/img/LeeveOn_Branding.webp'
import Image5 from '../assets/img/Jrango_Glasses.webp'
import Image6 from '../assets/img/Crypto_Learn.webp'
import ImageCard1 from '../assets/img/JPNL.webp'
import ImageCard2 from '../assets/img/CLI.webp'
import ImageCard3 from '../assets/img/Leeveon.webp'


const RealCustomers = () => {
  return (
    <>
      <div className='container mr-auto ml-auto max-w-[1220px] lg:mt-12 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-10 sm:my-16 lg:my-20 gap-4 sm:gap-6 lg:gap-[30px] px-3 mt-12'>
          <div className='flex flex-col lg:items-end lg:pl-[10px]'>
            <div className='relative sm:pl-16 max-lg:pl-[10px]'>
              <h2 className='text-[#18191F] text-[32px] xl:text-[40px] sm:text-5xl font-extrabold sm:!leading-[64px] font-Inter max-w-[445px]'>Real Stories from Real Customers</h2>
              <p className='text-[#18191F] text-lg font-Inter font-normal leading-[32px] max-w-[573px] mt-2 sm:mt-3'>Get inspired by these stories.</p>
              <span className=' absolute top-0 left-0 max-sm:translate-x-0 lg:-translate-x-[67%] -translate-y-[40%] sm:-translate-y-[46%]'><QueteMark /></span>
            </div>
            <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg lg:max-w-[350px] w-full mt-4 lg:mt-6'>
              <div className='py-2 px-3 flex gap-4'>
                <span className='mt-20'><QueteMarkBlue /></span>
                <div className='flex flex-col  items-start'>
                  <img src={ImageCard1} alt='Icon' />
                  <p className=' font-Inter font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                  <p className=' font-Inter font-bold text-[#18191F] text-lg leading-7 mt-2 sm:mt-6'>Floyd Miles</p>
                  <p className=' font-Inter font-medium text-[#969BAB] text-sm leading-6 mb-2 sm:mb-12 md:mb-16 lg:mb-20'>Vice President, CLI</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg lg:max-w-[445px] w-full mt-6'>
              <div className='pt-10 px-8 flex gap-4'>
                <span className='mt-20'><QueteMarkBlue /></span>
                <div className='flex flex-col items-start'>
                  <img src={ImageCard2} alt='Icon' />
                  <p className=' font-Inter font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                  <p className=' font-Inter font-bold text-[#18191F] text-lg leading-7 mt-2 sm:mt-6'>Jane Cooper</p>
                  <p className=' font-Inter font-medium text-[#969BAB] text-sm leading-6 mb-2 md:mb-20 lg:mb-20'>CEO, JPNL</p>
                </div>
              </div>
            </div>
            <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg lg:max-w-[350px] w-full mt-8'>
              <div className='pt-10 px-8 flex gap-4'>
                <span className='mt-20'><QueteMarkBlue /></span>
                <div className='flex flex-col items-start'>
                  <img src={ImageCard3} alt='Icon' />
                  <p className=' font-Inter font-normal text-black text-base mt-1 leading-[32px]'>LemonWares saved our time in Hosting my company page.</p>
                  <p className=' font-Inter font-bold text-[#18191F] text-lg leading-7 mt-4 sm:mt-[26px]'>Kristin Watson</p>
                  <p className=' font-Inter font-medium text-[#969BAB] text-sm leading-6 mb-2 sm:mb-8'>Co-Founder, LeeveOn Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 pt-4'>
          <div className='flex flex-col sm:mt-5'>
            <h2 className='text-[#18191F] text-3xl sm:text-[40px] md:text-5xl font-extrabold sm:leading-[64px] font-Inter'>We serve over 100
              Nigerian Websites</h2>
            <p className='text-[#18191F] text-base sm:text-lg font-Inter font-normal leading-[32px] max-w-[573px] mt-3'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center max-sm:gap-5'>
            <div className='flex justify-center lg:justify-end '>
              <img src={Image1} className='hover:brightness-[0.5] hover:scale-[0.9] transition-all duration-500 ' alt="Image1" />
            </div>
            <div className='flex justify-center lg:justify-end'>
              <img src={Image2} className='hover:brightness-[0.5] hover:scale-[0.9] transition-all duration-500 '  alt="Image1" />
            </div>
            <div className='flex justify-center lg:justify-end'>
              <img src={Image3} className='hover:brightness-[0.5] hover:scale-[0.9] transition-all duration-500 '  alt="Image1" />
            </div>
            <div className='flex justify-center lg:justify-end'>
              <img src={Image4} className='hover:brightness-[0.5] hover:scale-[0.9] transition-all duration-500 '  alt="Image1" />
            </div>
            <div className='flex justify-center lg:justify-end'>
              <img src={Image5} className='hover:brightness-[0.5] hover:scale-[0.9] transition-all duration-500 '  alt="Image1" />
            </div>
            <div className='flex justify-center lg:justify-end'>
              <img src={Image6} className='hover:brightness-[0.5] hover:scale-[0.9] transition-all duration-500 '  alt="Image6" />
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default RealCustomers