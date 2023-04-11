import React from 'react';

interface props {
    placeholder: string;
    required?: boolean;
    type?: string;
    disable?: boolean;
    value: string;
    ChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    styles?: string
}

const SimpleInput = ({ placeholder, required, type = "text", disable = false, value, ChangeEvent, name, styles }: props) => {
    return (
        <input
            autoComplete="off"
            autoCorrect="off"
            required={required}
            disabled={disable}
            className={`w-full font-inter font-medium text-black-abbey bg-transparent rounded-[8px] border-[1px] border-grey-main outline-brand-main px-4 ${styles}`}
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={ChangeEvent}
        />
    )
}

export default SimpleInput