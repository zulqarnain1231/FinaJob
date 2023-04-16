import React, { useState } from 'react';
import Image from 'next/image';
import ComponentWrapper from '../Shared/Wrappers/ComponentWrapper';
import Link from 'next/link';
import SimpleInput from '../Shared/Inputs/SimpleInput';
import Button from '../Shared/Buttons/Button';


const Menus = [
  {
    Name: "Explore jobs",
    Route: ""
  },
  {
    Name: "Login",
    Route: "/login"
  },
  {
    Name: "Sign Up",
    Route: ""
  },
]

function Hero() {
  const [Inputs, SetInputs] = useState({
    WhichPosition: "",
    WhichCity: "",
  })
  const InputChange = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const SearchJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <ComponentWrapper style='h-screen bg-[url("/hero.jpg")] bg-cover bg-center' >
      <div className='w-full h-[80px] flex justify-between items-center' >
        <div className='w-[50px] h-[50px] relative ' >
          <Image src={"/logo.svg"} alt='' fill className='object-contain' />
        </div>
        <div className='flex justify-center items-center md:gap-4 gap-2' >
          {
            Menus?.map((item: any, index: number) => {
              return <Link key={index} href={item.Route} className={`font-inter font-medium md:text-[14px] text-[12px] leading-[32px] text-white relative rounded-full px-4 py-1 whitespace-nowrap bg-black-abbey/80 hover:bg-black-abbey`} >
                {item.Name}
              </Link>
            })
          }
        </div>
      </div>
      <div className='w-full h-[calc(100%-80px)] flex justify-center items-center' >
        <form onSubmit={SearchJob} className='w-full max-w-[950px] p-4 grid md:grid-cols-[4fr,4fr,2fr] gap-4 bg-white rounded-[10px]' >
          <SimpleInput name='WhichPosition' placeholder='Which position?' ChangeEvent={InputChange} value={Inputs.WhichPosition} required styles='md:h-[60px] h-[48px]' />
          <SimpleInput name='WhichCity' placeholder='Which city?' ChangeEvent={InputChange} value={Inputs.WhichCity} required styles='md:h-[60px] h-[48px]' />
          <Button OnCLick={()=> {}} Text='Find jobs' variant='contained' Type='submit' style='w-full md:h-[60px] h-[40px] bg-brand-main text-white rounded-[8px]' />
        </form>
      </div>
    </ComponentWrapper>
  )
}

export default Hero