import React from 'react'
import C_Panel from '../assets/img/Cpanel.webp'
import Imunify from '../assets/img/imunify.webp'
import LiteSpeed from '../assets/img/LiteSpeed.webp'
import Soft from '../assets/img/Softaculous.webp'
import Wordpress from '../assets/img/Wordpress.webp'
import Cloud from '../assets/img/Cloudflare.webp'
import { Certificates, Clock, Hosting, Support } from './SvgFile'

const WebHosting = () => {
    const items = [
        {
            SvhIcon: (<Clock />),
            hTag: "99.9% Uptime",
            pTag: "We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings"
        },
        {
            SvhIcon: (<Hosting />),
            hTag: "Blazing Fast Web Hosting",
            pTag: "We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings"
        },
        {
            SvhIcon: (<Certificates />),
            hTag: "Free SSL Certificates",
            pTag: "We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings"
        },
        {
            SvhIcon: (<Support />),
            hTag: "24x7 Friendly Support",
            pTag: "We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings"
        },
    ];
    const Card = items.map((item, index) => (
        <div key={index} className='max-w-[275px] h-[300px]  bg-white flex flex-col justify-center items-center m-auto'>
            <div className='w-[100px] h-[100px] rounded-[50px] bg-[#F3D9D9] flex justify-center items-center'>
                {item.SvhIcon}
            </div>
            <h2 className='text-[#000] text-[20px] font-bold font-poppins  text-nowrap mt-[17px] max-w-[259px] mb-1'>{item.hTag}</h2>
            <p className='text-[#000] text-[12px] font-light max-w-[252px] text-center'>{item.pTag}</p>

        </div>
    ))
    return (
        <>
            <div className='max-w-[1284px] mr-auto ml-auto px-3'>
                <div className='grid lg:grid-cols-2 px-3 -mx-3 mt-5 sm:mt-[79px]'>
                    <div className='span-col-1 flex justify-center flex-col max-lg:items-center'>
                        <h2 className='text-gray-900 text-[25px] sm:text-[40px] lg:text-[48px] font-inter font-extrabold leading-[64px]'>True Cloud Web  Hosting</h2>
                        <p className='sm:mt-[21px] text-gray-900 sm:text-[18px] font-inter font-normal leading-[32px] max-w-[573px]'>
                            True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.

                        </p>
                    </div>
                    <div className='span-col-1 '>
                        <div className='grid grid-col-1 max-md:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 -mx-3 gap-[30px] sm:gap-[59px] mt-[25px]  '>
                            <div className='span-col-1 flex lg:justify-end justify-center  items-center'>
                                <img src={C_Panel} className='hover:brightness-[0.1] hover:scale-[0.9] transition-all duration-500 ' alt="C_Panel" />
                            </div>
                            <div className='span-col-1 flex lg:justify-end justify-center  items-center'>
                                <img src={Imunify} className='hover:brightness-[2.1] hover:scale-[0.9] transition-all duration-500 ' alt="Imunify" />
                            </div>
                            <div className='span-col-1 flex lg:justify-end justify-center  items-center'>
                                <img src={LiteSpeed} className='hover:brightness-[0.1] hover:scale-[0.9] transition-all duration-500 ' alt="LiteSpeed" />
                            </div>
                            <div className='span-col-1 flex lg:justify-end justify-center  items-center'>
                                <img src={Soft} className='hover:brightness-[0.1] hover:scale-[0.9] transition-all duration-500 ' alt="Soft" />
                            </div>
                            <div className='span-col-1 flex lg:justify-end justify-center  items-center'>
                                <img src={Wordpress} className='hover:brightness-[0.4] hover:scale-[0.9] transition-all duration-500 ' alt="Wordpress" />
                            </div>
                            <div className='span-col-1 flex lg:justify-end justify-center items-center'>
                                <img src={Cloud} className='hover:brightness-[0.9] hover:scale-[0.9] transition-all duration-500 ' alt="Cloud" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid  md:grid-cols-2 lg:grid-cols-4 !justify-center !items-center gp-6 sm:mt-[45px]'>
                    {Card}
                </div>

            </div>



        </>
    )
}

export default WebHosting