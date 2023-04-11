import React from 'react';
import ComponentWrapper from '../Wrappers/ComponentWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Buttons/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


const Menus = [
    {
        Name: "Home",
        Route: "/"
    },
    {
        Name: "About Us",
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
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <ComponentWrapper style='md:h-[80px] h-[60px] bg-brand-main' >
            <div className='w-full h-full flex justify-between items-center' >
                {/* Logo */}
                <div className='md:w-[50px] w-[40px] md:h-[50px] h-[40px] relative ' >
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

                {/* hamburger */}
                <RxHamburgerMenu onClick={toggleDrawer} className='md:hidden block text-[30px] cursor-pointer text-white' />
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={{ width: "100%" }}
            >
                <div className='w-full h-full bg-brand-main' >
                    <div className='h-[60px] w-full flex justify-between items-center px-4' >
                        <Image src={"/logo.svg"} alt='' width={40} height={40} className='object-contain' />
                        <TfiClose onClick={toggleDrawer} className='md:hidden block text-[24px] cursor-pointer text-white' />
                    </div>
                    <div className='w-full flex justify-center items-center flex-col gap-4 mt-8' >
                        {
                            Menus?.map((item: any, index: number) => {
                                return <Link key={index} href={item.Route} className={`font-inter font-medium text-[14px] leading-[32px] tracking-[0.2rem] text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-300 hover:after:w-[100%] ${item.Route === Router.pathname && "after:w-[100%]"} `} >
                                    {item.Name}
                                </Link>
                            })
                        }
                        <div className='flex justify-center items-center gap-3 mt-6' >
                            <Link href={"/login"} >
                                <Button Text='Login' variant='contained' style='w-[120px] h-[48px] text-black-abbey bg-white' />
                            </Link>
                            <Link href={"/signup"} >
                                <Button Text='Sign Up' variant='outlined' style='w-[120px] h-[48px] text-white border-white' />
                            </Link>
                        </div>
                    </div>
                </div>
            </Drawer>
        </ComponentWrapper>
    )
}

export default Navbar