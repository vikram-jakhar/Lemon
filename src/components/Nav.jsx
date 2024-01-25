import React, { useState } from 'react'
import { Logo, Phone } from './SvgFile';
import { Link } from 'react-router-dom';


const Nav = () => {
    const [show, setShow] = useState(false)
    function MobView() {
        setShow(!show)
        if (show === false) {
            document.body.classList.add('overflow-hidden')
        }
        else {
            document.body.classList.remove('overflow-hidden')
        }
    }
    function closeNav() {
        setfirst(false)
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <>
            <nav className=' max-w-[1224px] mx-auto px-3 mt-[25px] sm:mt-[41px]'>
                <div className=' flex items-center justify-between'>
                    <div className=' flex items-center gap-[65.19px] '>
                        <Link to='/'><Logo /></Link>
                        <Link to='/our' className={` hidden lg:block font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}> Our Services</Link>
                    </div>
                    <div className=' flex items-center gap-[33px] min-[992px]:gap-[70px] min-[1200px]:gap-[170px]'>
                        <ul className={`${show === true ? "left-0" : "left-[-100%]"} flex items-center gap-[33px] mobileview max-[991px]:absolute max-[991px]:top-0 max-[991px]:h-full max-[991px]:justify-center max-[991px]:flex-col max-[991px]:w-full max-[991px]:duration-300 max-[991px]:z-[4] max-[991px]:bg-white`}>
                            <li><Link   to='/' className={` block lg:hidden font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}> Our Services</Link></li>
                            <li><Link to='/about' className={`  font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}>About</Link></li>
                            <li><Link to='/Blog' className={`  font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}>Blog&News</Link></li>
                            <li><Link to='/Contact ' className={`  font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}>Contact </Link></li>
                            <li><Link to='/Account' className={` block 576:hidden font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}>Account</Link></li>
                            <li className=' flex gap-[11px] 576:hidden'><Phone /><Link to='/tel:+2349067322844' className={`font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}>+2349067322844</Link></li>
                        </ul>
                        <ul className=' items-center gap-[30px]  hidden 576:flex'>
                            <li><Link to='/Account' className={` font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}>Account</Link></li>
                            <li className=' flex gap-[11px] border-l border-l-[#000] pl-4'><Phone /><Link to='/tel:+2349067322844' className={`font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300`}>+2349067322844</Link></li>
                        </ul>
                        <label className=" lg:hidden" onClick={MobView}>
                            {show ? (
                                <div className="z-20 relative cursor-pointer group ">
                                    <span className="flex bg-black  group-hover:bg-[#BD7D41]  absolute -left-7 duration-500 top-1 rotate-45 h-[2px] w-6"></span>
                                    <span className="flex bg-black group-hover:bg-[#BD7D41] absolute -left-7 duration-500 -rotate-45 h-[2px] w-6 mt-1"></span>
                                </div>
                            ) : (
                                <div className="z-20 relative cursor-pointer group">
                                    <span className="flex bg-black group-hover:bg-[#BD7D41]  h-[2px] duration-500 w-6"></span>
                                    <span className="flex bg-black group-hover:bg-[#BD7D41]  h-[2px] duration-500 w-6 mt-1"></span>
                                    <span className="flex bg-black group-hover:bg-[#BD7D41] h-[2px] duration-500 w-6 mt-1"></span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav