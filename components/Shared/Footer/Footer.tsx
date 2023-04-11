import React from 'react';
import ComponentWrapper from '../Wrappers/ComponentWrapper';
import Menu from './Menu';
import MuiDropdown from '../Dropdowns/MuiDropdown';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Divider from '../Divider';
import Image from 'next/image';
import Link from 'next/link';

const Employers = [
    { Name: "Hire Staff", Route: "" },
    { Name: "Advertise a job", Route: "" },
    { Name: "Employers Blog", Route: "" }
]
const JobSeekers = [
    { Name: "Career advice", Route: "" },
    { Name: "JOB TODAY Global", Route: "" }
]
const JobsToday = [
    { Name: "About JOB TODAY", Route: "" },
    { Name: "Help Center", Route: "" },
    { Name: "All job categories", Route: "" },
    { Name: "All job locations", Route: "" }
]

const Languages = [
    { name: "English", value: "en" }
]

const socialLinks = [
    {
        Icon: <FaFacebookF className='text-[20px] text-black-main/80' />,
        Url: ""
    },
    {
        Icon: <FaInstagram className='text-[20px] text-black-main/80' />,
        Url: ""
    },
    {
        Icon: <FaTwitter className='text-[20px] text-black-main/80' />,
        Url: ""
    },
    {
        Icon: <FaLinkedinIn className='text-[20px] text-black-main/80' />,
        Url: ""
    }
]

const Footer = () => {
    const [Lang, setLang] = React.useState("en")
    return (
        <>
            <ComponentWrapper style='pt-14 bg-grey-main/10' >
                <div className='w-full grid md:grid-cols-4 sm:grid-cols-2 gap-6' >
                    <Menu Title='Employers' items={Employers} />
                    <Divider styles='sm:hidden block' />
                    <Menu Title='Job Seekers' items={JobSeekers} />
                    <Divider styles='sm:hidden block' />
                    <Menu Title='Jobs Today' items={JobsToday} />
                    <Divider styles='sm:hidden block' />
                    <div className='w-full flex justify-start items-start flex-col gap-2' >
                        <div className='w-full max-w-[120px]' ><MuiDropdown value={Lang} placeholder='Language' DropdownItem={Languages} InputChange={(e: any) => setLang(e.current.value)} /></div>
                        <h2 className='font-inter font-semibold text-[18px] leading-[28px]' >Follow Us</h2>
                        <div className='flex justify-center items-center gap-3' >
                            {
                                socialLinks?.map((item: any, index: number) => {
                                    return <a key={index} href={item.Url} className='w-[36px] h-[36px] flex justify-center items-center rounded-[6px] border-[1px] border-transparent hover:border-grey-main' >{item.Icon}</a>
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className='w-full flex sm:justify-between justify-center gap-6 items-center sm:flex-row flex-col-reverse mt-8 border-t-[1px] border-grey-main py-6' >
                    <div className='flex justify-center items-center gap-3' >
                        <Image src={"/logo.svg"} alt='' width={20} height={20} className='object-contain' />
                        <p className='font-inter text-[16px] leading-[24px]' >© 2023 NextJb S.A. All Rights Reserved</p>
                    </div>
                    <div className='flex justify-center items-center gap-3' >
                        <Link href={""} className='font-inter font-normal text-[16px] leading-[24px]' >Privacy policy</Link>
                        <Link href={""} className='font-inter font-normal text-[16px] leading-[24px]' >Terms of Service</Link>
                    </div>
                </div>
            </ComponentWrapper>
        </>
    )
}

export default Footer