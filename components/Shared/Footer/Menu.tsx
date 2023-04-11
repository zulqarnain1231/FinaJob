import Link from 'next/link';
import React from 'react'

interface props {
    Title: string;
    items: Array<object>
}

const Menu = ({ Title, items }: props) => {
    return (
        <div className='w-full flex justify-start items-start flex-col gap-2' >
            <h2 className='font-inter font-semibold text-[18px] leading-[28px]' >{Title}</h2>
            {
                items?.map((item: any, index: number) => {
                    return <Link key={index} href={""} className='font-inter font-normal text-[16px] leading-[28px] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black-main after:w-0 after:transition-all after:duration-300 hover:after:w-[100%]' >{item.Name}</Link>
                })
            }
        </div>
    )
}

export default Menu