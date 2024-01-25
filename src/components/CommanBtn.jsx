import React from 'react'

const CommanBtn = (props) => {
    return (
        <div>

            <button onClick={props.fun} className={` ${props.padding}  isolation-auto z-10 hover:text-white duration-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-0  before:bg-[#B00000] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
 relative text-nowrap bg-transparent border border-solid border-[#000] rounded-[8px] font-poppins text-[14px]  text-[#000] font-normal p-[12px]`}>
                {props.text}
            </button>
        </div>
    )
}

export default CommanBtn