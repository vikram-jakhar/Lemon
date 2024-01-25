import React, { useState } from 'react'
import Home_img from '../assets/img/home-tab-img.webp'
import CommanBtn from './CommanBtn'
import { ElipseLeftSvg, ElipseRighLastSvg, ElipseRightSvg } from './SvgFile'

const HomeTab = () => {
    const [data, setdata] = useState("tab1")
    function tabs(tab) {
        setdata(tab);
    }
    return (
        <>
            <div className='max-w-[1190px] mr-auto ml-auto px-3 mt-7 sm:mt-[80px]'>
                <div className=' flex gap-[15px] max-w-[242px] border-solid border-b border-[#E5E5E5] px-3 '>
                    <button onClick={() => tabs("tab1")} className={`${data === "tab1" ? "text-red-600 relative after:w-[47px] after:h-[1px] after:bg-[#B00000] after:absolute after:bottom-[-1px] after:left-0  " : "text-[rgba(214,212,212,0.88)]"} flex text-[15px] font-poppins font-semibold `}>Hosting</button>
                    <button onClick={() => tabs("tab2")} className={`${data === "tab2" ? "text-red-600 relative after:w-[57px] after:h-[1px] after:bg-[#B00000] after:absolute after:bottom-[-1px] after:left-0 " : "text-[rgba(214,212,212,0.88)]"} flex text-[15px] font-poppins font-semibold `}>Domain</button>
                    <button onClick={() => tabs("tab3")} className={`${data === "tab3" ? "text-red-600 relative after:w-[30px] after:h-[1px] after:bg-[#B00000] after:absolute after:bottom-[-1px] after:left-0 " : "text-[rgba(214,212,212,0.88)]"} text-[15px] font-poppins font-semibold text-[rgba(214,212,212,0.88)]`}>SEO </button>
                    <button onClick={() => tabs("tab4")} className={`${data === "tab4" ? "text-red-600 relative after:w-[47px] after:h-[1px] after:bg-[#B00000] after:absolute after:bottom-[-1px]  after:left-0" : "text-[rgba(214,212,212,0.88)]"} text-[15px] font-poppins font-semibold text-[rgba(214,212,212,0.88)]`}>Email</button>

                </div>
                {data === "tab1" &&
                    <div className='grid lg:grid-cols-2 justify-center px-3 '>
                        <div className='span-col-1  flex flex-col justify-center items-center lg:items-start 
                        '>
                            <h1 className=' text-[#2E2E2E] text-center lg:text-left text-[36px] md:text-[50px] lg:text-[64px] font-bold sm:leading-[77.5px] font-poppins'>Premium Web Hosting for Your Website</h1>
                            <p className='text-[#808080]  text-[16px] font-normal font-inter leading-[28px] max-w-[448px] tracking-[0.8px] mt-4 sm:mt-[34px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className='flex max-sm:flex-col max-sm:justify-center gap-[24px] mt-5 sm:mt-[60px] '>
                                <CommanBtn text='Create an Account' />
                                <CommanBtn text='Choose your plan' />
                            </div>
                        </div>
                        <div className='span-col-1  flex justify-center lg:justify-end mt-8 lg:mt-0 px-3'>
                            <div className=' !relative'>
                                <img src={Home_img} alt="Home_img" />
                                <span className=' absolute bottom-[12%] right-[-6%]'><ElipseRighLastSvg /></span>
                                <span className=' absolute top-[13%] right-[-5%]'><ElipseRightSvg /></span>
                                <span className=' absolute bottom-[32%] left-[-5%]'><ElipseLeftSvg /></span>
                            </div>
                        </div>
                    </div>
                }
                {data === "tab2" &&
                    <div className=' grid lg:grid-cols-2 justify-center sm:mt-4  px-3'>
                        <div className='span-col-1  flex justify-center lg:justify-start mt-8 lg:mt-0 px-3'>
                            <img src={Home_img} alt="Home_img" />
                        </div>
                        <div className='span-col-1  flex flex-col justify-center items-center lg:items-start '>
                            <h1 className=' text-[#2E2E2E] text-center lg:text-left text-[36px] md:text-[50px] lg:text-[64px] font-bold sm:leading-[77.5px] font-poppins'>Premium Web Hosting for Your Website</h1>
                            <p className='text-[#808080]  text-[16px] font-normal font-inter leading-[28px] max-w-[448px] tracking-[0.8px] mt-4 sm-mt-[34px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className='flex max-sm:flex-col max-sm:justify-center gap-[24px] mt-5 sm:mt-[60px]'>
                                <CommanBtn text='Create an Account' />
                                <CommanBtn text='Choose your plan' />
                            </div>
                        </div>

                    </div>
                }
                {data === "tab3" &&
                    <div className='grid lg:grid-cols-2 justify-center '>
                        <div className='span-col-1  flex flex-col justify-center items-center lg:items-start'>
                            <h1 className=' text-[#2E2E2E] text-center lg:text-left text-[36px] md:text-[50px] lg:text-[64px] font-bold sm:leading-[77.5px] font-poppins'>Premium Web Hosting for Your Website</h1>
                            <p className='text-[#808080]  text-[16px] font-normal font-inter leading-[28px] max-w-[448px] tracking-[0.8px] mt-4 sm:mt-[34px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className='flex max-sm:flex-col max-sm:justify-center gap-[24px] mt-5 sm:mt-[60px]'>
                                <CommanBtn text='Create an Account' />
                                <CommanBtn text='Choose your plan' />
                            </div>
                        </div>
                        <div className='span-col-1  flex justify-center lg:justify-end mt-8 lg:mt-0'>
                            <img src={Home_img} alt="Home_img" />
                        </div>
                    </div>
                }
                {data === "tab4" &&
                    <div className=' grid lg:grid-cols-2 justify-center sm:mt-4 px-3'>
                        <div className='span-col-1  flex justify-center lg:justify-start mt-8 lg:mt-0'>
                            <img src={Home_img} alt="Home_img" />
                        </div>
                        <div className='span-col-1  flex flex-col justify-center items-center lg:items-start'>
                            <h1 className=' text-[#2E2E2E] text-center lg:text-left text-[36px] md:text-[50px] lg:text-[64px] font-bold sm:leading-[77.5px] font-poppins'>Premium Web Hosting for Your Website</h1>
                            <p className='text-[#808080]  text-[16px] font-normal font-inter leading-[28px] max-w-[448px] tracking-[0.8px] sm:mt-[34px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className='flex max-sm:flex-col max-sm:justify-center gap-[24px] mt-5 sm:mt-[60px]'>
                                <CommanBtn text='Create an Account' />
                                <CommanBtn text='Choose your plan' />
                            </div>
                        </div>

                    </div>
                }
            </div>


        </>
    )
}

export default HomeTab