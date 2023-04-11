import React from 'react';
import ComponentWrapper from '../Wrappers/ComponentWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Buttons/Button';

const Menus = [
    {
        Name: "Home",
        Route: "/"
    },
    {
        Name: "About US",
        Route: ""
    },
    {
        Name: "Explore jobs",
        Route: ""
    },
    {
        Name: "Blogs",
        Route: ""
    },
]

const Navbar = () => {
    const Router = useRouter();
    return (
        <ComponentWrapper style='h-[80px] bg-brand-main' >
            <div className='w-full h-full flex justify-between items-center' >
                {/* Logo */}
                <div className='w-[50px] h-[50px] relative ' >
                    <Image src={"/logo.svg"} alt='' fill className='object-contain' />
                </div>

                {/* Menus */}
                <div className='md:flex hidden justify-center items-center gap-10' >
                    {
                        Menus?.map((item: any, index: number) => {
                            return <Link key={index} href={item.Route} className={`font-inter font-medium text-[14px] leading-[32px] text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-[100%] ${item.Route === Router.pathname && "after:w-[100%]"} `} >
                                {item.Name}
                            </Link>
                        })
                    }
                    <div className='flex justify-center items-center gap-3' >
                        <Link href={""} >
                            <Button Text='Login' variant='contained' style='w-[120px] h-[48px] text-black-abbey bg-white' />
                        </Link>
                        <Link href={""} >
                            <Button Text='Sign Up' variant='outlined' style='w-[120px] h-[48px] text-white border-white' />
                        </Link>
                    </div>
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default Navbar