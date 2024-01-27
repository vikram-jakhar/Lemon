import React, { useState } from 'react'
import { RightIcon } from './SvgFile'


const LemonWares = () => {
    const [color, setcolor] = useState(false)
    const [data, setdata] = useState("tab1")
    function tabs(tab) {
        setdata(tab);
    }
    const Items = [
        { plan: "Starter", price: "$2.80", pricePremium: "$5.80" },
        { plan: "Standard", price: "$4.20", pricePremium: "$8.80" },
        { plan: "Suprem", price: "$7.00", pricePremium: "$12.80" },
    ]
    function togglechane() {
        setcolor(!color)
    }

    return (
        <>
            <div className='max-w-[1097px] mr-auto ml-auto px-3  sm:mt-[133px]'>
                <h2 className='text-[30px] md:text-[35px] lg:text-[50px] text-[#000] font-poppins font-semibold sm:leading-[60px] text-center m-auto max-w-[650px]'>Ready to get started with Lemon Wares?</h2>
                <p className='text-[#000] text-[25px] font-poppins font-normal sm:leading-[25px] text-center mt-2 sm:mt-[38px] max-w-[464px] m-auto'>Choose the package that suits you</p>
                <div className='flex items-center  justify-center max-w-[856px]   gap-7 mt-6 sm:mt-[57px]'>
                    <p className='text-[#000] text-[25px] font-normal leading-[25px] text-center'>Monthly</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" value="" type="checkbox" />
                        <div onClick={togglechane} className={`${color ? "bg-[yellow]" : ""} bg-[#B00000]   rounded-full outline-none duration-1000 after:duration-300 w-24 h-12  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute  peer-checked:after:rotate-180 after:bg-white  after:outline-none after:h-8 after:w-8 after:top-[7px] after:left-[7px]   peer-checked:after:translate-x-12`}>
                        </div>
                    </label>
                    <p className='text-[#000] text-[25px] font-normal leading-[25px] flex items-center  text-center relative'>Yearly <span className='max-md:hidden absolute py-2 px-3 rounded-[8px] bg-[#FFE87A] left-[100px]  text-nowrap'>20%  discount</span> </p>
                </div>
                <div className='w-full max-w-[886px] flex items-center mx-auto border-b-4 border-solid border-[#C4C4C4] mt-10 mb-10'>
                    <div className={`${data === "tab1" ? " relative after:w-full flex justify-center after:h-[4px] after:bg-[#B00000] after:absolute after:bottom-[-3px]  after:left-[0]  " : "text-[#000] "} w-1/2 flex justify-center `}>
                        <botton onClick={() => tabs('tab1')} className="cursor-pointer text-center font-poppins text-[30px] font-semibold sm:leading-[40px]" >Basic</botton>
                    </div>
                    <div className={`${data === "tab2" ? " relative after:w-full flex justify-center after:h-[4px] after:bg-[#B00000] after:absolute after:bottom-[-3px]  after:left-[0]  " : "text-[#000] "} w-1/2 flex justify-center`}>
                        <botton onClick={() => tabs('tab2')} className="cursor-pointer text-center font-poppins text-[30px] font-semibold sm:leading-[40px]" >Premium</botton>
                    </div>
                </div>
                <p ></p>
                {
                    data === "tab1" && <div className='grid lg:mb-10 lg:grid-cols-3  sm:mt-16 md:mt-[95px] px-3 gap-7 lg:gap-0'>
                        {
                            Items.map((items, index) => (
                                <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl lg:max-w-[299px] w-full h-auto mb-6'>
                                    <div className='p-[34px] '>
                                        <h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.plan}</h2>
                                        <p className=' font-Poppins text-xs font-normal text-black mt-3 leading-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                                        <p className=' text-black text-4xl sm:text-[42px] font-semibold font-Poppins leading-8 mt-5 md:mt-7'>{items.price}</p>
                                        <div className={` ${color ? "per year" : "per month"} pt-4 text-black text-sm font-Poppins font-light`}>Per month</div>
                                        <button className=' text-black font-semibold font-Poppins text-sm text-center w-full bg-transparent border-[2px]  relative isolation-auto z-10 hover:text-white duration-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-0  before:bg-[#B00000] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 border-black rounded-xl leading-8 py-[9px] my-6 sm:my-8 md:my-[35px]'>
                                            Choose this Plan</button>
                                        <div className='flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start '>
                                            <div>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-bold gap-4 sm:gap-6'><span><RightIcon /></span>2GB SSD</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                                            </div>
                                            <div>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] sm:mt-0 lg:mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] mb-[12px]'><span><RightIcon /></span>Softaculous</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
                {
                    data === "tab2" && <div className='grid lg:mb-10 lg:grid-cols-3 sm:mt-16 md:mt-[95px] px-3 gap-7 lg:gap-0'>
                        {
                            Items.map((items, index) => (
                                <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl lg:max-w-[299px] w-full lg-mt-0 h-auto'>
                                    <div className='p-[34px]'>
                                        <h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.plan}</h2>
                                        <p className=' font-Poppins text-xs font-normal text-black mt-3 leadin  g-[18px]'>with all your customers via all conversation channels in one central dashboard.</p>
                                        <p className=' text-black text-4xl sm:text-[42px] font-semibold font-Poppins leading-8 mt-5 md:mt-7'>{items.pricePremium}</p>
                                        <p className={` text-sm pt-4 text-black font-Poppins font-light`}>Per month</p>
                                        <button className=' text-black font-semibold font-Poppins text-sm text-center w-full bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-6 sm:my-8 md:my-[35px] relative isolation-auto z-10 hover:text-white duration-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-0  before:bg-[#B00000] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700'>Choose this Plan</button>
                                        <div className='flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-around lg:justify-start'>
                                            <div>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-bold gap-4 sm:gap-6'><span><RightIcon /></span>2GB SSD</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                                            </div>
                                            <div>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] sm:mt-0 lg:mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                                                <p className='flex items-center text-[#808080] text-sm sm:text-base font-Inter font-semibold gap-4 sm:gap-6 mt-[15px] mb-[12px]'><span><RightIcon /></span>Softaculous</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>

        </>
    )
}

export default LemonWares