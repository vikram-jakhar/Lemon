import React from 'react'
import logo from '../assets/img/footer_logo.webp'
import { Loveicon } from './SvgFile'

const Footer = () => {
    return (
        <>
            <div className='bg-[#B00000] sm:mt-[110px]'>
                <div className=' max-w-[1220px] mx-auto px-3 py-[32px] pb-[1px] lg:py-[64px]'>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-5'>
                        <div className='col-span-2 md:col-span-4 flex flex-col'>
                            <img className=' w-[120px] h-[80px]' src={logo} alt='logo' />
                            <p className='text-[#E6E6E6] font-inter font-normal text-base leading-8 mt-4 max-w-[296px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        </div>
                        <div className='col-span-1 lg:col-span-2 mt-4'>
                            <ul className='flex flex-col gap-6'>
                                <li className='text-white font-Inter font-bold text-base'>Service</li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Domain</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Shared Hosting</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Cloud Hosting</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Private Hosting</a></li>
                            </ul>
                        </div>
                        <div className='col-span-1 lg:col-span-2 mt-4'>
                            <ul className='flex flex-col gap-6'>
                                <li className='text-white font-Inter font-bold text-base'>Hosting</li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Cheap Hosting</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Hosting Wordpress</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Email Hosting</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Hosting Unlimited</a></li>
                            </ul>
                        </div>
                        <div className='col-span-1 lg:col-span-2 mt-4'>
                            <ul className='flex flex-col gap-6'>
                                <li className='text-white font-Inter font-bold text-base'>Company</li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>About</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Career</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='col-span-1 lg:col-span-2 mt-4'>
                            <ul className='flex flex-col gap-6'>
                                <li className='text-white font-Inter font-bold text-base'>Help</li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>FAQ</a></li>
                                <li><a href="#" className='text-[#E6E6E6] leading-8 font-inter font-normal text-base'>Help support</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-nowrap text-white font-inter text-[12px] md:text-base flex items-center font-normal leading-8 mt-[45px] lg:mt-[96px] mb-4'>Built by Jeremiah with<span className=' px-1'><Loveicon /></span> in Lagos. Copyright {new Date().getFullYear()}</p>
                </div>
            </div>

        </>
    )
}

export default Footer