import React from 'react';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

interface props {
    value: string,
    InputChange: (e: any) => void,
    DropdownItem: Array<object>,
    Size?: "small" | "medium",
    placeholder: string
}

function MuiDropdown({ value, InputChange, DropdownItem, Size = "small", placeholder }: props) {
    return (
        <FormControl
            sx={{
                "& label.Mui-focused": {
                    color: "#016777",
                },
                width: "100%",
            }}
            size={Size}
        >
            <InputLabel sx={{
                fontSize: "12px",
                fontFamily: "Inter"
            }} id="select-category">{placeholder}</InputLabel>
            <Select
                sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#016777",
                    },
                    fontSize: "12px",
                    fontFamily: "Inter"
                }}
                value={value}
                label={placeholder}
                onChange={InputChange}
            >
                {DropdownItem?.map((item: any, index: number) => {
                    return <MenuItem key={index} sx={{
                        fontSize: "12px",
                        fontFamily: "Inter"
                    }} value={item.value}>{item.name}</MenuItem>;
                })}
            </Select>
        </FormControl>
    )
}

export default MuiDropdown