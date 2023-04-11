import React from 'react'

interface Props{
    style?:string;
    setState:any;
    state:boolean;
    text:string;
}


const Button:React.FC<Props> = ({style,setState,state,text}) => {
  return (
    <button onClick={setState} className={`w-[110px] h-[46px] border ${state? 'border-indigo-500 text-indigo-500':'text-black-main'} rounded-[6px] text-[15px]  font-inter font-normal hover:border-indigo-500 duration-300 ${style}`}>
   {text}
    </button>
  )
}

export default Button