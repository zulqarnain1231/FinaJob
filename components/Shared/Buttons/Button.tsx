import React from 'react';

interface Props {
    Text: string;
    style?: string;
    variant: "contained" | "outlined" | "text";
    Type?: "button" | "submit" | "reset"
}

function Button({ Text, style, variant, Type }: Props) {
    const RenderButton = () => {
        if (variant === "text") {
            return <button type={Type} className={`font-inter font-bold text-[14px] leading-[21px] text-center bg-transparent min-w-[60px] rounded-[6px] ${style}`} >
                {Text}
            </button>
        }
        else if (variant === "outlined") {
            return <button type={Type} className={`font-inter font-bold text-[14px] leading-[21px] text-center bg-transparent border-[2px] min-w-[60px] rounded-[6px] ${style}`} >
                {Text}
            </button>
        }
        else {
            return <button type={Type} className={`font-inter font-bold text-[14px] leading-[21px] text-center min-w-[60px] border-[2px] border-transparent rounded-[6px] ${style}`} >
                {Text}
            </button>
        }

    }

    return RenderButton()
}

export default Button